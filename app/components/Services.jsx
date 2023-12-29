"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";


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
    <section id="services" className=' w-full h-full max-w-[1700px] mx-auto px-4 md:px-10 pt-10 pb-20 md:py-20'>
      
        
    <div className=' md:mb-3  flex justify-between items-center border-b pt-2 border-[#323232]'>
    <h1 className='text-sm md:text-lg uppercase  flex'>balleur production group scandinavia </h1>
      <LuDot className='text-2xl ' />
      
    </div>
    <div className='py-4 grid grid-cols-1 gap-5 md:grid-cols-2'>
      <div>
      <h1 className=' font-[450] text-xl md:text-2xl lg:text-3xl uppercase '>Våra tjänster</h1>
      <div className='flex md:justify-start md:mt-10 justify-end'>
      <Link className=' button' href='mailto:Samuel@balleurproduction.com'>
        Boka ett möte
      </Link>
      </div>
      </div>
      <div className='text-lg md:text-xl'>
        <p>Sedan 2015 har vi hjälp företag med Foto, Film och social media management, för att hjälpa dem att stärka sitt varumärke på sociala medier men också inom sin verksamhet </p>
      </div>
    </div>
    <div className='flex flex-col gap-4 '>
        
      
      {questions.map((q) => (
        
        <div className='flex-col  flex w-full ' key={q.id}>
            <div className={`cursor-pointer  w-full  pb-5  border-b border-[#323232]  ${q.id === 1 ? '' : ''}`}>
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
      
   
  
    </section>
    </main>
  );
};


