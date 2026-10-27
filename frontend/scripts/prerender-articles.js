// Runs after `craco build`. For every article hosted on this site it writes
// build/publications/<slug>/index.html: a copy of the app shell with the
// article's own title, description, canonical link and full text in the HTML,
// so search engines can index each article at its own address. It also
// regenerates build/sitemap.xml to include every article.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SITE = "https://wakasa.online";
const ROOT = path.join(__dirname, "..");
const BUILD = path.join(ROOT, "build");

// Minimal loader for the plain-JS article modules (import/export syntax only)
function loadModule(file) {
  let src = fs.readFileSync(file, "utf8");
  src = src
    .replace(/^import\s+(\w+)\s+from\s+["'](.+?)["'];?\s*$/gm, (m, name, spec) =>
      `const ${name} = __load(${JSON.stringify(spec)});`)
    .replace(/^export\s+default\s+/m, "module.exports.default = ")
    .replace(/^export\s+const\s+(\w+)\s*=/gm, "const $1 = module.exports.$1 =");
  const module = { exports: {} };
  const __load = (spec) => {
    let target = path.resolve(path.dirname(file), spec);
    if (!target.endsWith(".js")) target += ".js";
    return loadModule(target).default;
  };
  vm.runInNewContext(src, { module, __load });
  return module.exports;
}

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const setMeta = (html, attr, key, value) => {
  const re = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`);
  return re.test(html) ? html.replace(re, `$1${esc(value)}$2`) : html;
};

const { PUBLICATIONS } = loadModule(path.join(ROOT, "src/articles/publications.js"));
const shell = fs.readFileSync(path.join(BUILD, "index.html"), "utf8");
const today = new Date().toISOString().slice(0, 10);
const pages = [{ loc: `${SITE}/`, lastmod: today, priority: "1.0" }];

for (const a of PUBLICATIONS) {
  if (!a.slug || !a.body) continue; // external articles have no page here
  const url = `${SITE}/publications/${a.slug}/`;
  const title = `${a.seoTitle || a.title} | Belinda Wakasa`;
  const description = a.summary || a.subtitle || "";
  const body = a.body.split("%PUBLIC%").join("");

  let html = shell;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  html = html.replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`);
  html = setMeta(html, "name", "description", description);
  html = setMeta(html, "property", "og:type", "article");
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "property", "og:title", a.title);
  html = setMeta(html, "property", "og:description", description);
  html = setMeta(html, "name", "twitter:title", a.title);
  html = setMeta(html, "name", "twitter:description", description);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description,
    author: { "@type": "Person", name: "Belinda Wakasa", jobTitle: "Advocate of the High Court of Kenya", url: `${SITE}/` },
    publisher: { "@type": "Person", name: "Belinda Wakasa" },
    ...(a.isoDate ? { datePublished: a.isoDate, dateModified: a.isoDate } : {}),
    image: `${SITE}/og-image.png`,
    mainEntityOfPage: url,
    inLanguage: "en-GB"
  };
  const ld = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;
  let head = ld(jsonLd);
  if (a.keywords) head = `<meta name="keywords" content="${esc(a.keywords)}">` + head;
  if (Array.isArray(a.faq) && a.faq.length) {
    head += ld({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: a.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a }
      }))
    });
  }
  html = html.replace("</head>", `${head}</head>`);

  // Article text in the HTML itself; React replaces it with the styled page on load
  const content =
    `<article style="max-width:48rem;margin:0 auto;padding:8rem 1.5rem 4rem;font-family:Georgia,serif;line-height:1.7">` +
    `<p><a href="/#publications">All publications</a></p>` +
    `<p>${esc(a.category || "")} · ${esc(a.date || "")}</p>` +
    `<h1>${esc(a.title)}</h1>` +
    (a.subtitle ? `<p>${esc(a.subtitle)}</p>` : "") +
    `<p>Belinda Wakasa, Advocate of the High Court of Kenya</p>` +
    body +
    `</article>`;
  html = html.replace(/<div id="root"><\/div>/, `<div id="root">${content}</div>`);

  const dir = path.join(BUILD, "publications", a.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
  pages.push({ loc: url, lastmod: a.isoDate || today, priority: "0.8" });
  console.log(`Pre-rendered ${url}`);
}

const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  pages
    .map((p) => `  <url>\n    <loc>${p.loc}</loc>\n    <lastmod>${p.lastmod}</lastmod>\n    <priority>${p.priority}</priority>\n  </url>`)
    .join("\n") +
  `\n</urlset>\n`;
fs.writeFileSync(path.join(BUILD, "sitemap.xml"), sitemap);
console.log(`Wrote sitemap.xml with ${pages.length} URLs`);
