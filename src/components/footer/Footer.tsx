"use client"
import React, { useCallback, useState } from "react";
import Form from "../contact/Form";


type Props = {

};



const Footer = ({}: Props) => {


  return (
    <div className="w-full flex flex-1 flex-col mt-8 py-8 px-8 sm:px-24 bg-whiteRose">
      <h2 className="text-center sm:text-left text-xl font-bold">Contactos</h2>

      <div className="flex flex-1 flex-row justify-between gap-8 flex-wrap sm:flex-nowrap mt-4">
        <div className="flex flex-1 justify-center sm:justify-start">
          <Form />
        </div>

        <div className="flex items-center flex-1 flex-col sm:flex-row gap-4">
          <div className="pl-2 items-center flex basis-3/4">
            <img alt="imagem card" src="https://picsum.photos/500/300"></img>
          </div>

          <div className="flex flex-1 basis-1/4 justify-start">
            <div className="flex flex-row sm:flex-col gap-4 justify-center items-center sm:items-start">
              <button className="bg-slate-200 hover:bg-slate-300 text-slate-900">
                Mapa
              </button>

              <button className="bg-slate-200 hover:bg-slate-300 text-slate-900">
                Ver Consultório
              </button>

              <button className="bg-slate-200 hover:bg-slate-300 text-slate-900">
                Horário e Preçário
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
