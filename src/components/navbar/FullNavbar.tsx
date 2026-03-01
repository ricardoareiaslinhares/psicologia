import React from "react";
import NavbarShad from "./NavbarShad";
import Logo from "./Logo";
import { Drawer } from "./Drawer";
import text from "@/data/text.json";
import { LinkType } from "@/types";
import { Locale, getLocalePath } from "@/i18n/config";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = {
  locale: Locale;
};

const FullNavbar = ({ locale }: Props) => {
  const t = text[locale];

  const myLinks: LinkType[] = [
    { name: t.navbar.home, href: getLocalePath(locale, "/") },
    {
      name: t.navbar.sobre.title,
      link: [
        {
          name: t.navbar.sobre.link1,
          href: getLocalePath(locale, "/sobre/psicologo"),
        },
        {
          name: t.navbar.sobre.link2,
          href: getLocalePath(locale, "/sobre/psicologia"),
        },
      ],
    },
    {
      name: t.navbar.servicos.title,
      link: [
        {
          name: t.navbar.servicos.link1,
          href: getLocalePath(locale, "/servicos/consultas"),
        },
      ],
    },
    { name: t.navbar.blog, href: getLocalePath(locale, "/blog") },
  ];

  return (
    <nav className="flex h-16 sticky top-0 left-0 flex-row w-full z-50 justify-between items-center px-8 bg-background/90 backdrop-blur-sm shadow-sm">
      <Logo locale={locale} />
      <span className="flex items-center gap-2">
        <NavbarShad myLinks={myLinks} />
        <LanguageSwitcher locale={locale} />
        <Drawer myLinks={myLinks} locale={locale} />
      </span>
    </nav>
  );
};

export default FullNavbar;
