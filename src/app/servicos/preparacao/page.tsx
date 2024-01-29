import React from "react";
import text from "@/data/text.json";
import { language } from "@/utils/language";
import SectionText from "@/components/sections/SectionText";
import TogetherAction from "@/components/actionCall/Together";
import Image from "next/image";

type Props = {};

const Preparacao = (props: Props) => {
  return (
    <main className="flex  flex-col items-center justify-start min-h-screen  w-full z-0 overflow-hidden ">
              <div className="flex  w-full  px-8 md:px-24 pt-8">
        <p className="text-left leading-8 ">
          <cite>
          &ldquo;Não se pode parar as ondas do mar, mas pode-se aprender a surfar&ldquo; </cite>
          - Jon Kabat-Zinn.
        </p>
      </div>
      <section className="flex  w-full max-w-screen-2xl   px-8 md:px-24 pt-8 flex-wrap   ">
  
   
      <div className="flex flex-1 flex-col md:flex-row gap-6 mb-6 ">
      <SectionText
          title={text[language].ServicosPreparacao.titulo}
          desc1={text[language].ServicosPreparacao.desc1}
          desc2={text[language].ServicosPreparacao.desc2}
        />

          <Image
         width={0}
        height={0}
        sizes='100vw'
            src={"/psicologiaTrabalhoAvaliacao.png"}
            alt="Preparação para Avaliações Psicológicas imagem"
            className=" w-[300px] h-[300px]  flex self-center sm:self-start"
          />
        </div>
        </section>
      <section className="flex  w-full  pt-8">
        <div className="flex flex-1 bg-muted  py-6 items-center justify-center">
          <h4 className="text-lg text-center font-bold px-8 md:px-24 max-w-screen-2xl">
            {text[language].ServicosPreparacao.desc3}
          </h4>
        </div>
      </section>
      <section className="flex  w-full max-w-screen-2xl  px-8 md:px-24 pt-8 flex-wrap   ">
        <SectionText
          desc1={text[language].ServicosPreparacao.desc4}
          desc2={text[language].ServicosPreparacao.desc5}
        />
      </section>
      <section className="flex  w-full  pt-8">
        <div className="flex flex-1 bg-muted  py-6 items-center justify-center">
          <h4 className="text-lg text-center font-bold px-8 md:px-24 max-w-screen-2xl">
            {text[language].ServicosPreparacao.desc6}
          </h4>
        </div>
      </section>
      <section className="flex  w-full max-w-screen-2xl  px-8 md:px-24 py-8 flex-wrap items-center justify-center   ">
      <TogetherAction/>
      </section>
    </main>
  );
};

export default Preparacao;
