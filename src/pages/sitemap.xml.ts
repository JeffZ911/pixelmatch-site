import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

// Sitemap host — pixelmatch.art/blog is the canonical home: the apex Replit
// app reverse-proxies /blog/* to this CF Pages origin (confirmed working
// 2026-06-06; it had only looked broken while the Replit app was offline).
// sc-domain:pixelmatch.art covers it. Submit pixelmatch.art/blog/sitemap.xml.
const SITE = "https://pixelmatch.art";
const BASE = "/blog";

const STATIC_PATHS = [
  "/",
  "/learn/",
  "/compare/",
  "/stories/",
  "/policy/",
  "/about/",
  "/privacy/",
  "/terms/",
  "/contact/",
];

export const GET: APIRoute = async () => {
  const [learn, compare, stories, policy] = await Promise.all([
    getCollection("learn"),
    getCollection("compare"),
    getCollection("stories"),
    getCollection("policy"),
  ]);

  const dynamic: { url: string; lastmod?: string }[] = [];

  const pushEntry = (
    fallbackPrefix: string,
    e: { slug: string; data: { published_url?: string; published_at?: string } },
  ) => {
    const url = e.data.published_url || `/${fallbackPrefix}/${e.slug}/`;
    dynamic.push({ url, lastmod: e.data.published_at });
  };

  for (const e of learn)   pushEntry("learn",   e);
  for (const e of compare) pushEntry("compare", e);
  for (const e of stories) pushEntry("stories", e);
  for (const e of policy)  pushEntry("policy",  e);

  const today = new Date().toISOString().slice(0, 10);
  const all: { url: string; lastmod: string }[] = [
    ...STATIC_PATHS.map((p) => ({ url: p, lastmod: today })),
    ...dynamic.map((d) => ({ url: d.url, lastmod: (d.lastmod || today).slice(0, 10) })),
  ];

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    all
      .map(
        (e) =>
          `  <url><loc>${SITE}${BASE}${e.url}</loc><lastmod>${e.lastmod}</lastmod></url>`,
      )
      .join("\n") +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
