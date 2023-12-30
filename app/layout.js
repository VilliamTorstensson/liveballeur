import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { GeistSans } from 'geist/font/sans';





export const metadata = {
  title: 'Balleur production',
  description: 'Vi skapar innehåll för sociala medier, hemsidor och andra digitala plattformar. Vi hjälper dig att skapa en stark digital närvaro.',
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