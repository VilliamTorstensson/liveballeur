import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Marbodal () {

  const content = [
    {
      id: 1,
      title: 'Marbodal - Starcenter', 
      title2: '-din köksleverantör i jönköping' ,  
     

      description: 'Starcenters omsorgsfullt utvalda råvaror och anpassade kökslösningar förändras inte bara ditt kök, utan hela din livsstil. Varje måltid blir en kulinarisk upplevelse, och köket blir en plats för personligt uttryck och positiv förändring. Starcenters design skapar en atmosfär där du trivs, vilket förbättrar din dagliga upplevelse och gör varje stund i köket minnesvärd och meningsfull.',
      
      description2: 'Nyligen fick vi förtroendet från Starcenter, en Marbodal-återförsäljare i Jönköping, att genomföra en fotografering av personalen och reklamfotografering. Vårt mål var att fånga atmosfären och varumärkeskänslan som definierar Starcenter och Marbodal. Resultatet blev en bildkollektion som sömlöst kombinerar en avslappnad stil med professionell elegans och tydligt speglar personalens genuina engagemang för att hjälpa sina kunder samt Marbodals exceptionella elegans. ',


      description3: `Att arbeta med Star Center var en ära, och vi ser fram emot fortsatta framgångsrika samarbeten. `,
      service1: 'foto',
      service2: 'film',
      service3: 'social media management',
      service4: 'Strategisk Kommunikation',

      bild1: '/marbodal1.jpg',
      bild2: '/marbodal2.jpg',
      bild3: '/marbodal3.jpg',
      bild4: '/marbodal4.jpg',

     

    }
  ]
  return (
    <main className="">
      <div className='background2 h-[80vh] relative'>
        <div className='bg-black/20 absolute w-full h-full left-0 top-0'></div>
          <div className='px-4 md:px-10 max-w-[1700px] mx-auto flex flex-col gap-10'>
            <h1 className='text-4xl md:text-6xl text-white uppercase relative z-10 pt-10 animation '>Starcenter - Marbodal</h1>
            <h1 className='text-white md:text-6xl text-4xl relative z-10 animation2'>- Din köksleverantör,<br className='md:block hidden' /> i jönköping</h1>
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
                    <Link className='md:text-lg underline font-normal' href="https://www.marbodal.se/hitta-butik/jonkoping/starcenter/?gad_source=1&gclid=CjwKCAiA-bmsBhAGEiwAoaQNmrrgnnJBVrGdE6Q-BjgkHzS5a100wFEXQm16q5wXVEuCtHkRoCsRIRoCouQQAvD_BwE&gclsrc=aw.ds">
                    marbodal.se
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
                    <Image src={item.bild2} width={1700} height={1000} className='mt-4 mb-4' />
                  </div>
                  <div className='flex items-end'>
                    <Image src={item.bild1} width={1700} height={1000} className='mt-4 mb-4 md:h-[50%] md:object-cover' />
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
              <Link className='hover:underline' href="/portfolio#work"><IoIosArrowRoundBack className='inline-block text-4xl' />

                Tillbaka</Link>
              </div>
              
            ))}
        </section>
    </main>
  )
}