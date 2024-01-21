"use client";
import React, { useCallback, useState } from "react";
import Form from "../contact/Form";
import { Button } from "../ui/button";
import MapGoogle from "../maps/MapGoogle";
import Player from "../videoPlayer/Player";
import Info from "../info/Info";
import { Separator } from "../ui/separator";

type Props = {};

const Footer = ({}: Props) => {
  const [buttonShow, setButtonShow] = useState<number>(1);

  return (
    <div className="w-full  flex flex-1 flex-col   ">
      <h2 className="text-center sm:text-left text-xl font-bold">Contactos</h2>

      <div className="flex flex-1 flex-col lg:flex-row justify-between gap-8 flex-wrap mt-4 ">
        <div className="flex flex-1  justify-center lg:justify-start w-auto flex-col">
          <div className="flex sm:items-start items-center justify-center sm:justify-start flex-col">
          <h4 className="text-md font-bold mb-3 italic">
                  Telefonar e Marcar Consulta...
                </h4>
            <Button variant={"outline"} className="sm:px-4  sm:py-6 py-10">
              <a
                href="tel:+351918562032"
      
              >
              
                <p className="text-lg font-medium ">918562032</p>
              </a>
            </Button>
          </div>
          <div className="my-6 w-4/5 md:w-full flex self-center">

          <Separator />
          </div>
          <h4 className="text-md font-bold mb-3 italic">
            Deixar mensagem...
          </h4>
          <Form />
        </div>
        <div className="mt-6 flex md:hidden w-4/5 self-center">

<Separator />
</div>
        <div className="flex items-center self-center justify-center flex-1 flex-row flex-wrap  xl:flex-nowrap  gap-4 w-full ">
          <div className="sm:pl-2 items-center flex md:basis-3/4">
            {/* <img alt="imagem card" src="https://picsum.photos/500/300"></img> */}
            <div className="h-[450px] flex items-center ">
              {buttonShow === 1 ? (
                <MapGoogle />
              ) : buttonShow === 2 ? (
                <Player
                  playing={true}
                  url={"https://www.youtube.com/watch?v=14QkzMWrEqE&t=4s"}
                />
              ) : (
                <Info />
              )}
            </div>
          </div>

          <div className="flex flex-1 md:basis-1/4 justify-center">
            <div className="flex flex-col md:flex-row xl:flex-col gap-4 justify-center items-center ">
              <Button
                className={`w-36 ${
                  buttonShow === 1 ? "bg-primary/80" : "bg-primary"
                }`}
                onClick={() => setButtonShow(1)}
              >
                Mapa
              </Button>
              <Button
                className={`w-36 ${
                  buttonShow === 2 ? "bg-primary/80" : "bg-primary"
                }`}
                onClick={() => setButtonShow(2)}
              >
                Ver Consultório
              </Button>
              <Button
                className={`w-36 ${
                  buttonShow === 3 ? "bg-primary/80" : "bg-primary"
                }`}
                onClick={() => setButtonShow(3)}
              >
                Horário e Preçário
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
