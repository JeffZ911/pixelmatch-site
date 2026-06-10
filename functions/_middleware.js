// Subdomain → subdirectory 301 (Phase 3 cutover, 2026-05-25; fixed 2026-06-10).
//
// pixelmatch.art reverse-proxies /blog/* to this CF Pages project, so the
// canonical home is pixelmatch.art/blog/*. This middleware 301s any direct
// hit on the legacy subdomain blog.pixelmatch.art to the apex, consolidating
// authority onto one domain.
//
// 2026-06-10 fix — redirect to the CANONICAL form in ONE hop. The old
// version forwarded the path as-is, which left Google's two legacy URL
// families unconsolidated:
//   blog.pixelmatch.art/policy/X        → apex /policy/X   (200 but a
//     NON-canonical duplicate — canonical is /blog/policy/X)
//   blog.pixelmatch.art/blog/policy/X   → apex no-slash → 308 → slash
//     (two redirect hops)
// Now every legacy URL lands on https://pixelmatch.art/blog/<rest>/ directly:
//   - prepend /blog when the path lacks it (legacy unprefixed URLs)
//   - append the trailing slash for page paths (Astro trailingSlash:always),
//     skipping real files (anything with a dot in the last segment)
//
// Host-scoped so it can't loop: the apex proxy fetches the *.pages.dev origin
// (host != blog.pixelmatch.art) → falls through to next() and serves content.
export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  if (url.hostname === "blog.pixelmatch.art") {
    let path = url.pathname;
    // Normalize to the /blog prefix (exact segment match — don't touch
    // hypothetical /blogging-tips style paths beyond prefixing them too;
    // unknown paths 404 identically either way).
    if (path !== "/blog" && !path.startsWith("/blog/")) {
      path = "/blog" + (path.startsWith("/") ? path : "/" + path);
    }
    // Trailing slash for page URLs (skip files like sitemap.xml, *.txt, *.png).
    const last = path.split("/").pop();
    if (last && !last.includes(".") && !path.endsWith("/")) {
      path += "/";
    }
    return Response.redirect("https://pixelmatch.art" + path + url.search, 301);
  }
  return next();
}
