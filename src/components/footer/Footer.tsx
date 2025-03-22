"use client";
import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import Form from "../contact/Form";
import { Button } from "../ui/button";
import MapGoogle from "../maps/MapGoogle";
import Info from "../info/Info";
import { Separator } from "../ui/separator";

import TogetherAction from "../actionCall/Together";
const Player = lazy(() => import("../videoPlayer/Player"));

type Props = {};

const Footer = ({}: Props) => {
  const [buttonShow, setButtonShow] = useState<number>(2);
  const [containerHeight, setContainerHeight] = useState(490);

  useEffect(() => {
    if (buttonShow === 1) {
      setContainerHeight(370);
    } else if (buttonShow === 2) {
      setContainerHeight(260);
    } else {
      setContainerHeight(470);
    }
  }, [buttonShow]);

  return (
    <div className="w-full  flex flex-1 flex-col sm:h-[520px]   ">
   {/*    <h3 className="text-center sm:text-left text-xl font-bold">Contactos</h3> */}

      <div className="flex flex-1 flex-col lg:flex-row justify-between gap-8 flex-wrap mt-4 ">
        <div className="flex flex-1  justify-center lg:justify-start w-auto flex-col px-4 sm:px-0">
       {/*    <TogetherAction /> 
          <div className="my-6 w-4/5 md:w-full flex self-center">
            <Separator className="bg-foreground/10" />
          </div>
          */}
          <h3 className="sm:text-left text-center text-2xl font-bold  mb-20 underline">Consultório temporariamente encerrado</h3>
          <h4 className="text-md font-bold mb-3 px-2 sm:px-0 italic">
            Deixar mensagem...
          </h4>
          <Form />
        </div>
        <div className="mt-6 flex md:hidden w-4/5 self-center">
          <Separator className="bg-foreground/10" />
        </div>
        <div className="flex items-center self-center justify-center flex-1 flex-row flex-wrap  xl:flex-nowrap  gap-4 w-full ">
          <div className="sm:pl-2 items-center flex md:basis-3/4 sm:pb-0 pb-4">

            <div
              className="flex items-center"
              style={{
                height: `${containerHeight}px`,
                transition: "height 0.3s ease-in-out",
              }}
            >
              {buttonShow === 1 ? (
                <MapGoogle />
                /* fazer um mapa*/
              ) : buttonShow === 2 ? (
        
                <Suspense fallback={<p></p>}>
                <Player
                  playing={false}
                  url={"https://www.youtube.com/watch?v=14QkzMWrEqE&t=4s"}
                />
              </Suspense>
              ) : (
                <Info />
                /* mudar informaçoes*/
              )}
            </div>
          </div>

          <div className="flex flex-1 md:basis-1/4 justify-center">
            <div className="flex flex-col md:flex-row xl:flex-col gap-4 justify-center items-center ">
 {/*              <Button
              id="ShowMap"
              aria-label="Carregar para ver o mapa"
                className={`w-36
             
                ${
                  buttonShow === 1 ? "bg-primary/70" : "bg-primary"
                }`}
                onClick={() => setButtonShow((prev) => (prev = 1))}
              >
                Localização
              </Button>
              <Button
                      id="ShowConsultorio"
                      aria-label="Carregar para ver consultorio"
                className={`w-36 ${
                  buttonShow === 2 ? "bg-primary/70" : "bg-primary"
                }`}
                onClick={() => setButtonShow((prev) => (prev = 2))}
              >
                Ver o Espaço
              </Button>
              <Button
                 id="ShowInfo"
                 aria-label="Carregar para ver informaçoes de horário e preço"
                 className={`w-36 ${
                  buttonShow === 3 ? "bg-primary/70" : "bg-primary"
                }`}
                onClick={() => setButtonShow((prev) => (prev = 3))}
              >
                Horário e Preçário
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
