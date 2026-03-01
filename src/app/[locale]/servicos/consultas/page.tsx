import SectionText from "@/components/sections/SectionText";
import React from "react";
import text from "@/data/text.json";
import TogetherAction from "@/components/actionCall/Together";
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
    title: isEn
      ? "Psychology Consultations in Barcelos - Ricardo Linhares"
      : "Consultas de Psicologia em Barcelos - Ricardo Linhares",
    description: isEn
      ? "Clinical Psychology and Psychotherapy consultations in Barcelos. Treatment of anxiety, depression, panic and other psychological problems."
      : "Consultas de Psicologia Clínica e Psicoterapia em Barcelos. Tratamento de ansiedade, depressão, pânico e outros problemas psicológicos.",
    alternates: {
      languages: {
        pt: "https://ricardolinharespsicologo.pt/servicos/consultas",
        en: "https://ricardolinharespsicologo.pt/en/services/consultations",
      },
    },
  };
}

export default async function Consultas({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const t = text[lang] || text.pt;

  return (
    <main className="flex flex-col min-h-screen items-center justify-start w-full z-0 overflow-hidden">
      <div className="flex w-full px-8 md:px-24 pt-8">
        <p className="text-left leading-8">
          <cite>
            &ldquo;{t.servicosConsultas.quote ? t.servicosConsultas.quote.replace(/[""]/g, "") : ""}&rdquo;
          </cite>
        </p>
      </div>
      <section className="flex w-full max-w-screen-2xl px-8 md:px-24 pt-8 flex-wrap">
        <SectionText
          title={t.servicosConsultas.titulo}
          desc1={t.servicosConsultas.desc1}
          desc2={t.servicosConsultas.desc2}
          desc3={t.servicosConsultas.desc3}
        />
      </section>
      <section className="flex w-full pt-8">
        <div className="flex flex-1 bg-muted py-6 items-center justify-center">
          <h4 className="text-lg text-center font-bold px-8 md:px-24 max-w-screen-2xl">
            {t.servicosConsultas.desc4}
          </h4>
        </div>
      </section>
      <section className="flex w-full max-w-screen-2xl px-8 md:px-24 pt-8">
        <div className="flex flex-col sm:flex-row items-center justify-around flex-1 flex-wrap gap-y-6">
          <div className="flex flex-col flex-1">
            <h2 className="text-base font-bold italic">
              {t.servicosConsultas.sintomas.s1Titulo}
            </h2>
            <ul className="pl-8 mt-4 flex gap-y-2 flex-col self-start text-secondary leading-7">
              <li className="list-disc">
                <p className="text-base">{t.servicosConsultas.sintomas.s1desc1}</p>
              </li>
              <li className="list-disc">
                <p className="text-base">{t.servicosConsultas.sintomas.s1desc2}</p>
              </li>
              <li className="list-disc">
                <p className="text-base">{t.servicosConsultas.sintomas.s1desc3}</p>
              </li>
              <div className="pl-8 flex flex-col gap-y-2">
                <li className="list-disc">
                  <p className="text-base">{t.servicosConsultas.sintomas.s1desc4}</p>
                </li>
                <li className="list-disc">
                  <p className="text-base">{t.servicosConsultas.sintomas.s1desc5}</p>
                </li>
                <li className="list-disc">
                  <p className="text-base">{t.servicosConsultas.sintomas.s1desc6}</p>
                </li>
                <li className="list-disc">
                  <p className="text-base">{t.servicosConsultas.sintomas.s1desc7}</p>
                </li>
              </div>
              <li className="list-disc">
                <p className="text-base">{t.servicosConsultas.sintomas.s1desc8}</p>
              </li>
              <li className="list-disc">
                <p className="text-base">{t.servicosConsultas.sintomas.s1desc9}</p>
              </li>
              <li className="list-disc">
                <p className="text-base">{t.servicosConsultas.sintomas.s1desc10}</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col flex-1 self-start">
            <h2 className="text-base font-bold italic">
              {t.servicosConsultas.sintomas.s2Titulo}
            </h2>
            <ul className="pl-8 mt-4 flex gap-y-2 flex-col text-secondary leading-7">
              <li className="list-disc">
                <p className="text-base">{t.servicosConsultas.sintomas.s2desc1}</p>
              </li>
              <li className="list-disc">
                <p className="text-base">{t.servicosConsultas.sintomas.s2desc2}</p>
              </li>
              <li className="list-disc">
                <p className="text-base">{t.servicosConsultas.sintomas.s2desc3}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex w-full max-w-screen-2xl px-8 md:px-24 py-8 flex-wrap items-center justify-center">
        <TogetherAction />
      </section>
    </main>
  );
}
