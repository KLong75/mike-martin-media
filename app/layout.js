// import from vercel
import { Analytics } from "@vercel/analytics/react";
// import from next
import { headers } from "next/headers";
import Script from "next/script";
// import from next/third-parties
import { GoogleTagManager } from "@next/third-parties/google";
// import components
import { PreloadResources } from "./preload-resources";
import Header from "./ui/header";
import Footer from "./ui/footer";
import ScrollToTopButton from "./ui/scrollToTop";
// import styles
import "./globals.css";
// import fonts
import { DM_Sans } from "next/font/google";
// define fonts
const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});
// define metadata for the site
export const metadata = {
  title: {
    template: "%s | Mike Martin Media | Video Production and Creative Services",
    default: "Mike Martin Media | Video Production and Creative Services",
  },
  description:
    "Mike Martin Media specializes in video production and creative services for corporations, nonprofits, education, and medical institutions. Our mission is to help our clients promote their causes, inform their clients, and inspire with their stories. We deliver dynamic multi-media solutions. Our team brings decades of combined experience from the broadcast and production industries to create high quality content for your organization.",
  metadataBase: new URL("https://www.mikemartinmedia.com/"),
  alternates: {
    canonical: "/",
  },
};

// set dynamic
export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  const nonce = headers().get("x-nonce");
  return (
    <html
      lang="en"
      className={`overflow-x-hidden ${dm_sans.variable} font-sans`}>
      {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} nonce={nonce} />  */}
      <PreloadResources />
      <body className={`flex flex-col min-h-screen`}>
        <Header />
        {children}
        <ScrollToTopButton />
        <Footer />
        <Analytics />
        <Script
          id="_next-gtm-init"
          nonce={nonce}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;var n=d.querySelector('[nonce]');
              n&&j.setAttribute('nonce',n.nonce||n.getAttribute('nonce'));f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `,
          }}
        />
        <Script
          id="wc-load-script"
          strategy="afterInteractive"
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `
              var $wc_load=function(a){return JSON.parse(JSON.stringify(a))},$wc_leads=$wc_leads||{doc:{url:$wc_load(document.URL),ref:$wc_load(document.referrer),search:$wc_load(location.search),hash:$wc_load(location.hash)}};
            `,
          }}
        />
        <Script
          id="wc-log-script"
          strategy="afterInteractive"
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `
              console.log('wc_leads', $wc_leads);
            `,
          }}
        />
        <Script
          src="//s.ksrndkehqnwntyxlhgto.com/136008.js"
          strategy="afterInteractive"
          nonce={nonce}
          onLoad={() => console.log('what converts script has been loaded.')}
        />
        {/* <Script
          // src="https://www.googletagmanager.com/gtm.js?id=GTM-5W7VWSTB"
          src="https://www.googletagmanager.com/gtag/js"
          strategy="afterInteractive"
          nonce={nonce}
        /> */}
      </body>
    </html>
  );
}
