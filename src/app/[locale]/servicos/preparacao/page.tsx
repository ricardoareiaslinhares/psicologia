import React from "react";
import text from "@/data/text.json";
import SectionText from "@/components/sections/SectionText";
import TogetherAction from "@/components/actionCall/Together";
import Image from "next/image";
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
      ? "Preparation for Psychological Assessment - Ricardo Linhares"
      : "Preparação para Avaliação Psicológica - Ricardo Linhares",
    description: isEn
      ? "Preparation for Psychological Assessment in Recruitment and Selection. Show your true potential in psychological evaluations."
      : "Preparação para Avaliação Psicológica em Recrutamento e Seleção. Mostre o seu verdadeiro potencial nas avaliações psicológicas.",
    alternates: {
      languages: {
        pt: "https://ricardolinharespsicologo.pt/servicos/preparacao",
        en: "https://ricardolinharespsicologo.pt/en/services/preparation",
      },
    },
  };
}

export default async function Preparacao({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const t = text[lang] || text.pt;

  return (
    <main className="flex flex-col items-center justify-start min-h-screen w-full z-0 overflow-hidden">
      <div className="flex w-full px-8 md:px-24 pt-8">
        <p className="text-left leading-8">
          <cite>
            &ldquo;{t.ServicosPreparacao.quote ? t.ServicosPreparacao.quote.replace(/[""]/g, "") : ""}&rdquo;
          </cite>
        </p>
      </div>
      <section className="flex w-full max-w-screen-2xl px-8 md:px-24 pt-8 flex-wrap">
        <div className="flex flex-1 flex-col md:flex-row gap-6 mb-6">
          <SectionText
            title={t.ServicosPreparacao.titulo}
            desc1={t.ServicosPreparacao.desc1}
            desc2={t.ServicosPreparacao.desc2}
          />
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/psicologiaTrabalhoAvaliacao.png"
            alt="Preparação para Avaliações Psicológicas imagem"
            className="w-[300px] h-[300px] flex self-center sm:self-start"
          />
        </div>
      </section>
      <section className="flex w-full pt-8">
        <div className="flex flex-1 bg-muted py-6 items-center justify-center">
          <h4 className="text-lg text-center font-bold px-8 md:px-24 max-w-screen-2xl">
            {t.ServicosPreparacao.desc3}
          </h4>
        </div>
      </section>
      <section className="flex w-full max-w-screen-2xl px-8 md:px-24 pt-8 flex-wrap">
        <SectionText
          desc1={t.ServicosPreparacao.desc4}
          desc2={t.ServicosPreparacao.desc5}
        />
      </section>
      <section className="flex w-full pt-8">
        <div className="flex flex-1 bg-muted py-6 items-center justify-center">
          <h4 className="text-lg text-center font-bold px-8 md:px-24 max-w-screen-2xl">
            {t.ServicosPreparacao.desc6}
          </h4>
        </div>
      </section>
      <section className="flex w-full max-w-screen-2xl px-8 md:px-24 py-8 flex-wrap items-center justify-center">
        <TogetherAction />
      </section>
    </main>
  );
}
