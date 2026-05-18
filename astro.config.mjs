import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

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
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
});
