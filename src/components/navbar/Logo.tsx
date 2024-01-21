import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = ({}: Props) => {
  return (

      <Link href={"/"} className="flex items-center gap-x-5">
        <Image src={'/Ricardo_Linhares_Psicologo_Psicologia_Barcelos_Online.png'} width={128} height={40} alt={'Ricardo Linhares Consultas de Psicologia Barcelos'} className='w-auto h-auto'/>
        <h1 className="text-lg hidden md:block">Consultas de Psicologia Barcelos</h1>
        <h1 className="text-lg hidden sm:block md:hidden">Psicologia Barcelos</h1>
      </Link>
    
        

   
 
  )
}

export default Logo