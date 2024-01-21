import React from 'react'
import NavbarShad from './NavbarShad'
import Logo from './Logo'
import { Drawer } from './Drawer'
import { language } from "@/utils/language";
import text from "@/data/text.json";
import { LinkType } from '@/types';

type Props = {}

const FullNavbar = ({}: Props) => {

  const myLinks: LinkType[] = [
    { name: "Inicial", href: "/" },

    {
      name: text[language].navbar.sobre.title,
      link: [
        { name: text[language].navbar.sobre.link1, href: "/sobre/psicologo" },
        { name: text[language].navbar.sobre.link2, href: "/sobre/psicologia" },
      ],
    },

    {
      name: text[language].navbar.servicos.title,
      link: [
        {
          name: text[language].navbar.servicos.link1,
          href: "/servicos/consultas",
        },
        {
          name: text[language].navbar.servicos.link2,
          href: "/servicos/preparacao",
        },
      ],
    },

    { name: text[language].navbar.blog, href: "/blog" },
  ];

  return (
    <nav className="flex h-16 sticky top-0 left-0 flex-row w-full z-50 justify-between items-center px-8 bg-background/90 backdrop-blur-sm shadow-sm">
        <Logo/>
        <span>

        <NavbarShad myLinks={myLinks}/>
        <Drawer  myLinks={myLinks}/>
        </span>
    </nav>
  )
}

export default FullNavbar