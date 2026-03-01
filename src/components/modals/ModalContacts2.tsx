"use client";
import React, { useRef, useEffect, useContext } from "react";
import text from "@/data/text.json";
import { useRouter } from "next/navigation";
import { MessageContext } from "@/context/message";
import { Locale, getLocalePath } from "@/i18n/config";

type Props = {
  handleModal?: () => void;
  message?: string;
  locale?: Locale;
};

function ModalContacts2({ handleModal, message, locale = "pt" }: Props) {
  const router = useRouter();
  const modalRef = useRef<HTMLDialogElement>(null);
  const { showMessageModal, setShowMessageModal } = useContext(MessageContext);
  const t = text[locale] || text.pt;

  useEffect(() => {
    if (showMessageModal) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [showMessageModal]);

  const closeModal = () => {
    modalRef.current?.close();
    setShowMessageModal(false);
    router.push(getLocalePath(locale, "/"), { scroll: false });
  };

  const modal: JSX.Element | null = showMessageModal ? (
    <dialog ref={modalRef} onClick={closeModal} className="flex flex-col">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex flex-1 flex-col border-solid border-2 border-b-slate-400 border-r-slate-400 bg-primary rounded-tl-xl rounded-br-xl self-center"
      >
        <div className="flex pt-2 bg-primary justify-end">
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
          <h2 className="px-5 font-bold text-base">
            {t.c.feedback}{" "}
          </h2>
          <p>{message && message}</p>
        </div>
      </div>
    </dialog>
  ) : null;

  return modal;
}

export default ModalContacts2;
