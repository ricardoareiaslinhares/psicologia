import React from "react";

type Props = {};

function FooterCredits({}: Props) {
  return (
    <div className="w-full flex items-center flex-1 py-4 flex-wrap-reverse sm:flex-nowrap overflow-hidden ">
      <div className="flex justify-evenly sm:justify-center w-full sm:w-auto basis-4/12 ">
        <img
          alt="Instagram @linharespsicologia"
          className=" object-contain  h-24 w-auto  cursor-pointer "
          src="/Instagram_Ricardo_Linhares_Psicologo_Barcelos.png"
        ></img>
        <img
          alt="LinkedIn Ricardo Linhares"
          className=" object-contain h-24 w-auto  cursor-pointer "
          src="Linkedin_Ricardo_Linhares_Psicologo_Barcelos.png"
        ></img>
        <img
          alt="Ver no Google"
          className=" object-contain  h-24 w-auto  cursor-pointer "
          src="/favicon.ico"
        ></img>
      </div>
      <div className="flex justify-center items-center my-8 sm:my-0 gap-1 flex-col basis-4/12">
        <p className="text-center"> Ricardo Linhares Consultas de Psicologia</p>
        <p className="text-center text-sm"> © 2021 - 2024</p>
      </div>
      <div className="flex justify-center gap-x-8 items-center basis-4/12 ">
        <img
          alt="Ordem dos Psicologos Portugueses (OPP)"
          className=" object-contain w-auto h-24  cursor-pointer "
          src="/Ordem_dos_Psicologos_Portugueses_OPP.png"
        ></img>
        <img
          alt="Association for Contextual Behavioral Science (ACBS)"
          className=" object-contain w-auto h-16  cursor-pointer "
          src="/Association_for_Contextual_Behavioral_Science.png"
        ></img>
      </div>
    </div>
  );
}

export default FooterCredits;
