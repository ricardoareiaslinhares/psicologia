"use client"
import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {

};

function FooterCredits({}: Props) {
  return (
    <div className="w-full flex items-center justify-center flex-1 py-8 flex-wrap-reverse  lg:flex-nowrap gap-y-4  ">
      <div className="flex justify-center lg:justify-end  items-center w-full xl:w-auto  lg:min-w-[300px] ">
        <Link
          className="h-16 w-auto "
          href={"https://www.instagram.com/linharespsicologia/"}
          target="_blank"
        >
          <Image
            width={0}
            height={0}
            sizes="100vw"
            alt="Instagram @linharespsicologia"
            className=" object-cover  h-16 w-auto  cursor-pointer "
            src="/Instagram_Ricardo_Linhares_Psicologo_Barcelos.png"
          />
        </Link>
        
 {/*        <Link
          className="h-16 w-auto "
          href={"https://www.linkedin.com/in/ricardolinharespsicologo/"}
          target="_blank"
        >
          <Image
            width={0}
            height={0}
            sizes="100vw"
            alt="LinkedIn Ricardo Linhares"
            className=" object-cover h-16 w-auto  cursor-pointer "
            src="/Linkedin_Ricardo_Linhares_Psicologo_Barcelos.png"
          />
        </Link> */}
        <Link
          className="h-16 w-auto "
          href={
            "https://www.google.com/maps/place/Ricardo+Linhares+Consultas+de+Psicologia+em+Barcelos+e+Online/@41.5470376,-8.6187725,15z/data=!4m2!3m1!1s0x0:0x21cda5f4855abfbb?sa=X&ved=2ahUKEwjj97uy2bWDAxU0SKQEHZZmCOYQ_BJ6BAhMEAA&cshid=1703889121089404"
          }
          target="_blank"
        >
          <Image
            width={0}
            height={0}
            sizes="100vw"
            alt="Ver no Google"
            className=" object-cover  h-16 w-auto  cursor-pointer "
            src="/logo.png"
          />
        </Link>
      </div>
      <div className="flex justify-center items-center my-8 sm:my-0 gap-1 flex-col w-full xl:w-auto lg:mx-10 lg:min-w-[300px] ">
        <p className="text-center">Ricardo Linhares</p>
        <p className="text-center">Consultas de Psicologia</p>

        <p className="text-center text-sm"> © 2021 - 2025</p>
      </div>
      <div className="flex justify-center lg:justify-start gap-x-8 items-center  w-full xl:w-auto lg:min-w-[300px]  ">
        <Link
          className="h-16 w-auto "
          href={"https://www.ordemdospsicologos.pt/pt"}
          target="_blank"
        >
          <Image
            width={0}
            height={0}
            sizes="100vw"
            alt="Ordem dos Psicologos Portugueses (OPP)"
            className=" object-cover w-auto h-16  cursor-pointer "
            src="/Ordem_dos_Psicologos_Portugueses_OPP.png"
          />
        </Link>
        <Link
          className="h-16 w-auto "
          href={"https://contextualscience.org/"}
          target="_blank"
        >
          <Image
            width={0}
            height={0}
            sizes="100vw"
            alt="Association for Contextual Behavioral Science (ACBS)"
            className=" object-cover w-auto h-16  cursor-pointer "
            src="/Association_for_Contextual_Behavioral_Science.png"
          />
        </Link>
      </div>
    </div>
  );
}

export default FooterCredits;
