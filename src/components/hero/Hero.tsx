import React from 'react'
import Image from 'next/image'
type Props = {}

const Hero = ({}: Props) => {
  return (
    <div 
    className='flex flex-col w-full h-80  overflow-hidden justify-center relative'
   
    >
        <img src="/Consultas_Psicologia_Barcelos_Ricardo_Linhares_Psicologo.jpg" alt="hero"
        
        className='bg-cover bg-center bg-no-repeat absolute -z-1 object-cover w-full h-full opacity-40'
        />
  <div className=" z-10 flex flex-1 flex-col sm:flex-row items-center px-8 md:px-24 flex-wrap sm:flex-nowrap justify-center sm:justify-around max-w-screen-2xl  self-center">
        <div className="flex flex-1  items-center ">
            <h1 className='text-xl sm:text-7xl font-bold'>Consultas de Psicologia</h1>
        </div>
        <div className="flex flex-1 flex-col gap-y-4  w-full">
            <p 
            className='text-md font-bold'
            >● Psicoterapia / Terapia</p>
               <p 
            className='text-md font-bold'
            >● Acompanhamento e Aconselhamento Psicológico</p>
               <p 
            className='text-md font-bold'
            >● Consultoria em Psicologia do Trabalho e Organizações</p>
        </div></div>
    </div>
  )
}

export default Hero