"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from "react";

type Props = {
  title: string;
  desc: string;
  link:string
  imageUrl: string
  imageName?:string
  isVerticalOnly?:boolean
};

const CardMain = ({ title, desc, link, imageUrl,imageName, isVerticalOnly }: Props) => {
    const router = useRouter()
const handleClick = () => {
    router.push(link)
}

  return (
    <div 
    onClick={handleClick}
    className={` cursor-pointer  rounded-md shadow-md shadow-popover-foreground/5 flex bg-gradient-to-b ${isVerticalOnly ? "from-card" : "from-muted"}  to-card-cardb 
    hover:bg-gradient-to-b hover:from-card hover:to-muted
    active:bg-gradient-to-b active:from-card-cardb active:to-muted
    ${isVerticalOnly ? "flex-col max-w-sm h-[500px] " : "sm:flex-row  "} flex-col  sm:pl-2 w-full 2xl:w-6/12  items-center justify-center `}>
      <div className="flex items-center sm:basis-2/5   ">
        <Image
       
        className={`object-contain w-full h-cardHeight ${isVerticalOnly ? "pt-3" : "pt-0"}`}
        width={0}
        height={0}
        sizes='100vw'
          alt={`${imageName} || "imagem psicologia barcelos"`}
          src={imageUrl}
        />
      </div>
      <div className="flex flex-1  sm:basis-3/5 px-4 py-2 flex-col justify-evenly self-start  ">
        <Link href={`${link}`}>
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        </Link>
        <p className='text-secondary'>{desc}</p>
      </div>
    </div>
  );
};

export default CardMain;
