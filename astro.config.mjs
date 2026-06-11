import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// Dependency-free rehype plugin: harden outbound citation links. Any
// absolute http(s) link whose host isn't pixelmatch.art gets target=_blank
// + rel="noopener noreferrer". Internal/relative links untouched.
const SITE_HOST = "pixelmatch.art";
function rehypeExternalLinks() {
  const walk = (node) => {
    if (
      node.tagName === "a" &&
      node.properties &&
      typeof node.properties.href === "string"
    ) {
      const href = node.properties.href;
      if (/^https?:\/\//i.test(href) && !href.includes(SITE_HOST)) {
        node.properties.target = "_blank";
        node.properties.rel = "noopener noreferrer";
      }
    }
    if (Array.isArray(node.children)) node.children.forEach(walk);
  };
  return (tree) => walk(tree);
}

// Dependency-free remark plugin: strip the first H1 from every markdown body.
// ArticleLayout already renders an <h1> from frontmatter `title`, so a leading
// `# Title` in the body produced a duplicate H1 — bad for SEO (multiple H1s
// dilute the page topic) and UX (the title appears twice). Removes only the
// FIRST h1; any later h1 (unlikely) is preserved.
function remarkStripFirstH1() {
  return (tree) => {
    if (!tree || !Array.isArray(tree.children)) return;
    const idx = tree.children.findIndex(
      (n) => n && n.type === "heading" && n.depth === 1
    );
    if (idx >= 0) tree.children.splice(idx, 1);
  };
}

// PixelMatch blog. Architecture (CONFIRMED working 2026-06-06):
//   - pixelmatch.art (apex) = the SaaS product, a Replit (Express) app that
//     ALSO reverse-proxies /blog/* → this Cloudflare Pages origin.
//   - blog.pixelmatch.art (CF Pages custom domain) 301s → pixelmatch.art/blog/*
//     to consolidate everything onto ONE canonical home.
//   - canonical = https://pixelmatch.art/blog/...  (built from Astro.site).
// This whole chain looked "broken" only because the Replit app was offline
// (apex 404, the /blog reverse-proxy dead). Bringing Replit back online
// restored it — canonical points at the apex/blog home, NOT the subdomain.

// Dependency-free rehype plugin: native lazy-loading for article-body images.
// (Hero images are template-level with fetchpriority=high; body images are
// below the fold by definition → lazy + async decode improves LCP/CWV.)
function rehypeLazyImages() {
  function walk(node) {
    if (node.type === "element" && node.tagName === "img") {
      node.properties = node.properties || {};
      if (!node.properties.loading) node.properties.loading = "lazy";
      if (!node.properties.decoding) node.properties.decoding = "async";
    }
    (node.children || []).forEach(walk);
  }
  return (tree) => walk(tree);
}

export default defineConfig({
  site: "https://pixelmatch.art",
  base: "/blog",
  trailingSlash: "always",
  integrations: [tailwind({ applyBaseStyles: false }), mdx()],
  output: "static",
  markdown: {
    remarkPlugins: [remarkStripFirstH1],
    rehypePlugins: [rehypeExternalLinks, rehypeLazyImages],
  },
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
});
