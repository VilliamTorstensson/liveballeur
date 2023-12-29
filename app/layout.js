import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { GeistSans } from 'geist/font/sans';




export const metadata = {
  title: 'Balleur production',
  description: 'Digital marknadsföringsbyrå',
}

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang="en">
      <body className={GeistSans.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}