
import SectionText from "@/components/sections/SectionText";
import { language } from "@/utils/language";
import text from "@/data/text.json";
import Link from "next/link";
import Carrosel from "@/components/carrosel/Carrosel";

type Props = {};

const Psicologo = ({}: Props) => {
const imagensCorrossel = ["/Ricardo_Linhares Psicologo_2.png", "/Ricardo_Linhares Psicologo_2.png"]

  const aTag = (
    <Link
      className="cursor-pointer underline"
      href="https://congreso-xvgp.asocip.com/images/programa/Libro_resumenes_Simposios.pdf#page=89"
      target='_blank"'
    >
      (como o burnout)
    </Link>
  );
  const aTag2 = (
    <Link
      className="cursor-pointer underline"
      href="/sobre/psicologia"
      target='_blank"'
    >
      Terapia de Aceitação e Compromisso e o Protocolo Unificado
    </Link>
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between   w-fit z-0 overflow-hidden ">
      <section className="flex flex-1 w-full max-w-screen-xl  px-8 md:px-24 pt-8 flex-row gap-6 flex-wrap lg:flex-nowrap py-10 items-center justify-center">
        <div className="flex flex-col flex-wrap px-9">
          <SectionText
            title={text[language].sobrePsicologo.titulo}
            desc1={text[language].sobrePsicologo.desc1}
            desc2={text[language].sobrePsicologo.desc2}
            desc3={
              <>
                Iniciei a minha carreira na área das Organizações, onde efetuei
                diversas entrevistas de recrutamento e seleção, análises de 
                perfis profissionais e estudei o impacto de riscos psicossociais{" "}
                {aTag} na vida pessoal e profissional das pessoas.
              </>
            }
            desc4={text[language].sobrePsicologo.desc4}
            desc5={text[language].sobrePsicologo.desc5}
            desc6={
              <>
                Como método de intervenção psicológica utilizo dois dos modelos
                psicológicos mais atuais e mais importantes nos últimos anos:{" "} 
                {aTag2} (a unificação de diferentes variantes da Terapia
                Cognitiva-Comportamental), tendo extensa formação específica
                nestas abordagens.
              </>
            }
          />
        </div>
        <div className="  mx-10 sm:mx-0 sm:ml-6 sm:mt-12  flex items-start justify-center">
          <div className="px-14" >

          <Carrosel listItens={imagensCorrossel} />
          </div>

        </div>
      </section>
    </main>
  );
};

export default Psicologo;
