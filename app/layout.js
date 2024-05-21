// import analytics
import { Analytics } from '@vercel/analytics/react';
// import PreloadResources from './preload-resources'
import { PreloadResources } from './preload-resources'
// import components
import Header from './ui/header'
import Footer from './ui/footer'
import ScrollToTopButton from './ui/scrollToTop'
// import styles
import './globals.css'
// import fonts
import { DM_Sans } from 'next/font/google';

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-dm-sans',
});


export const metadata = {
  title: {
    template: '%s | Mike Martin Media | Video Production and Creative Services',
    default: 'Mike Martin Media | Video Production and Creative Services',
  },
  description: 'Mike Martin Media specializes in video production and creative services for corporations, nonprofits, education, and medical institutions. Our mission is to help our clients promote their causes, inform their clients, and inspire with their stories. We deliver dynamic multi-media solutions. Our team brings decades of combined experience from the broadcast and production industries to create high quality content for your organization.',
  metadataBase: new URL("https://mikemartinmedia.com/"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "An5ZltC5TJiquLvxw_Va-z7nL4lI8A_xBgeJVOQgToQ"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`overflow-x-hidden ${dm_sans.variable} font-sans`}>
      <PreloadResources />
      <body className={`flex flex-col min-h-screen`}>
        <Header />
          {children}
          <ScrollToTopButton />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
