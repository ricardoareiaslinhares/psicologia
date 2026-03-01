import SectionText from "@/components/sections/SectionText";
import React from "react";
import refs from "@/data/refs.json";
import { Metadata } from "next";
import { Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn ? "References" : "Referências",
    description: isEn
      ? "Scientific references for the psychology approaches used."
      : "Referências científicas das abordagens psicológicas utilizadas.",
    alternates: {
      languages: {
        pt: "https://ricardolinharespsicologo.pt/referencias",
        en: "https://ricardolinharespsicologo.pt/en/references",
      },
    },
  };
}

export default async function Referencias({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const references = refs.refs as { [key: string]: string };
  const referencesPersonalidade = refs.refs2 as { [key: string]: string };

  const RenderReferences = () => {
    const renderedReferences = [];
    for (let i = 0; i < 44; i++) {
      const iString = i.toString();
      renderedReferences.push(references[iString]);
    }
    return (
      <div className="flex flex-col gap-y-3 px-4">
        {renderedReferences.map((item, index) => (
          <p
            className="text-base mt-2 text-secondary -indent-9 whitespace-normal break-words"
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
    );
  };

  const RenderReferencesPersonalidade = () => {
    const renderedReferences = [];
    for (let i = 0; i < 4; i++) {
      const iString = i.toString();
      renderedReferences.push(referencesPersonalidade[iString]);
    }
    return (
      <div className="flex flex-col gap-y-3 px-4">
        {renderedReferences.map((item, index) => (
          <p
            className="text-base mt-2 text-secondary -indent-9 whitespace-normal break-words"
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
    );
  };

  return (
    <main className="flex flex-col items-center justify-between w-screen max-w-screen-2xl z-0 overflow-hidden pb-8">
      <section className="flex w-full max-w-screen-xl px-8 md:px-24 pt-8 flex-col gap-6">
        <h1 className="text-lg font-bold text-center sm:text-left">
          {refs.titulo}
        </h1>
        <RenderReferences />
      </section>
      <section className="flex w-full max-w-screen-xl px-8 md:px-24 pt-8 flex-col gap-6">
        <h2 className="text-lg font-bold text-center sm:text-left">
          {refs.tituloBlogPersonalidade}
        </h2>
        <RenderReferencesPersonalidade />
      </section>
    </main>
  );
}
