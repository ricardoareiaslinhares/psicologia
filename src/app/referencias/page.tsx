import SectionText from '@/components/sections/SectionText'
import React from 'react'
import refs from "@/data/refs.json"
type Props = {}

export default function Referencias({}: Props) {
  const references = refs.refs as { [key: string]: string };
  const referencesPersonalidade = refs.refs2 as { [key: string]: string };


  const RenderReferences = () => {
    const renderedReferences = [];

    for (let i = 0; i < 44; i++) {
      const iString = i.toString();
      renderedReferences.push(references[iString]);
    }

    return (
      <div className="flex flex-col gap-y-3 px-4 ">
        {renderedReferences.map((item, index) => {
          return <p className="text-md mt-2 text-secondary -indent-9 whitespace-normal break-words" key={index}>{item}</p>;
        })}
      </div>
    );
  };

  const RenderReferencesPersonalidade = () => {
    const renderedReferences = [];

    for (let i = 0; i < 4; i++) {
      const iString = i.toString();
      renderedReferences.push(referencesPersonalidade[iString]);
    }
    console.log(renderedReferences)
    return (
      <div className="flex flex-col gap-y-3 px-4 ">
        {renderedReferences.map((item, index) => {
     
          return <p className="text-md mt-2 text-secondary -indent-9 whitespace-normal break-words" key={index}>{item}</p>;
        })}
      </div>
    );
  };


  return (
    <main className="flex  flex-col items-center justify-between   w-screen max-w-screen-2xl z-0 overflow-hidden pb-8 ">
      <section className="flex  w-full max-w-screen-xl px-8 md:px-24 pt-8 flex-col gap-6">
      <h1 className={`text-lg font-bold text-center sm:text-left `}>{refs.titulo}</h1> 
        <RenderReferences />
      </section>
      <section className="flex  w-full max-w-screen-xl px-8 md:px-24 pt-8 flex-col gap-6">
      <h1 className={`text-lg font-bold text-center sm:text-left `}>{refs.tituloBlogPersonalidade}</h1> 
        <RenderReferencesPersonalidade />
      </section>
    </main>
  );
}
