import { language } from "@/utils/language";
import text from "@/data/text.json";

export type LinkType = {
  name: string;
  href?: string;
  link?: LinkType[];
};

const myLinks: LinkType[] = [

  { name: "home", href: "/" },

  {
    name: text[language].navbar.sobre.title, 
    link: [
      { name: text[language].navbar.sobre.link1, href: "/sobre-mim-link1" },
      { name: text[language].navbar.sobre.link2, href: "/sobre-mim-link2" },
    ]
  },

  {
    name: text[language].navbar.servicos.title,
    link: [
      { name: text[language].navbar.servicos.link1, href: "/servicos/consultas-psicologia-link1" }, 
      { name: text[language].navbar.servicos.link2, href: "/servicos/consultas-psicologia-link2" },
    ]
  },

  { name: text[language].navbar.blog, href: "/blog" },

]
;

type A = {
   v: number
}
let x : Array<number | string | A>

x = [3, "a", {v: 10}]
