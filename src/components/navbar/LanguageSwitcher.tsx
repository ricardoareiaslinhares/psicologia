"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale, getAlternatePath } from "@/i18n/config";

type Props = {
  locale: Locale;
};

export default function LanguageSwitcher({ locale }: Props) {
  const pathname = usePathname();
  const targetLocale: Locale = locale === "pt" ? "en" : "pt";
  const targetPath = getAlternatePath(pathname, targetLocale);

  return (
    <Link
      href={targetPath}
      className="flex items-center justify-center px-2 py-1 text-sm font-medium rounded-md border border-foreground/20 hover:bg-muted transition-colors"
      aria-label={locale === "pt" ? "Switch to English" : "Mudar para Português"}
    >
      {targetLocale.toUpperCase()}
    </Link>
  );
}
