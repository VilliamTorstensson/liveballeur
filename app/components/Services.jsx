"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Services () {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'Social Media Management',
      answer: 'Vi förstår att det kan vara utmanande för företag att hålla jämna steg med de snabba förändringarna och de ständigt föränderliga algoritmerna på sociala medier Vårt team av sociala mediespecialister har lång erfarenhet av att hantera sociala medier för företag i olika branscher. Vi har också en djup förståelse för vad som fungerar på olika plattformar och vilken typ av innehåll som engagerar målgruppen och driver konverteringar. Vi arbetar tillsammans med er för att förstå era mål, målgrupp och varumärkesidentitet för att skapa en anpassad social media-strategi som passar era behov. Vi hjälper er att skapa en konsekvent och engagerande röst för ert varumärke på sociala medier, samtidigt som vi hanterar allt från inlägg till interaktioner med följare.',
    },
    {
      id: 2,
      question: 'Content Creation',
      answer: 'Vi tror att innehåll bör skapas med människan i åtanke. Det är därför vi skapar innehåll som människor faktiskt vill titta på. Vi använder oss av en mänsklig- och kultur-fokuserad strategi för att berätta historier och förstår att människor vill se sig själva och sina erfarenheter speglade i det media de konsumerar. Genom att skapa innehåll som resoneras med vår publik fångar vi inte bara deras uppmärksamhet utan bygger också långvariga relationer. Vi gör det vi gör eftersom vi tror på kraften i storytelling för att koppla samman människor, inspirera förändring och forma världen vi lever i.',
    },
    {
      id: 3,
      question: 'Consulting',
      answer: "Vi förstår att sociala medier är en oumbärlig del av dagens marknadsföring och företag som vill nå ut till sin publik på ett mer personligt och engagerande sätt måste vara närvarande på olika plattformar. Men att navigera i den ständigt föränderliga världen av sociala medier kan vara utmanande och tidskrävande. Därför erbjuder vi våra kunder skräddarsydda lösningar som passar deras specifika behov och mål.\n\n" +  "Vi använder vår omfattande kunskap om marknadsföring, kreativitet och teknologi för att skapa effektiva strategier som engagerar och konverterar målgruppen. Vi erbjuder också utbildning och workshops för att hjälpa våra kunder att förstå och behärska de senaste trenderna och verktygen inom sociala medier. Genom att arbeta tillsammans med vårt team kan våra kunder förbättra sin synlighet, öka sin tillväxt och stärka sitt varumärke på sociala medier.",
    },
   
   
  ];

  const handleQuestionClick = (id) => {
    if (selectedQuestion === id) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(id);
    }
  };

  return (
    <main className=''>
    <section id="services" className=' w-full h-full max-w-[1700px] mx-auto px-4 md:px-10 py-10 md:py-20'>
      
        
    <div className=' md:mb-3  flex justify-between items-center border-b pb-2 border-[#323232]'>
    <h1 className='text-sm md:text-lg uppercase  flex'>balleur production group scandinavia </h1>
      <LuDot className='text-2xl ' />
      
    </div>
    <div className='py-4'>
      <h1 className=' py-2 font-[450] text-3xl md:text-5xl lg:text-5xl '>Vi hjälper företag runt om i hela sverige med</h1>
    </div>
    <div className='flex flex-col gap-4 '>
        
      
      {questions.map((q) => (
        
        <div className='flex-col  flex w-full ' key={q.id}>
            <div className={`cursor-pointer bg-gray-50   w-full hover:scale-[1.02] duration-500 pb-5 px-4 rounded-md shadow-md shadow-[#c4c4c4]  ${q.id === 1 ? '' : ''}`}>
            <div className='w-full flex justify-between items-center  ' onClick={() => handleQuestionClick(q.id)}>
            <h1 className='font-medium pt-5 md:text-lg text-md w-[80%] ' onClick={() => handleQuestionClick(q.id)}>{q.question} </h1>
            
            {selectedQuestion === q.id ? (
             
              <FaMinus  className='text-sm md:text-lg'/>
                ) : (
               
                <FaPlus  className='text-sm md:text-lg'/>
                 
              )}
            
            </div>
           
          {selectedQuestion === q.id && <p className='py-2 text-[#323232]'>{q.answer}</p>}
        
          </div>
          
        </div>
      
      ))}
      </div>
      <div className='mt-6 flex-col flex gap-5'>
      
      <Link className='button w-min' href="mailto:Samuel@balleurproduction.com">
        Boka ett möte
      </Link>
    </div>
   
  
    </section>
    </main>
  );
};


