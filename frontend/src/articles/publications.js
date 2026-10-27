import esgInKenyaBody from "./esgInKenya.js";
import pboRegistrationKenyaBody from "./pboRegistrationKenya.js";

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
    slug: "how-to-register-an-ngo-pbo-in-kenya",
    title: "How to Register an NGO in Kenya in 2026: The PBO Regime Explained",
    seoTitle: "How to Register an NGO (PBO) in Kenya in 2026: Steps, Fees & Requirements",
    subtitle: "The NGO Board is gone and new Regulations are in force. Here is what founders, boards and existing NGOs need to know.",
    publication: "Article",
    date: "October 2026",
    readTime: "6 min read",
    category: "Not-for-Profit Law",
    summary: "How to register an NGO as a Public Benefit Organisation (PBO) in Kenya under the PBO Act and the 2026 Regulations: types of PBO, steps, PBORA fees, timelines and what existing NGOs must do.",
    keywords: "NGO registration Kenya, how to register an NGO in Kenya, PBO registration Kenya, Public Benefit Organisation Kenya, PBORA, PBO Regulations 2026, PBO Act Cap 134, NGO Board Kenya, NGO registration fees Kenya, international PBO Kenya",
    url: "/publications/how-to-register-an-ngo-pbo-in-kenya/",
    isoDate: "2026-10-27",
    theme: "blue",
    download: "articles/pbo-registration-kenya/pbo-registration-guide-kenya-2026.pdf",
    faq: [
      { q: "Who registers NGOs in Kenya now?", a: "The Public Benefit Organizations Regulatory Authority (PBORA), which replaced the NGO Co-ordination Board. NGOs are now registered as Public Benefit Organisations (PBOs) under the Public Benefits Organizations Act (Cap. 134) and the Public Benefits Organizations Regulations, 2026." },
      { q: "How much does it cost to register an NGO (PBO) in Kenya?", a: "KES 25,000 to register a national PBO, plus KES 1,000 for the name search and reservation. An international PBO pays KES 45,000, an exemption permit for an international organisation is KES 75,000, and bestowment of PBO status is KES 20,000." },
      { q: "How long does PBO registration take in Kenya?", a: "PBORA must decide within 60 days of receiving a complete application. Allow two to three months overall, including name reservation and preparation of documents." },
      { q: "How many directors does a PBO need in Kenya?", a: "At least five directors, three of whom are not related to each other, and at least one-third of whom are Kenyan nationals living in Kenya." },
      { q: "Do existing NGOs need to re-register as PBOs?", a: "No. Existing NGOs are deemed to be PBOs and are transitioned automatically, but they must submit updated information to PBORA, including an aligned constitution, board particulars and a resolution to enter the PBO Register. The transition period has been extended to May 2027." }
    ],
    body: pboRegistrationKenyaBody
  },
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
