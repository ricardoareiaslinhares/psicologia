"use client"
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image'


type Props = {
    listItens: any[]
}

const Carrosel = ({ listItens }: Props) => {
  const RenderItem = () => {
    return listItens.map((item, index) => {
      return  <CarouselItem key={index}>


        <Image  width={0}
        height={0}
        sizes='100vw' src={item} alt={'imagem'} className='w-full h-full object-fill' />


      </CarouselItem>
   
    });
  };

  return (
    <Carousel className="  bg-blue-300 w-[240px] sm:w-[400px]">
      <CarouselContent className="  bg-foreground">
      <RenderItem/>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Carrosel