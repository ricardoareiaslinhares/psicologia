import SectionText from '@/components/sections/SectionText'
import React from 'react'
import refs from "@/data/refs.json"
type Props = {}

export default function Referencias({}: Props) {
  const references = refs.refs as { [key: string]: string };

  const RenderReferences = () => {
    const renderedReferences = [];

    for (let i = 0; i < 44; i++) {
      const iString = i.toString();
      renderedReferences.push(references[iString]);
    }

    return (
      <div className="flex flex-col gap-y-3">
        {renderedReferences.map((item, index) => {
          return <p className="text-md mt-2 text-secondary -indent-9" key={index}>{item}</p>;
        })}
      </div>
    );
  };

  RenderReferences();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between   w-fit z-0 ">
      <section className="flex flex-1 w-full max-w-screen-xl  px-8 md:px-24 pt-8 flex-col gap-6">
      <h1 className={`text-lg font-bold text-center sm:text-left `}>{refs.titulo}</h1> 
        <RenderReferences />
      </section>
    </main>
  );
}
