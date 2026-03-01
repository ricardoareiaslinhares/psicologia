import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = ({}: Props) => {
  return (

      <Link href={"/"} className="flex items-center gap-x-5">
        <Image src={'/Ricardo_Linhares_Psicologo_Psicologia_Barcelos_Online.png'} width={128} height={40} alt={'Ricardo Linhares Consultas de Psicologia Barcelos'} className='w-auto h-auto'/>
        <p className="text-lg font-bold hidden md:block">Consultas de Psicologia Barcelos</p>
        <p className="text-lg font-bold hidden sm:block md:hidden">Psicologia Barcelos</p>
      </Link>
  )
}

export default Logo