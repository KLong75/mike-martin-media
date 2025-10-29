// import from react
import React from "react";
// import from vercel
import { Analytics } from "@vercel/analytics/react";
// import from next
import { headers } from "next/headers";
import Script from "next/script";
// import from next/third-parties
import { GoogleTagManager } from "@next/third-parties/google";
// import context
import { PreviousRouteProvider } from "../context/previous-route-context";
// import components
import Header from "./ui/header";
import Footer from "./ui/footer";
import ScrollToTopButton from "./ui/scrollToTop";
import ActiveCampaignNewsletterSignup from "./ui/activeCampaignNewsletterSignup";
// import styles
import "./globals.css";
// import fonts
import { dm_sans } from "./fonts";
// define metadata for the site
export const metadata = {
  title: {
    template: "%s",
    default: "Mike Martin Media: St. Louis Video Production Company",
  },
  description:
    "Mike Martin Media specializes in video production and creative services for corporations, nonprofits, education, and medical institutions. Our mission is to help our clients promote their causes, inform their clients, and inspire with their stories. We deliver dynamic multi-media solutions. Our team brings decades of combined experience from the broadcast and production industries to create high quality content for your organization.",
  metadataBase: new URL("https://www.mikemartinmedia.com/"),
  alternates: {
    canonical: "/",
  },
};

// set dynamic
// export const dynamic = "force-dynamic";

export default async function RootLayout({ children }) {
  const headersList = await headers();
  const nonce = headersList.get("x-nonce");

  return (
    <html
      lang="en"
      className={`overflow-x-hidden ${dm_sans.variable} font-sans`}
      data-scroll-behavior="smooth">
      <head>
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin=""
        />
        {/* <link
          rel="preconnect"
          href="https://googleads.g.doubleclick.net"
          crossOrigin=""
        /> */}
        {/* <link rel="preconnect" href="https://www.google.com" crossOrigin="" /> */}
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://stream.mux.com" crossOrigin="" />
        <link rel="preconnect" href="https://image.mux.com" crossOrigin="" />
      </head>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} nonce={nonce} />
      <body className={`antialiased  min-h-screen`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            title="Google Tag Manager"
            className="hidden"></iframe>
        </noscript>
        <PreviousRouteProvider>
          <Header />
          {children}
          <ScrollToTopButton />
          <ActiveCampaignNewsletterSignup />
          <Footer />
          <Analytics />
          <Script
            id="wc-load-script"
            // strategy="beforeInteractive"
            strategy="afterInteractive"
            // strategy="lazyOnload"
            nonce={nonce}
            dangerouslySetInnerHTML={{
              __html: `
              var $wc_load=function(a){return JSON.parse(JSON.stringify(a))},$wc_leads=$wc_leads||{doc:{url:$wc_load(document.URL),ref:$wc_load(document.referrer),search:$wc_load(location.search),hash:$wc_load(location.hash)}};
            `,
            }}
          />
          <Script
            src="//s.ksrndkehqnwntyxlhgto.com/136008.js"
            // strategy="beforeInteractive"
            strategy="afterInteractive"
            // strategy="lazyOnload"
            nonce={nonce}
          />
        </PreviousRouteProvider>
      </body>
    </html>
  );
}
