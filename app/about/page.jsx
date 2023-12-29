import Image from 'next/image'
import Link from 'next/link'
import { RxBorderSolid } from 'react-icons/rx'
export default function About () {
  return (
    <main className="max-w-[1700px] mx-auto px-4 md:px-10">
      <div className="">
        <div className='animation border-b border-[#d0d0d0] flex flex-col gap-10 pb-10 pt-10'>
         
          <h1 className=' mt-5 xl:text-6xl text-2xl text-black font-medium'><RxBorderSolid className='inline-block mr-2' />När du vill berätta vad som gör er unika krävs en berättelse, låt oss berätta den åt dig! </h1>
          
        </div>
        <div className='animation2 grid grid-cols-1 py-5 gap-5 md:grid-cols-2 mt-5'>
            <div>
              <h1 className='text-2xl md:text-4xl'>Om oss</h1>
            </div>
            <div className='flex flex-col gap-10 pb-10'>
              <h1 className='text-md md:text-xl font-normal'>
              Vi är ett ungt och innovativt produktionsbolag som producerar det era kunder faktiskt vill se! Vi tror på att skapa en djupare relation med dina kunder genom att skapa innehåll som verkligen talar till dem.​​ Hos oss handlar det om att skapa en minnesvärd upplevelse för dig och dina kunder.
              <br />
              <br />
              Vi tror på att bygga starka band genom vårt innehåll, som inte bara talar till dina kunder utan också lyssnar på dem. Varje projekt är en resa mot meningsfullt innehåll och starkare relationer. Så, varför välja oss? 
              <br />
              <br />
              För att vi är mer än ett produktionsbolag - vi är era partners i att skapa en oförglömlig berättelse. Låt oss gemensamt bygga en framtid där varje bild, varje ord och varje sekund rör vid hjärtat och engagerar dina kunder på djupet.  
              </h1>
              <Link href="/" className='button w-min' >Boka ett möte!</Link>
            </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 border-t pt-5 gap-10 md:gap-5 py-10'>
          <div className='flex flex-col gap-2'>
            <h1 className='uppercase text-sm'>Grundades</h1>
            <h1 className='text-6xl md:text-8xl text-[#6c6c6c] font-normal'>2015</h1>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='uppercase text-sm'>Nöjda kunder</h1>
            <h1 className='text-6xl md:text-8xl text-[#6c6c6c] font-normal'>20+</h1>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='uppercase text-sm'>Projekt</h1>
            <h1 className='text-6xl md:text-8xl text-[#6c6c6c] font-normal'>50+</h1>
          </div>
          
          
        </div>
        <div className='flex flex-col items-start justify-end  md:mt-5 gap-2 mb-5'>
            <Link href="/" className='button w-min' >Boka ett möte!</Link>
          </div>
        <div>
          <h1 className='font-medium text-lg pt-5 uppercase'>Vi har erbjudit proffesionella tjänster sedan 2015</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 pt-5'>
          <h1 className='border-b py-2 text-md md:text-xl font-normal'>Foto</h1>
          <h1 className='border-b py-2 text-md md:text-xl font-normal'>Film</h1>
          <h1 className='border-b py-2 text-md md:text-xl font-normal'>Social media management</h1>
          <h1 className='border-b py-2 text-md md:text-xl font-normal'>Consulting</h1>
        </div>
      </div>
      <div className='lg:w-[70%] w-full py-10 flex flex-col gap-10'>
        <h1 className='font-normal'><span className='text-xl font-medium'>Från norr till söder, vi finns i hela landet </span>

 

        <br />
 <br />

Vi är stolta över vår hemstad, Jönköping, en plats mitt bland de småländska tallskogarna. Men vårt arbete är inte begränsat till några geografiska gränser! 

Vi är digitala nomader. Vår passion och vårt arbete har inga geografiska begränsningar. 

 <br />
 <br />

Med basen i Jönköping, tar vi vår kunskap, engagemang och expertis till hela Sverige.Vårt team består av resurser och experter som är utspridda över hela landet. Oavsett var i Sverige du befinner dig, kan du förlita dig på oss att leverera resultat som uppfyller dina krav! 

<br />
 <br />

Så, oavsett om du befinner dig i norrland, längs den soliga västkusten eller någonstans mitt emellan, är vi redo att stödja din resa mot digital framgång. Vårt hjärta är i Jönköping, men våra möjligheter är gränslösa. </h1>
<Link href="/" className='button w-min' >Boka ett möte!</Link>
      </div>
    </main>
  )
}