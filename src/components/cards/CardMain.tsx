"use client"
import { useRouter } from 'next/navigation'
import React from "react";

type Props = {
  title: string;
  desc: string;
  link:string
  imageUrl: string
};

const CardMain = ({ title, desc, link, imageUrl }: Props) => {
    const router = useRouter()
const handleClick = () => {
    router.push(link)
}

  return (
    <div className="  rounded-md shadow-md  border-border border-2 flex flex-col sm:flex-row  w-full 2xl:w-4/12  items-center justify-center ">
      <div className="flex items-center sm:basis-2/5   ">
        <img
        onClick={handleClick}
        className=" object-contain w-full h-cardHeight   cursor-pointer "
          alt="Psicologia"
          src={imageUrl}
        ></img>
      </div>
      <div className="flex flex-1  sm:basis-3/5 px-4 py-2 flex-col ">
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <p className='text-secondary'>{desc}</p>
      </div>
    </div>
  );
};

export default CardMain;
