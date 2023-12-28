import Image from 'next/image'
export default function Gallery() {
  const Images = [
    {
    id:1,
    url: '/jkpg1.jpg',
    },
    {
      id: 2,
      url: '/atteviks1.jpg',
    },
    {
      id: 3,
      url: '/fc1.jpg',
    },
    {
      id: 4,
      url: '/marbodal1.jpg',
    },
    {
    id:5,
    url: '/fc2.jpg',
   
    },
    {
      id: 6,
      url: '/marbodal2.jpg'
      ,
    },
    {
      id: 7,
      url: '/jkpg2.jpg',
    },
    {
      id: 8,
      url: '/atteviks2.jpg'
     ,
    },
    {
      id:9,
      url: '/jkpg3.jpg',
      },
      {
        id: 10,
        url: '/atteviks3.jpg',
      },
      {
        id: 11,
        url: '/fc3.jpg',
      },
      {
        id:12 ,
        url: '/marbodal3.jpg',
      },
      {
        id:5,
        url: '/fc4.jpg',
       
        },
        {
          id: 6,
          url: '/marbodal4.jpg'
          ,
        },
        {
          id: 7,
          url: '/jkpg4.jpg',
        },
        {
          id: 8,
          url: '/atteviks4.jpg'
         ,
        },
  ]
  return (
    <main className="mt-20 max-w-[1700px] mx-auto px-4 md:px-10 max-h-[110vh] overflow-y-auto">
      <div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {Images.map((Images) => (
            <div key={Images.id}>
            <Image key={Images.id} src={Images.url} width={1700} height={1000} className='' />
            </div>
          ))}
          </div>
      </div>
    </main>
  )
}