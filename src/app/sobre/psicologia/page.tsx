import SectionText from "@/components/sections/SectionText";
import { language } from "@/utils/language";
import text from "@/data/text.json";
import Link from "next/link";
import Carrosel from "@/components/carrosel/Carrosel";
import Image from "next/image";
import Player from "@/components/videoPlayer/Player";
import dynamic from "next/dynamic";

type Props = {};
const ComponentVideoACT = dynamic(
  () => import("@/components/videoPlayer/Player"),
  { ssr: false }
);
const ComponentVideoUP = dynamic(
  () => import("@/components/videoPlayer/Player"),
  { ssr: false }
);
const Psicologia = ({}: Props) => {
  const boldTag = (
    <>
      {text[language].sobrePsicologia.desc1}
      <strong className="font-bold">
       {" "} {text[language].sobrePsicologia.desc2}
      </strong>
    </>
  );

  const referencesTag = (
    <Link
      className="cursor-pointer underline"
      href="/referencias"
      target='_blank"'
    >
      {text[language].sobrePsicologia.refs}
    </Link>
  );
  const url = [
    "https://www.youtube.com/watch?v=jt5uylY5JUI",
    "https://www.youtube.com/watch?v=OMM5tVZ78OI",
  ];
  return (
    <main className="flex min-h-screen flex-col items-start justify-start  w-fit max-w-screen-xl z-0 ">
      <section className="flex  w-full max-w-screen-2xl  px-8 md:px-24 pt-8 flex-col gap-6  ">
        <div className="flex flex-1 flex-col md:flex-row gap-6 mb-6 ">
          <SectionText
            title={text[language].sobrePsicologia.titulo}
            desc1={boldTag}
            desc2={text[language].sobrePsicologia.desc3}
          />

          <img
            src={"/psicologia.jpeg"}
            alt="Flexibilidade Psicologica imagem"
            className=" w-[300px] h-[300px] bg-red-800 flex self-start"
          />
        </div>
        <SectionText
          desc1={text[language].sobrePsicologia.desc4}
          desc2={text[language].sobrePsicologia.desc5}
          desc3={text[language].sobrePsicologia.desc6}
          desc4={text[language].sobrePsicologia.desc7}
          desc5={text[language].sobrePsicologia.desc8}
          desc6={text[language].sobrePsicologia.desc9}
          desc7={referencesTag}
        />
        <div className="flex flex-col lg:px-6 ">

    
        <div className="flex flex-col md:flex-row gap-x-11  items-center justify-center ">
    
            <SectionText title="Protocolo Unificado (UP)" desc1={text[language].sobrePsicologia.pu} />
       
            <ComponentVideoUP url={url[0]} />
    
        </div>
        <div className="flex flex-col md:flex-row gap-x-11 gap-y-6 items-center justify-center ">

          <ComponentVideoACT url={url[1]} />

            <SectionText title="Terapia de Aceitação e Compromisso (ACT)" desc1={text[language].sobrePsicologia.act} />
 
        </div>
        </div>
      </section>
    </main>
  );
};

export default Psicologia;
