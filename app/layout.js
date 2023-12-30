import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LocalFont from 'next/font/local'


const Neue = LocalFont({
  name: 'Neue',
  src: '/font/NeueRoman.ttf',
})

export const metadata = {
  title: 'Balleur production',
  description: 'Vi skapar innehåll för sociala medier, hemsidor och andra digitala plattformar. Vi hjälper dig att skapa en stark digital närvaro.',
}


export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang="en">
      <body className={Neue.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}