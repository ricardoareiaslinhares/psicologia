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
    <div className="bg-middleBackground rounded-md shadow-md flex flex-row  w-full h-52 2xl:w-4/12 flex-wrap sm:flex-nowrap  ">
      <div className="flex items-center sm:basis-2/5 2xl:basis-auto  ">
        <img
        onClick={handleClick}
        className=" object-contain w-full h-cardHeight 2xl:w-auto  cursor-pointer "
          alt="Psicologia"
          src={imageUrl}
        ></img>
      </div>
      <div className="flex  sm:basis-3/5 2xl:basis-auto px-4 py-2 flex-col">
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default CardMain;
