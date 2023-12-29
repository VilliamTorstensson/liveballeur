import { RxBorderSolid } from 'react-icons/rx'
import Link from 'next/link'
export default function ProjektHero () {
  return (
    <main className=" max-w-[1700px] mx-auto px-4 md:px-10  relative">
      
      <div className="flex flex-col  pt-10 md:pt-20">
        <div className="flex flex-col gap-5">
        
          <h1 className="animation text-3xl xl:text-5xl lg:w-[78%] md:text-4xl  py-2 font-medium "><RxBorderSolid className='inline-block mr-2' />Utforska Våra senaste projekt av Fotografi, Film och Effektiv Social Media Hantering</h1>
          <Link className='button w-min animation uppercase' href="mailto:Samuel@balleurproduction.com">BOKA ETT MÖTE</Link>
        </div>
      </div>
    </main>
  )
}