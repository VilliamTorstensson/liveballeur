import Link from 'next/link'
import MobilNav from './MobilNav'
export default function Navbar () {
  return (
    <main className='max-w-[1700px] mx-auto'>
      <div className='flex justify-between px-4 md:px-10 h-[60px] items-center'>
          <Link className=' uppercase navanimation' href="/">
            Balleur production
          </Link>
          <Link href="#contact" className='uppercase fixed hover:bg-[#474747] bottom-[56px] text-[12px] px-8 py-2 rounded-full bg-[#090909] text-white z-40 '>
        Kontakt
      </Link>
          <ul className='navanimation fixed mx-auto inset-x-0 lg:flex hidden w-min whitespace-nowrap bg-[#dddddd] rounded-full w-content justify-center py-3 z-40 px-2 items-center uppercase text-xs'>
            <li className=''>
              <Link className='px-6 py-2 hover:bg-white rounded-full' href="/">
                Hem
              </Link>
            </li>
            <li className=''>
              <Link className='px-6 py-2 hover:bg-white rounded-full' href="/about">
                Om oss
              </Link>
            </li>
            <li className=''>
              <Link className='px-6 py-2 hover:bg-white rounded-full' href="/portfolio">
                Projekt
              </Link>
            </li>
            <li className=''>
              <Link className='px-6 py-2 hover:bg-white rounded-full' href="#contact">
                Kontakt
              </Link>
            </li>
          </ul>
          <div className='navanimation lg:flex hidden justify-end'>
          <Link className='button ' href="mailto:Samuel@balleurproduction.com">
            Boka ett möte
          </Link>
          </div>
          {/*MOBIL MENY*/}
          <div className='lg:hidden flex'>
            <MobilNav />
          </div>
      </div>
    </main>
  )
}