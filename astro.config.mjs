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

// PixelMatch blog (Phase 1B 2026-05-14).
//
// `site` is the *canonical* domain — set to pixelmatch.art so every
// emitted URL (canonical tag, OG, sitemap) reads as the SaaS root.
// `base` is the URL prefix the content lives under. Phase 1-2 deploys
// to `blog.pixelmatch.art` on Cloudflare Pages directly; Phase 3 puts
// a CF Worker on pixelmatch.art that rewrites /blog/* to this Pages
// origin. Because Astro already emits absolute pixelmatch.art/blog/...
// URLs from day 1, the cutover is invisible to Google.
export default defineConfig({
  site: "https://pixelmatch.art",
  base: "/blog",
  trailingSlash: "always",
  integrations: [tailwind({ applyBaseStyles: false }), mdx()],
  output: "static",
  markdown: {
    rehypePlugins: [rehypeExternalLinks],
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
