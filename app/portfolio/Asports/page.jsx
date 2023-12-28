
import Link from 'next/link'

export default function Asports () {

  const content = [
    {
      id: 1,
    
      title: 'Aports sportswear', 

      service1: 'foto',
      service2: 'film',
      service3: 'social media management',
      service4: 'Strategisk Kommunikation',
    

    }
  ]
  return (
    <main className="">
      <div className='background6 h-[80vh] relative'>
        <div className='bg-black/20 absolute w-full h-full left-0 top-0'></div>
          <div className='px-4 md:px-10 max-w-[1700px] mx-auto flex flex-col gap-10'>
            <h1 className='text-4xl md:text-6xl text-white uppercase relative z-10 pt-10 animation'>Asports sportswear</h1>
            <h1 className='text-white md:text-6xl text-4xl relative z-10 animation'>- Sport o träningskläder</h1>
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
                 
                  
              </div>
              </div>
            ))}
              {/**VIDEO Asports */}
          
        </section>
    </main>
  )
}