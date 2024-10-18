import { NextResponse } from "next/server";

export function middleware(request) {
  let cspHeader;
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  console.log("nonce", nonce);
  // const isDevelopment = process.env.NODE_ENV === "development";

  const environment = process.env.NEXT_PUBLIC_ENV || process.env.NODE_ENV;
  const isDevelopment = environment === "development";
  const isPreview = environment === "preview";
  const isProduction = environment === "production";
  
  const developmentCspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    media-src 'self' blob: data: https://player.vimeo.com https://f.vimeocdn.com https://vimeo.com;
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self' https://player.vimeo.com https://f.vimeocdn.com https://www.google.com https://cdn.lightwidget.com/ https://vercel.live/ https://vercel.com;
    upgrade-insecure-requests;
  `;

  const previewCspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' https://player.vimeo.com/* https://f.vimeocdn.com/* https://f.vimeocdn.com/js_opt/modules/utils/vuid.min.js https://f.vimeocdn.com/p/4.37.12/js/player.module.js https://player.vimeo.com/* https://cdn.lightwidget.com/widgets/lightwidget.js ;
    script-src-elem 'self' 'nonce-${nonce}' https://cdn.lightwidget.com/widgets/lightwidget.js;
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data: https://cdn.lightwidget.com/* https://i.vimeocdn.com/video/*;
    media-src 'self' blob: data: https://player.vimeo.com https://f.vimeocdn.com https://vimeo.com https://i.vimeocdn.com/video/* https://player.vimeo.com/video/*;
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self' https://player.vimeo.com https://f.vimeocdn.com https://www.google.com https://cdn.lightwidget.com/ ;
    upgrade-insecure-requests;
  `;

  const productionCspHeader = `
    default-src 'self';
    img-src 'self' blob: data: https://cdn.lightwidget.com/* https://i.vimeocdn.com/video/* https://www.googletagmanager.com;
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' cdn-cookieyes.com ;
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data: https://cdn.lightwidget.com/* https://i.vimeocdn.com/video/* https://*.google-analytics.com https://*.googletagmanager.com;
    media-src 'self' blob: data: https://player.vimeo.com https://f.vimeocdn.com https://vimeo.com https://i.vimeocdn.com/video/* https://player.vimeo.com/video/*;
    connect-src 'self' *.cookieyes.com cdn-cookieyes.com www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com;
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self' https://player.vimeo.com https://f.vimeocdn.com https://www.google.com https://cdn.lightwidget.com/;
    upgrade-insecure-requests;
  `;

  if (isDevelopment) {
    console.log("development");
    cspHeader = developmentCspHeader;
  } else if (isPreview) {
    console.log("preview");
    cspHeader = previewCspHeader;
  } else if (isProduction) {
    console.log("production");
    cspHeader = productionCspHeader;
  }
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Content-Type-Options", "nosniff");

  return response;
}

export const config = {
  // matcher: [
  //   /*
  //    * Match all request paths except for the ones starting with:
  //    * - api (API routes)
  //    * - _next/static (static files)
  //    * - _next/image (image optimization files)
  //    * - favicon.ico (favicon file)
  //    */
  //   {
  //     source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
  //     missing: [
  //       { type: "header", key: "next-router-prefetch" },
  //       { type: "header", key: "purpose", value: "prefetch" },
  //     ],
  //   },
  // ],
  matcher: "/:path*",
};


// connect-src 'self' https://vercel.live/ https://vercel.com https://vitals.vercel-insights.com https://sockjs-mt1.pusher.com/ wss://ws-mt1.pusher.com/;


// const cspHeader = `
//     default-src 'self';
//     script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${
//     isDevelopment ? "'unsafe-eval'" : ""
//   } https://cdn-cookieyes.com https://cdn-cookieyes.com/client_data/*/script.js https://www.googletagmanager.com https://www.gstatic.com https://www.gstatic.com/cv/js/sender/v1/cast_sender.js https://f.vimeocdn.com/ https://f.vimeocdn.com/js_opt/modules/utils/vuid.min.js https://f.vimeocdn.com/p/4.37.12/js/player.module.js https://player.vimeo.com/* https://cdn.lightwidget.com/widgets/lightwidget.js https://cdn.lightwidget.com/widgets/fe8af16ea57f5ce0b3df76d3341327a5.html https://va.vercel-scripts.com/v1/script.debug.js https://vercel.live/* https://vercel.live/_next-live/feedback/instrument.99a72fc929d4a2a6df6c.js;
//     style-src 'self' 'nonce-${nonce}';
//     img-src 'self' blob: data: https://cdn.lightwidget.com/* https://i.vimeocdn.com/video/*;
//     font-src 'self' data:;
//     object-src 'none';
//     base-uri 'self';
//     form-action 'self';
//     frame-src 'self' https://player.vimeo.com https://f.vimeocdn.com https://www.google.com https://cdn.lightwidget.com/; 
//     frame-ancestors 'none';
//     upgrade-insecure-requests;
// `;