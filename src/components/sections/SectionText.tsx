import React from "react";


type Props = {
  title?: string;
  isH?:string;
  titleSpace?:string;
  desc1?: React.ReactNode;
  desc2?: React.ReactNode;
  desc2Small?:boolean;
  desc3?: React.ReactNode;

  desc4?: React.ReactNode;
  desc5?: React.ReactNode;
  desc6?: React.ReactNode;
  desc7?: React.ReactNode;
};

const SectionText = ({ title,isH, titleSpace, desc1, desc2, desc2Small, desc3, desc4, desc5, desc6, desc7 }: Props) => {
const RenderTitle = () => {
  if (isH === "h1") return <h1 className={`text-xl font-bold text-center sm:text-left ${titleSpace ? titleSpace : "mb-4"} `}>{title}</h1>
  if (isH === "h2") return <h2 className={`text-xl font-bold text-center sm:text-left ${titleSpace ? titleSpace : "mb-4"} `}>{title}</h2>
  if (isH === "h3") return <h3 className={`text-xl font-bold text-center sm:text-left ${titleSpace ? titleSpace : "mb-4"} `}>{title}</h3>
  if (isH === "h4") return <h4 className={`text-xl font-bold text-center sm:text-left ${titleSpace ? titleSpace : "mb-4"} `}>{title}</h4>
  if (isH === "h5") return <h5 className={`text-xl font-bold text-center sm:text-left ${titleSpace ? titleSpace : "mb-4"} `}>{title}</h5>
  else return <h1 className={`text-xl font-bold text-center sm:text-left ${titleSpace ? titleSpace : "mb-4"} `}>{title}</h1>
}

  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="flex flex-1 flex-col">
        {title? <RenderTitle/> : null}

       
    
        <p className="text-md text-secondary leading-7">{desc1}</p>
    
        {desc2 ? <p className={` text-secondary leading-7 ${desc2Small ? "text-sm mt-1" : "text-md mt-2"} `}>{desc2}</p> : null}
        {desc3 ? <p className="text-md mt-2 text-secondary leading-7">{desc3}</p> : null}
        {desc4 ? <p className="text-md mt-2 text-secondary leading-7">{desc4}</p> : null}
        {desc5 ? <p className="text-md mt-2 text-secondary leading-7">{desc5}</p> : null}
        {desc6 ? <p className="text-md mt-2 text-secondary leading-7">{desc6}</p> : null}
        {desc7 ? <p className="text-md mt-2 text-secondary leading-7">{desc7}</p> : null}
      </div>
    </div>
  );
};

export default SectionText;
