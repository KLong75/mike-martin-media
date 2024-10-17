import { NextResponse } from "next/server";

export function middleware(request) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isDevelopment = process.env.NODE_ENV === "development";
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${
    isDevelopment ? "'unsafe-eval'" : ""
  } https://cdn-cookieyes.com https://cdn-cookieyes.com/client_data/*/script.js https://www.googletagmanager.com https://www.gstatic.com https://www.gstatic.com/cv/js/sender/v1/cast_sender.js https://f.vimeocdn.com/ https://f.vimeocdn.com/js_opt/modules/utils/vuid.min.js https://f.vimeocdn.com/p/4.37.12/js/player.module.js https://player.vimeo.com/* https://cdn.lightwidget.com/widgets/lightwidget.js https://cdn.lightwidget.com/widgets/fe8af16ea57f5ce0b3df76d3341327a5.html https://va.vercel-scripts.com/v1/script.debug.js https://vercel.live/* https://vercel.live/_next-live/feedback/instrument.99a72fc929d4a2a6df6c.js;
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data: https://cdn.lightwidget.com/* https://i.vimeocdn.com/video/*;
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-src 'self' https://player.vimeo.com https://f.vimeocdn.com https://www.google.com https://cdn.lightwidget.com/; 
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;
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
