import esgInKenyaBody from "./esgInKenya.js";

// Articles & publications
// Add each article as an object, newest first, e.g.:
// {
//   title: "Article title",
//   publication: "Where it was published (e.g. LinkedIn, Kenya Law Review)",
//   date: "October 2026",
//   category: "Corporate Law",
//   summary: "One or two sentences describing the article.",
//   url: "https://link-to-article"   (external article)
// For an article hosted on this site, add slug, url: "/publications/<slug>/",
// isoDate ("YYYY-MM-DD"), and body. A static, search-engine-readable page is
// generated for it at build time by scripts/prerender-articles.js.
// }
export const PUBLICATIONS = [
  {
    slug: "esg-in-kenya",
    title: "ESG in Kenya: From Voluntary Commitment to Legal Accountability",
    subtitle: "What every board, business and advocate needs to know before IFRS S1 and S2 reporting begins on 1 January 2027.",
    publication: "Article",
    date: "October 2026",
    readTime: "18 min read",
    category: "Law & Governance",
    summary: "ESG reporting becomes mandatory for Kenya's Public Interest Entities from 2027. The legal framework, recent court decisions and what boards should do now.",
    url: "/publications/esg-in-kenya/",
    isoDate: "2026-10-13",
    download: "articles/esg-in-kenya/ESG-in-Kenya-Belinda-Wakasa.docx",
    pillars: [
      { letter: "E", name: "Environmental", text: "Emissions, water, waste, pollution, climate risk" },
      { letter: "S", name: "Social", text: "Safety, labour, human rights, communities, data" },
      { letter: "G", name: "Governance", text: "Board oversight, ethics, disclosure, assurance" }
    ],
    body: esgInKenyaBody
  }
];
