
import Image from 'next/image'
import Link from 'next/link'
import { RxBorderSolid } from "react-icons/rx";
export default function Hero () {

  const hero = [
    {
      id: 1,
      title: 'Vi skapar konverterande kunder av skrollande fingrar',
    
    }
  ]




  return (
    <section className="h-full py-10 md:py-20 flex flex-col items-center justify-center max-w-[1700px] mx-auto relative ">
     
      
    <div className="px-4 md:px-10 flex justify-start items-center py- h-full w-full ">
         
      
 
  
      {hero.map((item) => {
        return (
          <div key={item.id} className='flex flex-col lg:gap-10 2xl:gap-20 gap-8 '>
          <h1 key={item.id} className='animation w-full font-[450]  py-1 xl:leading-[70px] text-[2rem] leading-[35px] sm:leading-[40px] md:leading-[60px] sm:text-4xl md:text-5xl xl:text-7xl '><RxBorderSolid className='inline-block mr-2' />{item.title}</h1>
          <Image src="/maincomp.webp" alt="Picture of the author" width={2000} height={1000} className='animation2 rounded-md md:block hidden' />
          <Image src="/mainmob.webp" alt="Picture of the author" width={2000} height={1000} className='animation2  md:hidden block' />
          <Link href="mailto:Samuel@balleurproduction.com" className='button w-min animation2' >Boka ett möte!</Link>
           
          </div>
        )
        
      })}
   
       </div>
    </section>
  )
}