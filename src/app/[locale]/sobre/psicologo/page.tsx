import SectionText from "@/components/sections/SectionText";
import text from "@/data/text.json";
import Link from "next/link";
import Carrosel from "@/components/carrosel/Carrosel";
import { Metadata } from "next";
import { Locale, getLocalePath } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn
      ? "Psychologist Ricardo Linhares - Psychology Barcelos"
      : "Psicólogo Ricardo Linhares - Psicologia Barcelos",
    description: isEn
      ? "Meet Psychologist Ricardo Linhares. Clinical Psychology and Psychotherapy in Barcelos with training in Acceptance and Commitment Therapy and the Unified Protocol."
      : "Conheça o Psicólogo Ricardo Linhares. Psicologia Clínica e Psicoterapia em Barcelos com formação em Terapia de Aceitação e Compromisso e Protocolo Unificado.",
    alternates: {
      languages: {
        pt: "https://ricardolinharespsicologo.pt/sobre/psicologo",
        en: "https://ricardolinharespsicologo.pt/en/about/psychologist",
      },
    },
  };
}

export default async function Psicologo({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const t = text[lang] || text.pt;

  const imagensCorrossel = [
    "/Ricardo_Linhares_Psicologo3.png",
    "/Ricardo_Linhares_Psicologo_2.png",
    "/Ricardo_Linhares_Psicologo.png",
  ];

  const aTag = (
    <Link
      className="cursor-pointer underline"
      href="https://congreso-xvgp.asocip.com/images/programa/Libro_resumenes_Simposios.pdf#page=89"
      target="_blank"
    >
      {lang === "en" ? "(such as burnout)" : "(como o burnout)"}
    </Link>
  );
  const aTag2 = (
    <Link
      className="cursor-pointer underline"
      href={getLocalePath(lang, "/sobre/psicologia")}
      target="_blank"
    >
      {lang === "en"
        ? "Acceptance and Commitment Therapy and the Unified Protocol"
        : "Terapia de Aceitação e Compromisso e o Protocolo Unificado"}
    </Link>
  );

  const desc3Content =
    lang === "en" ? (
      <>
        I began my career in the Organizational field, where I conducted
        numerous recruitment and selection interviews, professional profile
        analyses, and studied the impact of psychosocial risks {aTag} on
        people&apos;s personal and professional lives.
      </>
    ) : (
      <>
        Iniciei a minha carreira na área das Organizações, onde efetuei diversas
        entrevistas de recrutamento e seleção, análises de perfis profissionais e
        estudei o impacto de riscos psicossociais {aTag} na vida pessoal e
        profissional das pessoas.
      </>
    );

  const desc6Content =
    lang === "en" ? (
      <>
        As a method of psychological intervention, I use two of the most current
        and important psychological models in recent years: {aTag2} (the
        unification of different variants of Cognitive-Behavioural Therapy), with
        extensive specific training in these approaches.
      </>
    ) : (
      <>
        Como método de intervenção psicológica utilizo dois dos modelos
        psicológicos mais atuais e mais importantes nos últimos anos: {aTag2} (a
        unificação de diferentes variantes da Terapia
        Cognitiva-Comportamental), tendo extensa formação específica nestas
        abordagens.
      </>
    );

  return (
    <main className="flex flex-col items-sart justify-start min-h-screen max-w-screen-2xl w-fit z-0 overflow-hidden">
      <div className="flex w-full px-8 md:px-24 pt-8">
        <p className="text-left leading-8">
          <cite>&ldquo;{t.sobrePsicologo.quote ? t.sobrePsicologo.quote.replace(/[""]/g, "") : ""}&rdquo;</cite>
        </p>
      </div>
      <section className="flex items-center justify-center flex-col pt-8">
        <div className="flex w-full px-8 md:px-24 flex-row gap-6 flex-wrap lg:flex-nowrap pb-10 items-center justify-center">
          <div className="flex flex-col flex-wrap">
            <SectionText
              title={t.sobrePsicologo.titulo}
              desc1={t.sobrePsicologo.desc1}
              desc2={t.sobrePsicologo.desc2}
              desc3={desc3Content}
              desc4={t.sobrePsicologo.desc4}
              desc5={t.sobrePsicologo.desc5}
              desc6={desc6Content}
            />
          </div>
          <div className="sm:mx-0 sm:ml-6 sm:mt-12 flex items-center md:items-start justify-center">
            <Carrosel listItens={imagensCorrossel} />
          </div>
        </div>
      </section>
    </main>
  );
}
