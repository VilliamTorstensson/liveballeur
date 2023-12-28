import Image from 'next/image'
import Link from 'next/link'

export default function Jkpgfast () {

  const content = [
    {
      id: 1,
      
      title: 'jkpg fast', 
      title2: 'Omtanke, initiativ och långsiktighet' ,  
      

      description: 'Omtanke, initiativ och långsiktighet präglar Jönköpings Kommuns Fastighetsutveckling AB, en framstående aktör inom ägande, förvaltning, och utveckling av fastigheter. Med fokus på innovation och hållbarhet strävar de efter att vara en engagerad och serviceinriktad hyresvärd för kommunen, dess invånare och näringsliv.',
      
      description2: 'Balleur Production har under de senaste 7 månaderna drivit och utvecklat JKPG Fasts närvaro på sociala medier med målet att möjliggöra en effektivare kommunikation mellan deras hyresgäster och vad som pågår i verksamheten. Vårt fokus har varit att skapa en plattform för en meningsfull dialog mellan JKPG Fast och deras hyresgäster samt andra aktörer inom branschen. ',


      description3: ` Resultatet av vårt samarbete har varit en imponerande ökning av digital varumärkeskännedom på sociala medier med över 100%, vilket har katapulterat dem till en position bland de fem snabbast växande bolagen på LinkedIn bland deras konkurrenter i regionen. 
      
      Vi är stolta över att få ha arbetat med JKPG Fast och ser fram emot att fortsätta skapa imponerande resultat tillsammans. `,
      service1: 'foto',
      service2: 'film',
      service3: 'social media management',
      service4: 'Strategisk Kommunikation',

      bild1: '/jkpg4.jpg',
      bild2: '/jkpg2.jpg',
      bild3: '/jkpg3.jpg',
      bild4: '/jkpg1.jpg',

      

    }
  ]
  return (
    <main className="">
      <div className='background1 h-[80vh] relative'>
        <div className='bg-black/20 absolute w-full h-full left-0 top-0'></div>
          <div className='px-4 md:px-10 max-w-[1700px] mx-auto flex flex-col gap-10'>
            <h1 className='text-4xl md:text-6xl text-white uppercase relative z-10 pt-10 animation'>jkpg fast</h1>
            <h1 className='text-white md:text-6xl text-4xl relative z-10 animation'>-Omtanke,<br className='md:block hidden' /> initiativ och långsiktighet</h1>
          </div>
      </div>
        <section className="flex flex-col max-w-[1700px] mx-auto px-4 md:px-10 ">
            {content.map((item) => (
              <div key={item.id}>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-2' key={item.id}>
                  <div>
                    <h1 key={item.description} className='text-black md:text-lg font-normal uppercase'>{item.title}</h1>
                  </div>
                  <div key={item.id}>
                    <h1 className='text-[#5d5d5d] uppercase text-xs mb-1 md:text-lg'>Services</h1>
                    <h1 className='md:text-lg text-sm md:text-md font-normal text-black'>{item.service1}</h1>
                    <h1 className='md:text-lg text-sm md:text-md font-normal text-black'>{item.service2}</h1>
                    <h1 className='md:text-lg text-sm md:text-md font-normal text-black'>{item.service3}</h1>
                    <h1 className='md:text-lg text-sm md:text-md font-normal text-black'>{item.service4}</h1>
                  </div>
                  <div>
                    <h1 className='text-xs md:text-lg uppercase text-[#5d5d5d] font-normal'>Webb</h1>
                    <Link className='md:text-lg underline font-normal' href="https://jkpgfast.se">
                      jkpgfast.se
                    </Link>
                  </div>
              </div>
           
              {/*bildcontent borjar här*/}
              <div className=' pb-20 max-w-[1700px] mx-auto' key={item.id}>
                <div className='flex md:justify-end'>
                <h1 className='font-normal md:text-2xl md:w-[66%] md:py-10 text-black text-md'>
                  {item.description}
                </h1>
                </div>
                <div className='md:grid md:grid-cols-[1.5fr_1fr] gap-5'>
                  <div>
                    <Image src={item.bild2} width={1700} height={1000} className='mt-4 mb-4' />
                  </div>
                  <div className='flex items-end'>
                    <Image src={item.bild3} width={1700} height={1000} className='mt-4 mb-4 md:h-[50%] md:object-cover' />
                    </div>
                  </div>
                  <div className='flex md:justify-start'>
                <h1 className='font-normal md:text-2xl md:w-[60%] md:py-10 text-black text-md'>
                  {item.description2}
                </h1>
                </div>
                <div className='md:grid md:grid-cols-[1fr_1.5fr] gap-5'>
                  <div className='flex items-end'>
                    <Image src={item.bild4} width={1700} height={1000} className='mt-4 mb-4  md:h-[50%] md:object-cover' />
                  </div>
                  <div className=''>
                    <Image src={item.bild1} width={1700} height={1000} className='mt-4 mb-4 ' />
                    </div>
                  </div>
                 
                
                  <div className='flex md:justify-start'>
                <h1 className='font-normal md:text-2xl md:w-[60%] md:py-10 text-black text-md'>
                  {item.description3}
                </h1>
                </div>
              </div>
              </div>
            ))}
        </section>
    </main>
  )
}