import Image from 'next/image'
import Link from 'next/link'

export default function Fcgruppen () {

  const content = [
    {
      id: 1,
      namn: 'Jönköpings Kommuns Fastighetsutveckling',
      title: 'Fc gruppen', 
      title2: 'Ditt val av catering sedan 1997' ,  
     

      description: 'FC Gruppen, etablerat i Jönköping, har varit en cateringpionjär sedan 1993. I en marknad där kulinarisk excellens möter innovation har vi vuxit för att bli ett av Sveriges ledande cateringföretag, med omkring 4000 uppdrag årligen. Våra sju platser i Jönköping, inklusive FC Event, FC Production och FC Bryggeri, positionerar oss som din omfattande partner inom catering och evenemang. På FC Gruppen räknas varje smakfullt ögonblick, och vår hängivenhet till excellens förblir orubblig.',
      
      description2: 'Under samarbetet har vi skapat professionella reklamfotograferingar och producerat engagerande filmer och bilder för deras sociala medieplattformar. Vårt mål har varit att inte bara leverera visuellt tilltalande innehåll utan också att berätta en historia som återspeglar deras varumärke och verksamhet.',


      description3: `Reklamfotograferingarna har inte bara fångat ögonblick och produkter på ett estetiskt sätt utan också förmedlat kärnvärden och budskap som stödjer deras varumärkesidentitet.`,

      service1: 'foto',
      service2: 'film',
      service3: 'social media management',
      service4: 'Strategisk Kommunikation',

      bild1: '/fc1.jpg',
      bild2: '/fc2.jpg',
      bild3: '/fc3.jpg',
      bild4: '/fc4.jpg',

    

    }
  ]
  return (
    <main className="">
      <div className='background4 h-[80vh] relative'>
        <div className='bg-black/20 absolute w-full h-full left-0 top-0'></div>
          <div className='px-4 md:px-10 max-w-[1700px] mx-auto flex flex-col gap-10'>
            <h1 className='text-4xl md:text-6xl text-white uppercase relative z-10 pt-10 animation'>Fc gruppen</h1>
            <h1 className='text-white md:text-6xl text-4xl relative z-10 animation'>- Ditt val av<br className='md:block hidden' /> catering sedan 1993</h1>
          </div>
      </div>
        <section className="flex flex-col max-w-[1700px] mx-auto px-4 md:px-10 ">
            {content.map((item) => (
              <div key={item.id}>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-2' key={item.id}>
                  <div>
                    <h1 key={item.id} className='text-black md:text-lg font-normal uppercase'>{item.title}</h1>
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
                    <Link className='md:text-lg underline font-normal' href="https://fcgruppen.se/">
                      fcgruppen.se
                    </Link>
                  </div>
              </div>
              <div className='my-5'>
             <video className='rounded-lg' src="/fc.mp4" controls muted loop width="100%" height="100%" />
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