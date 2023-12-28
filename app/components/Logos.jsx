import Image from 'next/image'
export default function Logos () {
  return (
    <main className=" max-w-[1700px] mx-auto py-10 md:py-20 px-4 md:px-10">
      <div className=''>
        <h1 className='mb-4 uppercase border-b border-[rgb(50,50,50)]'>Företag som litar på oss</h1>
      </div>
      <div className=''>
      <div className='grid grid-cols-2 gap-10  md:hidden  py-3'>
        
          <Image src="/101.jpg" alt="Atteviks" width={150} height={150} />
         
        
          <Image src="/102.jpg" alt="Atteviks" width={150} height={150} />
         
       
          <Image src="/103.jpg" alt="Atteviks" width={150} height={150} />
        
          <Image src="/104.jpg" alt="Atteviks" width={150} height={150} />
       
    
          <Image src="/105.jpg" alt="Atteviks" width={150} height={150} />
          
        
          <Image src="/106.jpg" alt="Atteviks" width={150} height={150} />
      
  
          <Image src="/107.jpg" alt="Atteviks" width={150} height={150} />
          
     
          <Image src="/108.jpg" alt="Atteviks" width={150} height={150} />
        
          
         
          </div>
      </div>
      <div className="logos hidden md:flex py-5">
        <div className="logos-slide ">
          <Image src="/101.jpg" alt="Atteviks" width={200} height={200} />
          <Image src="/102.jpg" alt="Atteviks" width={200} height={200} />
          <Image src="/103.jpg" alt="Atteviks" width={200} height={200} />
          <Image src="/104.jpg" alt="Atteviks" width={200} height={200} />
          <Image src="/105.jpg" alt="Atteviks" width={200} height={200} />
          <Image src="/106.jpg" alt="Atteviks" width={200} height={200} />
          <Image src="/107.jpg" alt="Atteviks" width={200} height={200} />
          <Image src="/108.jpg" alt="Atteviks" width={200} height={200} />
          <Image src="/101.jpg" alt="Atteviks" width={200} height={200} />
          <Image src="/102.jpg" alt="Atteviks" width={200} height={200} />
          <Image src="/103.jpg" alt="Atteviks" width={200} height={200} />
          <Image src="/104.jpg" alt="Atteviks" width={200} height={200} />
          <Image src="/105.jpg" alt="Atteviks" width={200} height={200} />
          <Image src="/106.jpg" alt="Atteviks" width={200} height={200} />
          <Image src="/107.jpg" alt="Atteviks" width={200} height={200} />
          <Image src="/108.jpg" alt="Atteviks" width={100} height={200} />
         
        </div>
      </div>
    </main>
  )
}