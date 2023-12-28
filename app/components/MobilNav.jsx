"use client"
import { useState } from 'react'
import Link from 'next/link'

import { IoMdClose } from "react-icons/io";

export default function MobilNav () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main>
      <div className='navanimation relative z-50' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <IoMdClose className={`text-2xl text-white ${isOpen ? 'fixed top-7  rounded-full  right-4 ' : 'flex'}`} />

          ) : (
            <div className='w-[35px] h-[14px] flex flex-col justify-between'>
              <div className='w-full h-[4px] bg-[#323232]'></div>
              <div className='w-full h-[4px] bg-[#323232]'></div>
             
            </div>
          )}
      </div>
      <div className={`w-full h-screen fixed bg-black left-0 z-40 duration-500 ${isOpen ? 'top-0' : '-top-[150%]'}`}>
        <div className='w-full h-20 items-center flex px-4 md:px-10'>
        <h1 className='text-white uppercase'>Balleur production</h1>
        </div>
          <div>
          <ul className='px-4 md:px-10'>
            <li onClick={() => setIsOpen(!isOpen)}  className='text-2xl uppercase text-gray-400 hover:text-white mt-10 border-b border-[#323232]'>
              <Link href="/">
                Hem
              </Link>
            </li>
            <li onClick={() => setIsOpen(!isOpen)} className='text-2xl uppercase text-gray-400 hover:text-white mt-10 border-b border-[#323232]'>
              <Link href="/about">
                Om oss
              </Link>
            </li>
            <li onClick={() => setIsOpen(!isOpen)} className='text-2xl uppercase text-gray-400 hover:text-white mt-10 border-b border-[#323232]'>
              <Link href="/portfolio">
                Projekt
              </Link>
            </li>
            <li onClick={() => setIsOpen(!isOpen)} className='text-2xl uppercase text-gray-400 hover:text-white mt-10 border-b border-[#323232]'>
              <Link href="#contact">
                Kontakt
              </Link>
            </li>
          </ul>
          </div>

      </div>
    </main>
  )
}