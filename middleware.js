import { NextResponse } from "next/server";

export function middleware(request) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isDevelopment = process.env.NODE_ENV === 'development';
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${isDevelopment ? "'unsafe-eval'" : ''} 
    https://cdn-cookieyes.com 
    https://cdn-cookieyes.com/client_data/*/script.js 
    https://www.googletagmanager.com 
    https://www.gstatic.com 
    https://www.gstatic.com/cv/js/sender/v1/cast_sender.js 
    https://f.vimeocdn.com 
    https://player.vimeo.com
    https://cdn.lightwidget.com/widgets/lightwidget.js
    https://cdn.lightwidget.com/widgets/fe8af16ea57f5ce0b3df76d3341327a5.html
    https://va.vercel-scripts.com/v1/script.debug.js;;
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-src 'self' 
      https://player.vimeo.com 
      https://f.vimeocdn.com 
      https://www.google.com; 
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

  return response;
}
