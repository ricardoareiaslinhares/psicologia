import {useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function useGetMessageParams(){

const [showModalState, setSearchState] = useState(false);


const searchParams = useSearchParams();

const showMessage = searchParams.get("showMessage");


useEffect(() => {
  if (showMessage === "y") {
   setSearchState(true)
  } else {
    setSearchState(false)
  }
}, [showMessage]);

return [showModalState, setSearchState]

}
export function getParams(){
    const [showModalState, setSearchState] = useState(false);
    
    useEffect(()=>{
        const searchParamsNew = new URLSearchParams(
            typeof window !== 'undefined' ? window.location.search : '',
          );

          let showMessage = searchParamsNew.get("showMessage")

          if (showMessage === "y") {
            setSearchState(true)
           } else {
             setSearchState(false)
           }
        
      }, [])

      return showModalState


}