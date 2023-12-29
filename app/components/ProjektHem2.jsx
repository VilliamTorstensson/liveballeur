import Link from "next/link"
import Image from "next/image"
import { MdOutlineArrowRightAlt } from "react-icons/md"
export default function ProjektHem2 () {
  const projekt = [
    {
      id: 1,
      title: 'marbodal',
      service: 'foto & film',
      url: '/1002.webp',
      banner: 'marbodal',
      link: '/portfolio/Marbodal',
      

      title2: 'fc gruppen',
      service2: 'foto & film',
      url2: '/1004.webp',
      banner2: 'fc gruppen',
     link2: '/portfolio/Fcgruppen'
    },
    {
      id: 2,
      title: 'atteviks bil',
      service: 'foto & film',
      url: '/1003.webp',
      banner: 'atteviks bil',
      link: '/portfolio/Atteviks',
      
      title2: 'jkpg fast',
      service2: 'foto & film',
      url2: '/1001.webp',
      banner2: 'jkpg fast',
      link2: '/portfolio/Jkpgfast',
  
      
    },
   
  ]
  return (
    <main className="max-w-[1700px] mx-auto px-4 md:px-10 py-10 md:py-20">
          <div className="flex">
        
      </div>
      <div className="pt-5  border-t border-[#323232] pb-10 flex flex-col md:flex-row md:justify-between w-full">
        <h1 className="hidden md:flex font-normal  text-6xl ">Utvalda projekt</h1>
        <div className="flex flex-col md:hidden">
          <h1 className="text-4xl  w-full uppercase font-medium">Utvalda</h1>
          <h1 className="font-medium uppercase flex justify-end sm:justify-center text-4xl w-full ">Projekt</h1>
        </div>
        <div className="flex justify-start mt-5 w-min">
        <Link href="/portfolio" className="w-min button flex items-center">Visa alla
        </Link>
        </div>
      </div>

        
      <div>
      {projekt.map((projekt) => (
        <div key={projekt.id} className="grid md:first:grid-cols-[1.4fr_1fr] md:last:grid-cols-[1fr_1.4fr] grid-cols-1 md:gap-5">
          <Link href={projekt.link} >
          <div key={projekt.id} className="mb-5 ">
            <div className="relative">
              <div className="absolute w-full h-full left-0 top-0 bg-black/20 hover:bg-black/40 z-10 flex items-center justify-center">
                <h1 key={projekt.id} className="text-4xl text-white uppercase z-20">{projekt.banner}</h1>
              </div>
            <Image src={projekt.url} alt={projekt.banner} width={1080} height={1080} />
            </div>
            <div className="flex justify-between mt-2">
            <h1 className="capitalize font-[450]">{projekt.title}</h1>
            <h1 className="capitalize font-[450] text-gray-500 text-sm">{projekt.service}</h1>
            </div>
            </div>
            </Link>
            <Link href={projekt.link2} >
          <div className="mb-5">
            <div className="relative">
              <div className="absolute w-full h-full left-0 top-0 bg-black/20 hover:bg-black/40 z-10 flex items-center justify-center">
                <h1 className="text-4xl text-white uppercase z-20">{projekt.banner2}</h1>
              </div>
            <Image src={projekt.url2} alt={projekt.banner} width={1080} height={1080} />
            </div>
            <div className="flex justify-between mt-2">
            <h1 className="capitalize font-[450]">{projekt.title2}</h1>
            <h1 className="capitalize font-[450] text-gray-500 text-sm">{projekt.service2}</h1>
            </div>
            </div>
            </Link>
        </div>
        
    )  )}
    </div>
    <div className="flex mt-5 justify-between w-full">
        <Link href="/portfolio" className=" hover:underline w-full border-t border-[#323232] font-[450] pt-2">Visa alla <MdOutlineArrowRightAlt className="inline-block text-4xl" />
        </Link>
      </div>
      <div className="mt-5">
          <Link className="px-[2rem] py-[0.4rem] rounded-full border-[#323232] border uppercase text-[12px] hover:bg-black hover:text-white " href="mailto:Samuel@balleurproduction.com">
            boka ett möte
          </Link>
        </div>
    </main>
  )
}