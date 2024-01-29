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