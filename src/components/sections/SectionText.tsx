import React from "react";


type Props = {
  title?: string;
  titleSpace?:string;
  isColum?:boolean;
  desc1?: React.ReactNode;
  desc2?: React.ReactNode;
  desc2Small?:boolean;
  desc3?: React.ReactNode;

  desc4?: React.ReactNode;
  desc5?: React.ReactNode;
  desc6?: React.ReactNode;
  desc7?: React.ReactNode;
};

const SectionText = ({ title, titleSpace, isColum, desc1, desc2, desc2Small, desc3, desc4, desc5, desc6, desc7 }: Props) => {


  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="flex flex-1 flex-col">
        {title? <h1 className={`text-xl font-bold text-center sm:text-left ${titleSpace ? titleSpace : "mb-4"} `}>{title}</h1> : null}
    
        <p className="text-md text-secondary leading-7">{desc1}</p>
    
        {desc2 ? <p className={` text-secondary leading-7 ${desc2Small ? "text-sm mt-1" : "text-md mt-2"} ${isColum ? "text-start" : "text-center"} `}>{desc2}</p> : null}
        {desc3 ? <p className={`text-md mt-2 text-secondary leading-7 ${isColum ? "" : "text-center"}`}>{desc3}</p> : null}
        {desc4 ? <p className="text-md mt-2 text-secondary leading-7">{desc4}</p> : null}
        {desc5 ? <p className="text-md mt-2 text-secondary leading-7">{desc5}</p> : null}
        {desc6 ? <p className="text-md mt-2 text-secondary leading-7">{desc6}</p> : null}
        {desc7 ? <p className="text-md mt-2 text-secondary leading-7">{desc7}</p> : null}
      </div>
    </div>
  );
};

export default SectionText;
