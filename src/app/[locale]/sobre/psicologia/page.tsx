import SectionText from "@/components/sections/SectionText";
import text from "@/data/text.json";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
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
      ? "Clinical Psychology and Psychotherapy - Barcelos"
      : "Psicologia Clínica e Psicoterapia - Barcelos",
    description: isEn
      ? "Learn more about Clinical Psychology, Acceptance and Commitment Therapy (ACT) and the Unified Protocol (UP). Evidence-based approaches."
      : "Saiba mais sobre Psicologia Clínica, Terapia de Aceitação e Compromisso (ACT) e Protocolo Unificado (UP). Abordagens baseadas em evidência científica.",
    alternates: {
      languages: {
        pt: "https://ricardolinharespsicologo.pt/sobre/psicologia",
        en: "https://ricardolinharespsicologo.pt/en/about/psychology",
      },
    },
  };
}

const ComponentVideoACT = dynamic(
  () => import("@/components/videoPlayer/Player"),
  { ssr: false }
);
const ComponentVideoUP = dynamic(
  () => import("@/components/videoPlayer/Player"),
  { ssr: false }
);

export default async function Psicologia({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const t = text[lang] || text.pt;

  const boldTag = (
    <>
      {t.sobrePsicologia.desc1}
      <strong className="font-bold"> {t.sobrePsicologia.desc2}</strong>
    </>
  );

  const referencesTag = (
    <Link
      className="cursor-pointer underline"
      href={getLocalePath(lang, "/referencias")}
      target="_blank"
    >
      {t.sobrePsicologia.refs}
    </Link>
  );

  const url = [
    "https://www.youtube.com/watch?v=jt5uylY5JUI",
    "https://www.youtube.com/watch?v=OMM5tVZ78OI",
  ];

  return (
    <main className="flex min-h-screen flex-col items-start justify-start w-fit max-w-screen-2xl z-0">
      <div className="flex w-full px-8 md:px-24 pt-8">
        <p className="text-left leading-8">
          <cite>
            &ldquo;{t.sobrePsicologia.quote ? t.sobrePsicologia.quote.replace(/[""]/g, "") : ""}&rdquo;
          </cite>
        </p>
      </div>
      <section className="flex w-full px-8 md:px-24 pt-8 flex-col gap-6">
        <div className="flex flex-1 flex-col md:flex-row gap-6 mb-6">
          <SectionText
            title={t.sobrePsicologia.titulo}
            desc1={boldTag}
            desc2={t.sobrePsicologia.desc3}
          />
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/psicologia.jpeg"
            alt="Flexibilidade Psicologica imagem"
            className="w-[300px] h-[300px] flex self-center sm:self-start"
          />
        </div>
        <SectionText
          desc1={t.sobrePsicologia.desc4}
          desc2={t.sobrePsicologia.desc5}
          desc3={t.sobrePsicologia.desc6}
          desc4={t.sobrePsicologia.desc7}
          desc5={t.sobrePsicologia.desc8}
          desc6={t.sobrePsicologia.desc9}
          desc7={referencesTag}
        />
        <div className="flex flex-col lg:px-6">
          <div className="flex flex-col md:flex-row gap-x-11 items-center justify-center">
            <SectionText
              title={
                lang === "en"
                  ? "Unified Protocol (UP)"
                  : "Protocolo Unificado (UP)"
              }
              desc1={t.sobrePsicologia.pu}
            />
            <ComponentVideoUP url={url[0]} />
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-x-11 gap-y-6 items-center justify-center">
            <ComponentVideoACT url={url[1]} />
            <SectionText
              title={
                lang === "en"
                  ? "Acceptance and Commitment Therapy (ACT)"
                  : "Terapia de Aceitação e Compromisso (ACT)"
              }
              desc1={t.sobrePsicologia.act}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
