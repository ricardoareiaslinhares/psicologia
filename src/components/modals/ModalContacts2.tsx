"use client";
import React, { useRef, useEffect } from "react";
import text from "@/data/text.json";
import { language } from "@/utils/language";
import { useRouter, useSearchParams } from "next/navigation";
import { on } from "events";

type Props = {
  handleModal?: () => void;
  message?: string;

};
function ModalContacts2({ handleModal, message,  }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const modalRef = useRef<HTMLDialogElement>(null);
  const showMessage = searchParams.get("showMessage");

  useEffect(() => {
    if (showMessage === "y") {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [showMessage]);

  const closeModal = () => {
    modalRef.current?.close();
 
   router.push("/", {scroll: false});

  };

  const modal: JSX.Element | null =
    showMessage === "y" ? (
      <dialog
        ref={modalRef}
        onClick={closeModal}
        className="flex flex-col   "
      >
      
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="  flex flex-1  flex-col border-solid border-2 border-b-slate-400 border-r-slate-400  bg-primary  rounded-tl-xl rounded-br-xl self-center"
          >
            <div className="flex pt-2  bg-primary justify-end">
              <button className="px-3 pt-0" onClick={closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mb-10 mt-4 mx-8">
              <h2 className="px-5 font-bold  text-md">
                {text[language].c.feedback}{" "}
              </h2>
              <p>{message && message}</p>
            </div>
          </div>
   
      </dialog>
    ) : null;
  return modal;
}

export default ModalContacts2;
