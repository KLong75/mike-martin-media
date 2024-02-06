// import components
import Header from './ui/header'
import Footer from './ui/footer'
import ScrollToTopButton from './ui/scrollToTop'
// import styles
import './globals.css'
// import fonts
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-dm-sans',
});



export const metadata = {
  title: {
    template: '%s | Mike Martin Media',
    default: 'Mike Martin Media',
  },
  description: 'Website For Mike Martin Media',
  metadataBase: new URL("https://mike-martin-media.vercel.app/")
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`overflow-x-hidden ${dm_sans.variable} font-sans`}>
      <body className={`flex flex-col min-h-screen`}>
        <Header />
          {children}
          <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
