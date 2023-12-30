import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { GeistSans } from 'geist/font/sans';
import { Wix_Madefor_Display} from 'next/font/google'




export const metadata = {
  title: 'Balleur production',
  description: 'Vi skapar innehåll för sociala medier, hemsidor och andra digitala plattformar. Vi hjälper dig att skapa en stark digital närvaro.',
}
const font = Wix_Madefor_Display({
  weights: [400, 500, 600, 700, 800],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',

})

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}