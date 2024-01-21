import React from "react";


type Props = {
  title?: string;
  titleSpace?:string;
  desc1: string;
  desc2?: string;
  desc2Small?:boolean;
  desc3?: string;
  desc4?: string;
  desc5?: string;
};

const SectionText = ({ title, titleSpace, desc1, desc2, desc2Small, desc3, desc4, desc5 }: Props) => {


  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="flex flex-1 flex-col">
        {title? <h1 className={`text-lg font-bold text-center sm:text-left ${titleSpace ? titleSpace : "mb-4"} `}>{title}</h1> : null}
    
        <p className="text-md text-secondary">{desc1}</p>
    
        {desc2 ? <p className={` text-secondary ${desc2Small ? "text-sm mt-1" : "text-md mt-2"} `}>{desc2}</p> : null}
        {desc3 ? <p className="text-md mt-2 text-secondary ">{desc3}</p> : null}
        {desc4 ? <p className="text-md mt-2 text-secondary">{desc4}</p> : null}
        {desc5 ? <p className="text-md mt-2 text-secondary">{desc5}</p> : null}
      </div>
    </div>
  );
};

export default SectionText;
