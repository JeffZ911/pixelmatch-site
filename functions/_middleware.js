// Subdomain → subdirectory 301 (Phase 3 cutover, 2026-05-25).
//
// pixelmatch.art reverse-proxies /blog/* to this CF Pages project, so the
// canonical home is pixelmatch.art/blog/*. This middleware 301s any direct
// hit on the legacy subdomain blog.pixelmatch.art to the apex, consolidating
// authority onto one domain.
//
// Host-scoped so it can't loop: the apex proxy fetches the *.pages.dev origin
// (host != blog.pixelmatch.art) → falls through to next() and serves content.
// Runs BEFORE _redirects/static, and next() continues the normal pipeline.
export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  if (url.hostname === "blog.pixelmatch.art") {
    return Response.redirect(
      "https://pixelmatch.art" + url.pathname + url.search,
      301,
    );
  }
  return next();
}
