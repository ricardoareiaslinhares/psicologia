import React from "react";


type Props = {
  title?: string;
  desc1: string;
  desc2?: string;
  desc3?: string;
  desc4?: string;
  desc5?: string;
};

const SectionText = ({ title, desc1, desc2, desc3, desc4, desc5 }: Props) => {


  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="flex flex-1 flex-col">
        {title? <h1 className="text-lg font-bold mb-4 text-center sm:text-left ">{title}</h1> : null}
    
        <p className="text-md">{desc1}</p>
        <p className="text-md mt-2">{desc2}</p>

        {desc3 ? <p className="text-md mt-2">{desc3}</p> : null}
        {desc4 ? <p className="text-md mt-2">{desc4}</p> : null}
        {desc5 ? <p className="text-md mt-2">{desc5}</p> : null}
      </div>
    </div>
  );
};

export default SectionText;
