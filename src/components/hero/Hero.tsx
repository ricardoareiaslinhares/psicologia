import React from 'react'
import Image from 'next/image'
type Props = {}

const Hero = ({}: Props) => {
  return (
    <div 
    className='flex flex-col w-full h-80  overflow-hidden justify-center relative'
   
    >
        <Image
         width={0}
        height={0}
        loading='lazy'
        sizes='100vw' src="/Consultas_Psicologia_Barcelos_Ricardo_Linhares_Psicologo.jpg" alt="hero"
        
        className='bg-cover bg-center bg-no-repeat absolute -z-1 object-cover w-full h-full opacity-40'
        />
  <div className=" z-10 flex flex-1 flex-col sm:flex-row items-center px-8 md:px-24 flex-wrap sm:flex-nowrap justify-center sm:justify-around max-w-screen-2xl  self-center">
        <div className="flex gap-4  flex-1 sm:pr-12 2xl:pr-32 py-4 sm:pb-0 flex-col" >
        <h1 className="text-xl  sm:text-4xl  font-bold text-left ">Psicologia Clínica - Barcelos</h1>
            <p className=" text-lg sm:text-xl font-bold italic ">&ldquo;Até uma jornada de mil km começa com um simples passo...&ldquo;</p>
           
        </div>
        <div className="flex flex-1 flex-col gap-y-3 pb-3 sm:pb-3 w-full">
          <ul className='list-disc'>
    
            <li className="text-md sm:text-lg font-bold mb-3">Psicoterapia / Terapia</li>
            <li className="text-md sm:text-lg font-bold mb-3">Acompanhamento e Aconselhamento Psicológico</li>
            <li className=" text-md sm:text-lg font-bold">Consultoria em Psicologia do Trabalho e Organizações</li>

          </ul>

        </div></div>
    </div>
  )
}

export default Hero