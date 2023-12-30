
import Image from 'next/image'
import Link from 'next/link'
import { RxBorderSolid } from 'react-icons/rx'
import { motion } from 'framer-motion'
export default function Hero () {

  const hero = [
    {
      id: 1,
      title: 'Vi omvandlar skrollande fingrar till konverterande kunder',
    
    }
  ]




  return (
    <section className="h-full py-10 md:py-20 flex flex-col items-center justify-center max-w-[1700px] mx-auto relative ">
     
      
    <div className="px-4 md:px-10 flex justify-start items-center py- h-full w-full ">
         
      
 
  
      {hero.map((item) => {
        return (
          <div
           key={item.id} className='flex flex-col lg:gap-10 2xl:gap-20 gap-8 '>
          <h1 key={item.id} className=' w-full font-[500]  py-1  text-[2rem]  animation sm:text-4xl md:text-5xl xl:text-8xl '><RxBorderSolid className='inline-block mr-2' />{item.title}</h1>
          <Image src="/herocomp.jpg" alt="Picture of the author" width={2000} height={1000} className=' rounded-md md:block hidden animation2' />
          <Image src="/heromob.webp" alt="Picture of the author" width={2000} height={1000} className='  md:hidden block animation2' />
          <Link href="mailto:Samuel@balleurproduction.com" className='button w-min animation2 animation2' >Boka ett möte!</Link>
           
          </div>
         
        )
        
      })}
   
       </div>
    </section>
  )
}