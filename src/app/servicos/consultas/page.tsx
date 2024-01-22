
import SectionText from "@/components/sections/SectionText";
import React from "react";
import text from "@/data/text.json";
import { language } from "@/utils/language";
import TogetherAction from "@/components/actionCall/Together";

type Props = {};

const Consultas = ({}: Props) => {
  return (
    <main className="flex flex-col items-center justify-start  w-full z-0 overflow-hidden ">
           <div className="flex  w-full  px-8 md:px-24 pt-8">
        <p className="text-left leading-8 ">
          <cite>
          "É o seu caminho e apenas seu. Os outros podem acompanhá-lo(a), mas ninguém pode andar por si" </cite>
          - Rumi.
        </p>
      </div>
      <section className="flex  w-full max-w-screen-2xl  px-8 md:px-24 pt-8 flex-wrap   ">
        <SectionText
          title={text[language].servicosConsultas.titulo}
          desc1={text[language].servicosConsultas.desc1}
          desc2={text[language].servicosConsultas.desc2}
          desc3={text[language].servicosConsultas.desc3}
        />
      </section>
      <section className="flex  w-full  pt-8">
        <div className="flex flex-1 bg-muted  py-6 items-center justify-center">
          <h4 className="text-lg text-center font-bold px-8 md:px-24 max-w-screen-2xl">
            {text[language].servicosConsultas.desc4}
          </h4>
        </div>
      </section>
      <section className="flex  w-full max-w-screen-2xl  px-8 md:px-24 pt-8   ">
        <div className="flex flex-col sm:flex-row items-center justify-around flex-1 flex-wrap gap-y-6">
          <div className="flex flex-col flex-1">
            <h1 className="text-md font-bold italic">
              {text[language].servicosConsultas.sintomas.s1Titulo}
            </h1>
            <ul className="pl-8 mt-4 flex gap-y-2 flex-col self-start text-secondary leading-7">
              <li className="list-disc">
                <p className="text-md ">
                  {text[language].servicosConsultas.sintomas.s1desc1}
                </p>
              </li>
              <li className="list-disc">
                <p className="text-md">
                  {text[language].servicosConsultas.sintomas.s1desc2}
                </p>
              </li>
              <li className="list-disc">
                <p className="text-md">
                  {text[language].servicosConsultas.sintomas.s1desc3}
                </p>
              </li>
              <div className="pl-8 flex flex-col gap-y-2">
              <li className="list-disc">
                <p className="text-md">
                  {text[language].servicosConsultas.sintomas.s1desc4}
                </p>
              </li>
              <li className="list-disc">
                <p className="text-md">
                  {text[language].servicosConsultas.sintomas.s1desc5}
                </p>
              </li>
              <li className="list-disc">
                <p className="text-md">
                  {text[language].servicosConsultas.sintomas.s1desc6}
                </p>
              </li>
              <li className="list-disc">
                <p className="text-md">
                  {text[language].servicosConsultas.sintomas.s1desc7}
                </p>
              </li>
              </div>
              <li className="list-disc">
                <p className="text-md">
                  {text[language].servicosConsultas.sintomas.s1desc8}
                </p>
              </li>
              <li className="list-disc">
                <p className="text-md">
                  {text[language].servicosConsultas.sintomas.s1desc9}
                </p>
              </li>
              <li className="list-disc">
                <p className="text-md">
                  {text[language].servicosConsultas.sintomas.s1desc10}
                </p>
              </li>

            </ul>
          </div>
          <div className="flex flex-col flex-1 self-start">
            <h1 className="text-md font-bold italic">
              {text[language].servicosConsultas.sintomas.s2Titulo}
            </h1>
            <ul className="pl-8 mt-4 flex gap-y-2 flex-col text-secondary leading-7">
              <li className="list-disc">
                <p className="text-md">
                  {text[language].servicosConsultas.sintomas.s2desc1}
                </p>
              </li>
              <li className="list-disc">
                <p className="text-md">
                  {text[language].servicosConsultas.sintomas.s2desc2}
                </p>
              </li>
              <li className="list-disc">
                <p className="text-md">
                  {text[language].servicosConsultas.sintomas.s2desc3}
                </p>
              </li>
    

            </ul>
          </div>
        </div>

      </section>
      <section className="flex  w-full max-w-screen-2xl  px-8 md:px-24 py-8 flex-wrap items-center justify-center   ">
      <TogetherAction/>
      </section>
     
  {/*     <section className="flex  w-full  pt-8">
        <div className="flex flex-1 bg-muted flex-com py-6 items-center justify-center">
          <h4 className="text-lg text-center font-bold px-8 md:px-24 max-w-screen-xl">
            {text[language].servicosConsultas.desc5}
          </h4>
      
        </div>
      </section> */}
    </main>
  );
};

export default Consultas;
