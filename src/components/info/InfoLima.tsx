import React from "react";
import SectionText from "../sections/SectionText";

type Props = {};

const InfoLima = ({}: Props) => {
  return (
    <div className="w-[300px]  sm:w-[500px] sm:h-[400px] flex  ">
      <div className="flex  flex-col self-start gap-y-4">
      { /*
        <SectionText
          titleSpace="mb-2"
          title="Horário de Funcionamento:"
          desc1="Segunda a Sexta-feira: 11:00h às 20:30h"
          desc2="(Encerrado aos fins de semana e feriados)"
          desc2Small={true}
        />
      
        <SectionText
          titleSpace="mb-2"
          title="Preçário:"
          desc1="Consulta de Psicologia: 30€ / consulta"
          desc2="(Numerário, transferência ou MBWay)"
          desc2Small={true}
        />
        */}
          <SectionText
          titleSpace="mb-2"
          title="Local:"
          desc1=" Centro Médico e Análises Lima Saúde"
        />
             <SectionText
          titleSpace="mb-2"
          title="Morada:"
          desc1=" Rua das Termas do Eirogo 559 loja C, 4750-461"
        />

        <SectionText
          titleSpace="mb-2"
          title="Destinatários:"
          desc1="Destinam-se a pessoas adultas, jovens a partir dos 16 anos"
        />

        <SectionText
          titleSpace="mb-2"
          title="Duração:"
          desc1="Cada consulta têm a duração aproximada de 50 minutos"
        />
        <div className="flex flex-row items-center">
            <h4 className="text-lg font-bold justify-center">Tel:</h4>
            <p className="text-md text-secondary ml-2 translate-y-[0.5px]">933116874</p>
        </div>
      </div>
    </div>
  );
};

export default InfoLima;
