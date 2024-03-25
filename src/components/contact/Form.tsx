"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/sendEmail";
import text from "@/data/text.json";
import { language } from "@/utils/language";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { IoMdMail } from "react-icons/io";
import { MessageContext } from "@/context/message";




export type FormData = {
  name: string;
  email: string;
  message: string;
};

type Props = {

};

const Contact = ({  }: Props) => {
const router = useRouter()
const {showMessageModal, setShowMessageModal} = useContext(MessageContext)


  const { register, handleSubmit } = useForm<FormData>();
  const [nextSubmission, setNextSubmission] = useState(true);




  const closeModal = () => {
    setShowMessageModal(true)
    router.push("/?showMessage=y");
  }

  const onSubmit = (data: FormData) => {
    //console.log("here")
    //console.log("DATA", data)
   sendEmail(data, closeModal);
    setNextSubmission(false);

    setTimeout(() => {
      setNextSubmission(true);
    }, 2000);

  }
  

  return (
    <>
   
      <div className={`flex flex-col w-full `}>
        <form id="contactos" onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col sm:flex-row sm:gap-4  ">
            <div className="mb-5 ">
              <label
            
                htmlFor="name"
                className="mb-3 block text-base font-medium text-foreground"
              >
                {text[language].c.nome}
              </label>
              <Input
              {...register("name")}
              name="name"
                  id="name"
                type="text"
                placeholder={text[language].c.nomeplace}
                className="font-sans text-sm w-full border border-gray-300 focus:border-none py-3 px-6   outline-none  focus:shadow-md bg-muted-muted2"
             required={true}
             autoComplete="name"

              />
            </div>
            <div className="mb-5">
              <label
          
                htmlFor="email"
                className="mb-3 block text-base font-medium text-foreground"
              >
                Email
              </label>
              <Input
                     {...register("email")}
               id="email"
               name="email"
                type="email"
                placeholder={text[language].c.mailplace}
                className="w-full font-sans text-sm border border-gray-300 focus:border-none py-3 px-6 outline-none  focus:shadow-md bg-muted-muted2"
                required={true}
                autoComplete="Email"
              />
            </div>
          </div>
          <div className="mb-5">
            <label

              htmlFor="message"
              className="mb-3 block text-base font-medium text-foreground"
            >
              {text[language].c.mensagem}
            </label>
            <Textarea
                   {...register("message")}
              id="message"
              name="message"
              rows={4}
              placeholder={text[language].c.menplace}
              className="w-full font-sans text-sm border     border-gray-300 focus:border-opacity-0 bg-muted-muted2"
              required={true}
            ></Textarea>
          </div>
          <div className="flex flex-1 items-center justify-center md:justify-start ">
{/*             <button
              className="hover:shadow-sm hover:bg-opacity-90 rounded-md bg-orange-500 py-3 px-8 text-base font-semibold text-white outline-none"
              type="submit"
              disabled={!nextSubmission}
            >
          
              {!nextSubmission
                ? text[language].c.sending
                : text[language].c.send}
            </button> */}
            <Button
               type="submit"
               disabled={!nextSubmission}
               className="flex flex-row items-center justify-center gap-3"
            >
              <IoMdMail />
            {!nextSubmission
                ? text[language].c.sending
                : text[language].c.send}
                </Button>
          </div>
        </form>
       
      </div>
    </>
  );
};

export default Contact;
