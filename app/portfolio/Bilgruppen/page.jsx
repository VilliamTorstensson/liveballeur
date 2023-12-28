import Image from 'next/image'
import Link from 'next/link'

export default function Jkpgfast () {

  const content = [
    {
      id: 1,
      
      title: 'Bilgruppen', 
      title2: 'Omtanke, initiativ och långsiktighet' ,  
      

      description: 'Bilgruppen gör sin entré som din följeslagare genom hela bilresan, född ur önskan att göra skillnad i en marknad där hållbarhet ännu inte tagit fullt fäste och där pris alltid varit den mest framträdande drivkraften. Precis som ett varumärke byggs av mottagarens/målgruppens associationer och intryck av en produkt, tjänst, idé eller organisation, så är vi här för att skapa en stark anknytning till din bilupplevelse. ',
      
      description2: 'Vi strävar efter att göra varje stund med Bilgruppen till en visuell upplevelse. En ny digital identitet har vuxit fram ur idén att bygga en bro mellan bilens och användarens visuella världar. Genom en djärv riktning har vi skapat nya sätt att utforska och njuta av varje aspekt av bilupplevelsen, oavsett om det är vid det första bilköpet eller försäljningen. ',


      description3: ` Vårt visuella koncept är rotat i korsningen mellan bilens funktion och stil. Med inspiration från den snabba och tekniska världen hos bilverksamheten kombinerar vi detta med djärva och visuellt slående element för att skapa en dynamisk varumärkesupplevels`,

      service1: 'foto',
      service2: 'film',
      service3: 'social media management',
      service4: 'Strategisk Kommunikation',

      bild1: '/bilgruppen4.jpg',
      bild2: '/bilgruppen2.jpg',
      bild3: '/bilgruppen3.jpg',
      bild4: '/bilgruppen1.jpg',

      

    }
  ]
  return (
    <main className="">
      <div className='background5 h-[80vh] relative'>
        <div className='bg-black/20 absolute w-full h-full left-0 top-0'></div>
          <div className='px-4 md:px-10 max-w-[1700px] mx-auto flex flex-col gap-10'>
            <h1 className='text-4xl md:text-6xl text-white uppercase relative z-10 pt-10 animation'>Bilgruppen</h1>
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
                    <Link className='md:text-lg underline font-normal' href="https://bilgruppenjonkoping.se">
                      bilgruppenjonkoping.se
                    </Link>
                  </div>
              </div>
              {/*bildcontent borjar här*/}
              <div className='mt-5 pb-20 max-w-[1700px] mx-auto' key={item.id}>
                <div className='flex md:justify-end'>
                <h1 className='font-normal md:text-2xl md:w-[66%] md:py-10 text-black text-md'>
                  {item.description}
                </h1>
                </div>
                <div className='md:grid md:grid-cols-[1.5fr_1fr] gap-5'>
                  <div>
                    <Image src={item.bild4} width={1700} height={1000} className='mt-4 mb-4' />
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
                    <Image src={item.bild1} width={1700} height={1000} className='mt-4 mb-4  md:h-[50%] md:object-cover' />
                  </div>
                  <div className=''>
                    <Image src={item.bild2} width={1700} height={1000} className='mt-4 mb-4 ' />
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