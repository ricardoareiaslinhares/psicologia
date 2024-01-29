"use client"
import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { useState } from "react";


type MessageState = {
    showMessageModal:boolean;
    setShowMessageModal: Dispatch<SetStateAction<boolean>>
}


type MessageContextProviderProps = {
    children: ReactNode;
};
const initialMessageState: MessageState = {
  showMessageModal: false,
  setShowMessageModal: () => {},
};

export const MessageContext = createContext<MessageState>(initialMessageState);

export function MessageContextProvider({children}: MessageContextProviderProps)  {
    const [showMessageModal, setShowMessageModal] = useState(false);

    return <MessageContext.Provider value={{ showMessageModal, setShowMessageModal }}>{children}</MessageContext.Provider>;

}