import Hero from "@/components/hero/Hero";
import SectionText from "@/components/sections/SectionText";
import text from "@/data/text.json";
import ServiceFeature from "@/components/cards/ServiceFeature";
import Footer from "@/components/footer/Footer";
import ModalContacts2 from "@/components/modals/ModalContacts2";
import { Metadata } from "next";
import { Locale, getLocalePath } from "@/i18n/config";

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true },
  },
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const t = text[lang] || text.pt;

  const highlights =
    lang === "en"
      ? ["Depression", "Anxiety", "Panic", "Stress", "Burnout", "OCD"]
      : ["Depressão", "Ansiedade", "Pânico", "Stresse", "Burnout", "OCD"];

  return (
    <>
      <ModalContacts2 locale={lang} />
      <main className="flex min-h-screen flex-col items-center justify-between w-screen z-0">
        <Hero locale={lang} />
        <section className="flex flex-1 w-full max-w-screen-2xl px-8 md:px-24 pt-8 flex-col">
          <SectionText isH="h1" title={t.section1Title} />
          <div className="flex flex-1 gap-x-10 items-center justify-center gap-y-4 flex-row flex-wrap">
            <div>
              <SectionText desc1={t.section1Desc1} />
            </div>
            <div>
              <SectionText desc1={t.section1Desc2} />
            </div>
          </div>
        </section>
        <section className="flex flex-1 flex-row w-full pt-8 max-w-screen-2xl">
          <div className="flex flex-1 py-8 pb-16 px-8 md:px-24 flex-col">
            <div className="mb-8">
              <SectionText isH="h2" title={t.services} />
            </div>
            <ServiceFeature
              title={t.card1Title}
              desc={t.card1Desc}
              link={getLocalePath(lang, "/servicos/consultas")}
              imageUrl="/saude.png"
              highlights={highlights}
              learnMore={t.learnMore}
            />
          </div>
        </section>
        <section className="flex flex-1 max-w-screen-2xl px-8 pb-4 md:px-24 gap-x-8 gap-y-2 items-start justify-start flex-col sm:flex-row">
          <div className="pt-2">
            <SectionText desc1={t.section2Part1} />
          </div>
          <div>
            <SectionText desc2={t.section2Part2} />
          </div>
        </section>
        <div className="flex items-center justify-center w-full bg-muted mt-8 py-8">
          <div className="max-w-screen-2xl px-2 sm:px-8 md:px-24">
            <Footer locale={lang} />
          </div>
        </div>
      </main>
    </>
  );
}
