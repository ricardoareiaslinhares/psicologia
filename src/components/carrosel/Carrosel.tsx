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


        <img src={item} alt={'imagem'} className='w-full h-full object-fill' />


      </CarouselItem>
   
    });
  };

  return (
    <Carousel>
      <CarouselContent className=" w-[400px] h-[400px] bg-foreground">
      <RenderItem/>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Carrosel