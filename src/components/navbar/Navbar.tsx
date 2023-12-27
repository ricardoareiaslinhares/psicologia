import { LinkType, MyLinkType } from "@/types";
import Link from "next/link";
import React from "react";
import { language } from "@/utils/language";
import text from "@/data/text.json";


type Props = {
 
};

const Navbar = ({ }: Props) => {

  const myLinks: MyLinkType = [
    {
      link1: { name: "home", linkTo: "/" },
      link2: {
        name: text[language].navbar.sobre.title,
        link: [
          { name: text[language].navbar.sobre.link1, linkTo: "/sobre-mim-link1" },
          { name: text[language].navbar.sobre.link2, linkTo: "/sobre-mim-link2" },
        ],
      },
      link3: {
        name: text[language].navbar.servicos.title,
        link: [
          { name: text[language].navbar.servicos.link1, linkTo: "/servicos/consultas-psicologia-link1" },
          { name: text[language].navbar.servicos.link2, linkTo: "/servicos/consultas-psicologia-link2" },
        ],
      },
      link4: { name: text[language].navbar.blog, linkTo: "/blog" },
    },
  ];





  return (
    <div className="flex h-16 sticky top-0 left-0 bg-whiteRose flex-row w-full z-50 justify-between items-center px-8">
      <span className="flex">
        {/* Logo */}
        <h1 className="text-lg">Consultas de Psicologia Barcelos</h1>
      </span>
      <span className="flex gap-x-8">
        {/* Links */}
        <Link href={"/"}>link</Link>

      </span>
    </div>
  );
};

export default Navbar;
