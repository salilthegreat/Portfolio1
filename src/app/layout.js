import Navbar from '@/components/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Developer Portfolio',
  description: 'Web Developer Portfolio Made With NextJs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
