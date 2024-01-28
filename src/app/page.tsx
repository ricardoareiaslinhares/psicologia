import Hero from "@/components/hero/Hero";

import SectionText from "@/components/sections/SectionText";
import text from "@/data/text.json";
import CardMain from "@/components/cards/CardMain";
import Footer from "@/components/footer/Footer";
import ModalContacts2 from "@/components/modals/ModalContacts2";
import { Metadata } from "next";
import Head from "next/head";


export const metadata:Metadata = {
  robots:{
    index:true,
    follow:true,
    

  }
}

export default function Home() {
  let language = "pt" as keyof typeof text;

  



  return (
    <>
  <Head>
  <meta name="robots" content="all" />
  <meta name="robots" content="index, follow"/>
  </Head>
      <ModalContacts2  />

      <main className="flex min-h-screen flex-col items-center justify-between  w-screen z-0 ">
        <Hero />
        <section className="flex flex-1 w-full max-w-screen-2xl  px-8 md:px-24 pt-8 flex-col">
          <SectionText isH="h1" title={text[language].section1Title} />
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
              <SectionText isH="h2" title={"Serviços"} />
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
            <SectionText desc1={text[language].section2Part1} />
          </div>
          <div className="">
            <SectionText desc2={text[language].section2Part2} />
          </div>
        </section>
        <div className="flex items-center justify-center w-full  bg-muted mt-8 py-8">
          <div className=" max-w-screen-2xl px-2  sm:px-8 md:px-24   ">
           {/* ß */}
          </div>
        </div>

       
      </main>
    </>
  );
}
