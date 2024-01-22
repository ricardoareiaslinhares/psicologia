import Hero from "@/components/hero/Hero";

import SectionText from "@/components/sections/SectionText";
import Image from "next/image";
import text from "@/data/text.json";
import CardMain from "@/components/cards/CardMain";
import Footer from "@/components/footer/Footer";
import FooterCredits from "@/components/footer/FooterCredits";
import ModalContacts2 from "@/components/modals/ModalContacts2";

export default function Home() {
  let language = "pt" as keyof typeof text;

  async function onClose() {
    "use server";
    //console.log("modal as closed");
  }

  return (
    <>
      <ModalContacts2 onClose={onClose} />

      <main className="flex min-h-screen flex-col items-center justify-between  w-fit z-0 ">
        <Hero />
        <section className="flex flex-1 w-full max-w-screen-2xl  px-8 md:px-24 pt-8 flex-col">
          <SectionText title={text[language].section1Title} />
          <div className="flex flex-1 gap-x-10 items-center justify-center gap-y-4 flex-row flex-wrap ">
            <div>
              <SectionText desc1={text[language].section1Desc1} />
            </div>
            <div>
              <SectionText desc1={text[language].section1Desc2} />
            </div>
          </div>
        </section>
        <section className="flex flex-1 flex-row w-full pt-8 max-w-screen-2xl   ">
          <div className="flex flex-1  py-8 pb-16 px-8 md:px-24 flex-col ">
            <div className="mb-8">
              <SectionText title={"Serviços"} />
            </div>
            <span className="flex flex-1 flex-wrap lg:flex-nowrap gap-16 justify-center items-center px-3 sm:px-12  ">
              <CardMain
                title={text[language].card1Title}
                desc={text[language].card1Desc}
                link="/servicos/consultas"
                imageUrl="/saude.png"
              />

              <CardMain
                title={text[language].card2Title}
                desc={text[language].card2Desc}
                link="servicos/preparacao"
                imageUrl="/rh.png"
              />
            </span>
          </div>
        </section>
        <section className="flex flex-1  max-w-screen-2xl  px-8 pb-4 md:px-24 gap-x-8 gap-y-2 items-start justify-start flex-col sm:flex-row">
          <div className="pt-2">
            <SectionText isColum={true} desc1={text[language].section2Part1} />
          </div>
          <div className="">
            <SectionText isColum={true} desc2={text[language].section2Part2} />
          </div>
        </section>
        <span className="max-w-screen-2xl w-full px-2  sm:px-8 md:px-24 bg-muted mt-8 py-8  ">
          <Footer />
        </span>

        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
      </main>
    </>
  );
}
