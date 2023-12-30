
import Link from 'next/link'

export default function Footer () {

  return (
   <main  className='overflow-x-hidden'>

          <div className='max-w-[1700px] mx-auto px-4 md:px-10  py-[3.5rem] md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 border-t'>
          <div className='order-2'>
              <div>
                <h1 className='pb-5 text-2xl font-normal'>Kontakta oss</h1>
              </div>
             

               
            <form id="contact" className='' action="https://formspree.io/f/xleqeeko" method="POST">
              <div className='flex flex-col md:grid md:grid-cols-2 gap-4'>
            <input type="text" placeholder="Namn *" className="w-full h-10 border-b text-black font-normal placeholder-gray-600 text-sm py-2 bg-transparent border-gray-600" required/>
              <input name='Email' type="email" placeholder="Email *" className="w-full h-10 border-b text-black font-normal placeholder-gray-600 text-sm py-2 bg-transparent border-gray-600" required/>
              <input name='Telefon' type="tel" placeholder="Telefon *" className="w-full h-10 border-b text-black font-normal placeholder-gray-600  text-sm py-2 bg-transparent border-gray-600" required/>
              <input name='Företag' type="text" placeholder="Företag * (optional)" className="w-full h-10 border-b text-black font-normal placeholder-gray-600  text-sm py-2 bg-transparent border-gray-600" required />
              </div>
              <input name="Meddelande" type="textarea" placeholder="Vi är intresserade av *" className=" w-full h-10 border-b text-black font-normal mt-10 placeholder-gray-600  text-sm py-2 bg-transparent border-gray-600" />

              <div className='mt-5'>
            <button className='button' type="submit">
              Skicka
            </button>
            </div>
              </form>
            
              
            
          
            </div>
            <div className='flex flex-col'>
                <h1 className='text-3xl sm:text-5xl md:text-4xl lg:text-5xl 2xl:text-6xl font-medium'>Balleur production group scandinavia</h1>
                <div className='mt-5 flex flex-col gap-2'>
                  <Link className='w-min' href="mailto:Samuel@balleurproduction.com">
                    <h1 className='hover:text-gray-600 hover:underline text-sm md:text-md font-medium'>Samuel@balleurproduction.com</h1>
                  </Link>
                  <Link className='w-min' href="https://instagram.com">
                    <h1 className='hover:text-gray-600 hover:underline text-sm md:text-md font-medium'>Instagram</h1>
                  </Link>
                  <Link className='w-min' href="https://linkedin.com">
                    <h1 className='hover:text-gray-600 hover:underline text-sm md:text-md font-medium'>Linkedin</h1>
                  </Link>
                  <Link className='w-min' href="https://linkedin.com">
                    <h1 className='hover:text-gray-600 hover:underline text-sm md:text-md font-medium'>Facebook</h1>
                  </Link>
                  
                </div>

            </div>
           
            </div>
            <div className='flex flex-col items-center justify-center '>
              <Link className='text-sm hover:underline font-normal' href="/Privacy">
                Privacy Policy
              </Link>
              <h1 className='text-sm font-normal'>© 2023 Balleur production group snadinavia</h1>
            </div>
          
            
            </main>

  )
}