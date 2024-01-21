import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from '../ui/button';
type Props = {}

const Whatsapp = (props: Props) => {
  return (
    <Button className="sm:px-4  sm:py-6 py-10 flex items-center justify-center sm:hidden ">



    <a
    href="https://wa.me/+351918562032"
    className="flex flex-row gap-3 items-center justify-center"
    target="_blank"
    rel="noopener noreferrer"
  >
<FaWhatsapp size={30} />
<p className='text-lg font-medium '>Whatsapp</p>
  </a>
  </Button>
  )
}

export default Whatsapp