import Image from 'next/image'
import Link from 'next/link'

export default function Atteviks () {

  const content = [
    {
      id: 1,
    
      title: 'Atteviks', 
       
     

      description: 'Atteviks är inte bara en aktör på bilmarknaden; de är en förnyare och pålitlig partner för bilentusiaster. I hjärtat av bilbranschen definierar Atteviks begreppet "bilpartner" på ett unikt sätt. Inte bara en plats där bilar byter ägare, utan snarare en destination där varje bilaffär markerar starten på en långvarig relation.',
      
      description2: 'Vårt samarbete med Atteviks gick bortom att bara hantera sociala medier. Genom att noggrant forma en strategi lyckades vi inte bara öka Atteviks varumärkesexponering, utan också skapa konkreta affärsmöjligheter.',


      description3: `Resultaten talar för sig själva. För flera av Atteviks konton noterade vi en imponerande varumärkeskännedom-ökning på över 70% inom de första månaderna. Detta var inte bara en siffra; det var ett kvitto på det starka bandet Atteviks skapade med sin digitala publik.

      Vår närvaro på sociala medier för Atteviks möjliggjorde inte bara ökad synlighet utan översatte också digital framgång till affärsmöjligheter. Under vår tid med Atteviks öppnade vi nya dörrar och skapade affärsmöjligheter för bilägare`,

      service1: 'foto',
      service2: 'film',
      service3: 'social media management',
      service4: 'Strategisk Kommunikation',

      bild1: '/atteviks1.jpg',
      bild2: '/atteviks2.jpg',
      bild3: '/atteviks3.jpg',
      bild4: '/atteviks4.jpg',

    

    }
  ]
  return (
    <main className="">
      <div className='background3 h-[80vh] relative'>
        <div className='bg-black/20 absolute w-full h-full left-0 top-0'></div>
          <div className='px-4 md:px-10 max-w-[1700px] mx-auto flex flex-col gap-10'>
            <h1 className='text-4xl md:text-6xl text-white uppercase relative z-10 pt-10 animation'>Atteviks</h1>
            <h1 className='text-white md:text-6xl text-4xl relative z-10 animation'>- Ett kvalitetsbegrepp</h1>
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
                    <Link className='md:text-lg underline font-normal' href="https://www.atteviks.se/">
                      atteviks.se
                    </Link>
                  </div>
              </div>
              {/**VIDEO ATTEVIKS */}
             
              {/*bildcontent borjar här*/}
              <div className='mt-10 pb-5 max-w-[1700px] mx-auto' key={item.id}>
                <div className='flex md:justify-end'>
                <h1 className='font-normal md:text-2xl md:w-[66%] md:py-10 text-black text-md'>
                  {item.description}
                </h1>
                </div>
                <div className='md:grid md:grid-cols-[1.5fr_1fr] gap-5'>
                  <div>
                    <Image src={item.bild1} width={1700} height={1000} className='mt-4 mb-4' />
                  </div>
                  <div className='flex items-end'>
                    <Image src={item.bild2} width={1700} height={1000} className='mt-4 mb-4 md:h-[50%] md:object-cover' />
                    </div>
                  </div>
                  <div className='flex md:justify-start'>
                <h1 className='font-normal md:text-2xl md:w-[60%] md:py-10 text-black text-md'>
                  {item.description2}
                </h1>
                </div>
                <div className='md:grid md:grid-cols-[1fr_1.5fr] gap-5'>
                  <div className='flex items-end'>
                    <Image src={item.bild3} width={1700} height={1000} className='mt-4 mb-4  md:h-[50%] md:object-cover' />
                  </div>
                  <div className=''>
                    <Image src={item.bild4} width={1700} height={1000} className='mt-4 mb-4 ' />
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