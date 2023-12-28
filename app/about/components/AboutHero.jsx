
import Link from 'next/link'
export default function AboutHero () {
  return (
    <main className=" max-w-[1700px] mx-auto px-4 md:px-10  relative">
      
      <div className="flex flex-col  pt-10 md:pt-20">
        <div className="flex flex-col gap-5">
        
          <h1 className="animation text-3xl xl:text-7xl lg:w-[85%] md:text-5xl uppercase py-2 ">Vi stärker ditt varumärke online via foto och film</h1>
          <Link className='button w-min animation' href="#contact">BOKA ETT MÖTE</Link>
        </div>
      </div>
    </main>
  )
}