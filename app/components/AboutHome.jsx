import { LuDot } from 'react-icons/lu'
export default function AboutHome () {
  return (
    <main className="px-4 md:px-10 py-10">
      <section className="w-full h-full  py-20 md:py-40 max-w-[1620px]   mx-auto etablerad rounded-lg">
        <div className="flex  flex-col items-center justify-center gap-6">
      <h1 className="font-bold text-5xl leading-[60px] uppercase text-white text-center">Etablerade år 2015</h1>
      <p className="text-xs text-white text-center md:text-xl md:w-[40%] w-[80%]">BALLEUR PRODUCTION GROUP SCANDINAVIA® - Har skapat värde åt företag sedan 2015</p>
      <div className="mt-[55px] w-full flex justify-between items-center px-4 md:px-10 md:w-[60%]">
        <h1 className="text-[9px] md:text-lg font-semibold uppercase text-white">FOTO</h1>
        <LuDot className='text-2xl text-white' />
        <h1 className="text-[9px] md:text-lg font-semibold uppercase text-white">Social media management</h1>
        <LuDot className='text-2xl text-white' />
        <h1 className="text-[9px] md:text-lg font-semibold uppercase text-white">film</h1>
        <LuDot className='text-2xl text-white' />
        <h1 className="text-[9px] md:text-lg font-semibold uppercase text-white">Consulting</h1>
      </div>
      </div>
    
      </section>
    </main>
  )
}