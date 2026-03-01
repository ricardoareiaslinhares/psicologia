import Image from "next/image";
import Link from "next/link";
import React from "react";
import text from "@/data/text.json";
import { Locale, getLocalePath } from "@/i18n/config";

type Props = {
  locale: Locale;
};

const Logo = ({ locale }: Props) => {
  const t = text[locale] || text.pt;

  return (
    <Link href={getLocalePath(locale, "/")} className="flex items-center gap-x-5">
      <Image
        src="/Ricardo_Linhares_Psicologo_Psicologia_Barcelos_Online.png"
        width={128}
        height={40}
        alt="Ricardo Linhares Consultas de Psicologia Barcelos"
        className="w-auto h-auto"
      />
      <p className="text-lg font-bold hidden md:block">{t.logo.full}</p>
      <p className="text-lg font-bold hidden sm:block md:hidden">{t.logo.short}</p>
    </Link>
  );
};

export default Logo;
