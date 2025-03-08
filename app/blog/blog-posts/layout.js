// // import from vercel
// import { Analytics } from "@vercel/analytics/react";
// // import from next
// import { headers } from "next/headers";
// import Script from "next/script";
// // import from next/third-parties
// // import { GoogleTagManager } from "@next/third-parties/google";
// // import components
// import { PreloadResources } from "./preload-resources";
// import Header from "./ui/header";
// import Footer from "./ui/footer";
// import ScrollToTopButton from "./ui/scrollToTop";
// // import styles
// import "./globals.css";
// // import fonts
// import { DM_Sans } from "next/font/google";
// import ActiveCampaignNewsletterSignup from "./ui/activeCampaignNewsletterSignup";
// // define fonts
// const dm_sans = DM_Sans({
//   subsets: ["latin"],
//   variable: "--font-dm-sans",
// });
// define metadata for the site
export const metadata = {
  title: {
    template: "Blog | Mike Martin Media | %s",
    default: "Blog | Mike Martin Media",
  },
  description:
    "",
  metadataBase: new URL("https://www.mikemartinmedia.com/blog/blog-posts/"),
  alternates: {
    canonical: "/",
  },
};

export default async function RootLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}