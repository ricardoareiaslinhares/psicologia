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

  const burnoutLink = (
    <Link
      className="cursor-pointer underline"
      href="https://congreso-xvgp.asocip.com/images/programa/Libro_resumenes_Simposios.pdf#page=89"
      target="_blank"
    >
      burnout
    </Link>
  );
  const actLink = (
    <Link
      className="cursor-pointer underline"
      href={getLocalePath(lang, "/sobre/psicologia")}
      target="_blank"
    >
      {lang === "en"
        ? "Acceptance and Commitment Therapy (ACT)"
        : "Terapia de Aceitação e Compromisso (ACT)"}
    </Link>
  );

  const desc2Content =
    lang === "en" ? (
      <>
        I started my career in Organizational Psychology — conducting recruitment
        interviews, building professional profiles, and studying how things like{" "}
        {burnoutLink} quietly erode people&apos;s personal and professional lives.
        That work kept leading me to the same place: the individual behind the job
        title, and what they were actually going through.
      </>
    ) : (
      <>
        Iniciei a minha carreira em Psicologia das Organizações — a realizar
        entrevistas de recrutamento, a construir perfis profissionais e a estudar
        como questões como o {burnoutLink} corroem silenciosamente a vida pessoal
        e profissional das pessoas. Esse trabalho levava-me sempre ao mesmo lugar:
        a pessoa por detrás do cargo, e aquilo que realmente estava a atravessar.
      </>
    );

  const desc4Content =
    lang === "en" ? (
      <>
        My approach is built on {actLink} — a modern framework based on a simple
        idea: emotions aren&apos;t the enemy. Fighting against difficult thoughts
        and feelings often makes them louder. The real work is learning to carry
        what&apos;s hard while still moving toward what matters to you. I also draw
        from the Unified Protocol, which brings together the most effective tools
        from cognitive-behavioural therapy into a single, flexible approach.
      </>
    ) : (
      <>
        A minha abordagem assenta na {actLink} — um modelo moderno baseado numa
        ideia simples: as emoções não são o inimigo. Combater pensamentos e sentimentos
        difíceis muitas vezes torna-os mais intensos. O verdadeiro trabalho é
        aprender a carregar o que é difícil enquanto continuamos a caminhar em
        direção ao que nos importa. Também utilizo o Protocolo Unificado, que
        reúne as ferramentas mais eficazes da terapia cognitivo-comportamental
        numa abordagem única e flexível.
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
              desc2={desc2Content}
              desc3={t.sobrePsicologo.desc3}
              desc4={desc4Content}
              desc5={t.sobrePsicologo.desc5}
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
