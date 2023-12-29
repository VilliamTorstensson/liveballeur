import Link from 'next/link'
export default function Stats () {
  return (
    <main className='max-w-[1700px] mx-auto px-4 md:px-10 mt-10'>

    
    <div className='grid grid-cols-2 md:grid-cols-3 border-t pt-5 gap-8 md:gap-5 py-10'>
    <div className='flex flex-col gap-2'>
      <h1 className='font-normal text-lg text-[#6c6c6c]'>Grundades</h1>
      <h1 className='text-6xl md:text-8xl  font-normal'>2015</h1>
    </div>
    <div className='flex flex-col gap-2'>
      <h1 className='font-normal text-lg text-[#6c6c6c]'>Nöjda kunder</h1>
      <h1 className='text-6xl md:text-8xl  font-normal'>20+</h1>
    </div>
    <div className='flex flex-col gap-2'>
      <h1 className='font-normal text-lg text-[#6c6c6c]'>Projekt</h1>
      <h1 className='text-6xl md:text-8xl  font-normal'>50+</h1>
    </div>
   
    
  </div>
  <div className='flex flex-col items-start justify-end  md:mt-5 gap-2 mb-5'>
      <Link href="mailto:Samuel@balleurproduction.com" className='button' >Boka ett möte!</Link>
    </div>
  </main>
  )
}