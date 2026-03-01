import Hero from "@/components/hero/Hero";
import SectionText from "@/components/sections/SectionText";
import text from "@/data/text.json";
import ServiceFeature from "@/components/cards/ServiceFeature";
import AppPromo from "@/components/cards/AppPromo";
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
      <main className="flex min-h-screen flex-col items-center w-screen z-0">
        <Hero locale={lang} />

        {/* Section 1 — How sessions work */}
        <section className="w-full bg-background">
          <div className="max-w-screen-2xl mx-auto px-8 md:px-24 py-16">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-10">
              {t.section1Title}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <p className="text-base text-secondary leading-7">
                {t.section1Desc1}
              </p>
              <p className="text-base text-secondary leading-7">
                {t.section1Desc2}
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — Services */}
        <section className="w-full bg-muted/50">
          <div className="max-w-screen-2xl mx-auto px-8 md:px-24 py-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
              {t.services}
            </h2>
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

        {/* Section — App promo */}
        <section className="w-full bg-background">
          <div className="max-w-screen-2xl mx-auto px-8 md:px-24 py-16">
            <AppPromo
              title={t.app.title}
              subtitle={t.app.subtitle}
              desc={t.app.desc}
              cta={t.app.cta}
              badge={t.app.badge}
              image={t.app.image}
            />
          </div>
        </section>

        {/* Section 3 — Educational content */}
        <section className="w-full bg-background">
          <div className="max-w-screen-2xl mx-auto px-8 md:px-24 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <p className="text-base text-secondary leading-7">
                {t.section2Part1}
              </p>
              <p className="text-base text-secondary leading-7">
                {t.section2Part2}
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="flex items-center justify-center w-full bg-muted py-8">
          <div className="max-w-screen-2xl px-2 sm:px-8 md:px-24">
            <Footer locale={lang} />
          </div>
        </div>
      </main>
    </>
  );
}
