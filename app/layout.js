// import components
import Header from './ui/header'
import Footer from './ui/footer'
import ScrollToTopButton from './ui/scrollToTop'
// import fonts
import { Inter } from 'next/font/google'
// import styles
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Next.JS Website Template',
    default: 'Next.JS Website Template',
  },
  description: 'Template for building websites with Next.JS by Rhythm Code Studio',
  metadataBase: new URL("https://yourwebsiteurlgoeshere.com/")
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='overflow-x-hidden'>
      <body className={`${inter.className} flex flex-col min-h-screen `}>
        <Header />
          {children}
          <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  )
}
