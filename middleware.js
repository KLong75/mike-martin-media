import { NextResponse } from "next/server";

export function middleware(request) {
  let cspHeader;
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const environment = process.env.NEXT_PUBLIC_ENV || process.env.NODE_ENV;
  const isDevelopment = environment === "development";
  const isPreview = environment === "preview";
  const isProduction = environment === "production";

  const developmentCspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval' https://mmmmarketing42.activehosted.com/ https://cdn-cookieyes.com/;
    style-src 'self' 'unsafe-inline' https://fonts.bunny.net/css;
    img-src 'self' blob: data: https://d226aj4ao1t61q.cloudfront.net/esfkyjh1u_forms-close-dark.png https://www.google.com/pagead/;
    media-src 'self' blob: data: https://player.vimeo.com https://f.vimeocdn.com https://vimeo.com;
    connect-src 'self' https://stats.g.doubleclick.net https://mmmmarketing42.activehosted.com/proc.php  https://process.iconnode.com/google-ads/ https://*.ksrndkehqnwntyxlhgto.com https://www.google-analytics.com https://analytics.google.com https://www.google.com https://google.com;
    font-src 'self' data: https://fonts.bunny.net/;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self' https://player.vimeo.com https://f.vimeocdn.com https://www.google.com https://vercel.live/ https://vercel.com https://stats.g.doubleclick.net https://td.doubleclick.net/ https://www.googletagmanager.com/;
    upgrade-insecure-requests;
  `;

  const previewCspHeader = `
    default-src 'none';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://f.vimeocdn.com/* https://f.vimeocdn.com/js_opt/modules/utils/vuid.min.js https://f.vimeocdn.com/p/4.37.12/js/player.module.js https://player.vimeo.com/* https://*.googletagmanager.com https://mmmmarketing42.activehosted.com/ https://prism.app-us1.com/ https://cdn-cookieyes.com/;
    
    style-src 'self' 'unsafe-inline' https://fonts.bunny.net/css;
    img-src 'self' blob: data: https://i.vimeocdn.com/video/* https://www.googletagmanager.com/ https://d226aj4ao1t61q.cloudfront.net/esfkyjh1u_forms-close-dark.png https://www.google.com/pagead/;
    media-src 'self' blob: data: https://player.vimeo.com https://f.vimeocdn.com https://vimeo.com https://i.vimeocdn.com/video/* https://player.vimeo.com/video/*;
    connect-src 'self' https://stats.g.doubleclick.net https://analytics.google.com *.cookieyes.com cdn-cookieyes.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com www.googletagmanager.com https://mmmmarketing42.activehosted.com/proc.php https://process.iconnode.com/google-ads/ https://*.ksrndkehqnwntyxlhgto.com https://www.google-analytics.com https://stats.g.doubleclick.net https://www.google.com https://google.com;
    font-src 'self' data: https://fonts.bunny.net/;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self' https://stats.g.doubleclick.net https://player.vimeo.com https://f.vimeocdn.com https://www.google.com https://td.doubleclick.net/ https://www.googletagmanager.com/;
    upgrade-insecure-requests;
  `;

  const productionCspHeader = `
    default-src 'none';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://f.vimeocdn.com/* https://f.vimeocdn.com/js_opt/modules/utils/vuid.min.js https://f.vimeocdn.com/p/4.37.12/js/player.module.js https://player.vimeo.com/* cdn-cookieyes.com https://mmmmarketing42.activehosted.com https://*.googletagmanager.com https://mmmmarketing42.activehosted.com/ https://prism.app-us1.com/ https://cdn-cookieyes.com/;
    
    style-src 'self' 'unsafe-inline' https://fonts.bunny.net/css https://www.googletagmanager.com https://fonts.googleapis.com;
    img-src 'self' blob: data: https://i.vimeocdn.com/video/* https://cdn-cookieyes.com/assets/images/close.svg https://cdn-cookieyes.com/assets/images/poweredbtcky.svg cdn-cookieyes.com https://d226aj4ao1t61q.cloudfront.net/esfkyjh1u_forms-close-dark.png https://www.googletagmanager.com/td https://www.googletagmanager.com/a https://www.google.com/pagead/ https://*.google-analytics.com https://*.googletagmanager.com fonts.gstatic.com;
    media-src 'self' blob: data: https://player.vimeo.com https://f.vimeocdn.com https://vimeo.com https://i.vimeocdn.com/video/* https://player.vimeo.com/video/* https://scontent-hel3-1.cdninstagram.com/o1/;
    connect-src 'self' 'nonce-${nonce}' https://analytics.google.com *.cookieyes.com cdn-cookieyes.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com www.googletagmanager.com https://mmmmarketing42.activehosted.com/proc.php https://process.iconnode.com/google-ads/ https://*.ksrndkehqnwntyxlhgto.com https://www.google-analytics.com https://stats.g.doubleclick.net https://www.google.com https://google.com;
    font-src 'self' data: https://fonts.bunny.net/; 
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self' https://player.vimeo.com https://f.vimeocdn.com https://www.google.com https://stats.g.doubleclick.net https://td.doubleclick.net/ https://www.googletagmanager.com/;
    upgrade-insecure-requests; 
  `;
  if (isDevelopment) {
    cspHeader = developmentCspHeader;
  } else if (isPreview) {
    cspHeader = previewCspHeader;
  } else if (isProduction) {
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
  matcher: "/:path*",
};



// from preview:
// script-src-elem 'self' 'nonce-${nonce}' 'unsafe-inline' https://www.googletagmanager.com/gtm.js https://googletagmanager.com/* https://mmmmarketing42.activehosted.com/ https://prism.app-us1.com/ https://cdn-cookieyes.com/ ;

// from prod
// script-src-elem 'self' 'nonce-${nonce}' https://www.googletagmanager.com/gtm.js/* https://googletagmanager.com/*  https://mmmmarketing42.activehosted.com/ https://prism.app-us1.com/ https://cdn-cookieyes.com/;

