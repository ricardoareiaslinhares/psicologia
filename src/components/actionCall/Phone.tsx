import React from "react";
import { Button } from "../ui/button";
import { FaPhoneAlt } from "react-icons/fa";


type Props = {};

const Phone = (props: Props) => {
  return (
    <div className="flex  items-center justify-center  sm:self-start flex-row gap-4">
    {/*   <h4 className="text-md font-bold mb-3 italic">
        Telefonar e Marcar Consulta...
      </h4> */}
      <Button
        variant={"default"}
        className="sm:px-4  sm:py-6 py-10 flex flex-row items-center justify-center gap-x-3"
      >
        <FaPhoneAlt />
        {/*
        <a href="tel:+351918562032">
          <p className="text-lg font-medium ">918562032</p> */}
        <a href="tel:+351933116874">
          <p className="text-lg font-medium ">933116874</p>
        </a>
      </Button>

 
    </div>
  );
};

export default Phone;
