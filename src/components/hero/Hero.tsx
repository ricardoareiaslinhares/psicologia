import React from "react";
import Image from "next/image";
import text from "@/data/text.json";
import { Locale } from "@/i18n/config";

type Props = {
  locale: Locale;
};

const Hero = ({ locale }: Props) => {
  const t = text[locale] || text.pt;

  return (
    <div className="relative flex w-full min-h-[22rem] sm:min-h-[26rem] overflow-hidden">
      <Image
        width={0}
        height={0}
        priority={true}
        sizes="100vw"
        src="/Consultas_Psicologia_Barcelos_Ricardo_Linhares_Psicologo.jpg"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 md:px-24 py-12 max-w-screen-2xl self-center w-full gap-6">
        <h1 className="text-2xl sm:text-5xl font-bold tracking-tight text-center">
          {t.hero.title}
        </h1>
        <div className="flex items-center gap-3">
          <span className="hidden sm:block w-12 h-px bg-foreground/40" />
          <p className="text-base sm:text-lg italic text-center text-foreground/70">
            &ldquo;{t.hero.quote}&rdquo;
          </p>
          <span className="hidden sm:block w-12 h-px bg-foreground/40" />
        </div>
        <div className="flex flex-wrap gap-3 justify-center mt-2">
          <span className="rounded-full border border-foreground/20 bg-background/60 px-5 py-2 text-sm sm:text-base font-medium backdrop-blur-sm">
            {t.hero.service1}
          </span>
          <span className="rounded-full border border-foreground/20 bg-background/60 px-5 py-2 text-sm sm:text-base font-medium backdrop-blur-sm">
            {t.hero.service2}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
