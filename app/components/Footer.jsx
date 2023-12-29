import Link from 'next/link'
export default function Footer () {
  return (
   <main  className='overflow-x-hidden'>
          <div className='max-w-[1700px] mx-auto px-4 md:px-10  py-[3.5rem] md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 border-t'>
          <div className='order-2'>
              <div>
                <h1 className='pb-5 text-2xl font-normal'>Kontakta oss</h1>
              </div>
            <form id="contact" className='' action="submit">
              <div className='flex flex-col md:grid md:grid-cols-2 gap-4'>
            <input type="text" placeholder="Namn *" className="w-full h-10 border-b text-black font-normal placeholder-gray-600 text-sm py-2 bg-transparent border-gray-600" required/>
              <input type="email" placeholder="Email *" className="w-full h-10 border-b text-black font-normal placeholder-gray-600 text-sm py-2 bg-transparent border-gray-600" required/>
              <input type="tel" placeholder="Telefon *" className="w-full h-10 border-b text-black font-normal placeholder-gray-600  text-sm py-2 bg-transparent border-gray-600" required/>
              <input type="text" placeholder="Företag * (optional)" className="w-full h-10 border-b text-black font-normal placeholder-gray-600  text-sm py-2 bg-transparent border-gray-600" required />
              </div>
              <input type="textarea" placeholder="Vi är intresserade av *" className=" w-full h-10 border-b text-black font-normal mt-10 placeholder-gray-600  text-sm py-2 bg-transparent border-gray-600" />
              </form>
              
              
            
            <div className='mt-5'>
            <button className='button' type="submit">
              Skicka
            </button>
            </div>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-2xl lg:text-4xl uppercase'>Balleur production group scandinavia</h1>
                <div className='mt-5 flex flex-col gap-2'>
                  <Link className='w-min' href="mailto:kontakt@balleur.se">
                    <h1 className='hover:text-gray-600 hover:underline text-sm md:text-md uppercase'>kontakt@balleur</h1>
                  </Link>
                  <Link className='w-min' href="https://instagram.com">
                    <h1 className='hover:text-gray-600 hover:underline text-sm md:text-md uppercase'>Instagram</h1>
                  </Link>
                  <Link className='w-min' href="https://linkedin.com">
                    <h1 className='hover:text-gray-600 hover:underline text-sm md:text-md uppercase'>linkedin</h1>
                  </Link>
                  <Link className='w-min' href="https://linkedin.com">
                    <h1 className='hover:text-gray-600 hover:underline text-sm md:text-md uppercase'>facebook</h1>
                  </Link>
                  
                </div>

            </div>
           
            </div>
            <div className='flex flex-col items-center justify-center '>
              <Link className='text-sm hover:underline' href="/Privacy">
                Privacy Policy
              </Link>
              <h1 className='text-sm'>© 2023 Balleur production group snadinavia</h1>
            </div>
            <div className='bg-black text-white px-4 md:px-10 flex justify-center py-2'>
              <Link href="https://shipmedia.se">
                <h1 className='text-sm text-center font-normal'>Producerad av <span className='underline'>Shipmedia.se</span></h1>
              </Link>
            </div>
            
            </main>

  )
}