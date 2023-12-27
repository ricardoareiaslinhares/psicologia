"use client";

import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/sendEmail";
import text from "@/data/text.json";
import { language } from "@/utils/language";

import Link from "next/link";
import { useRouter } from "next/navigation";




export type FormData = {
  name: string;
  email: string;
  message: string;
};

type Props = {

};

const Contact = ({  }: Props) => {
const router = useRouter()


  const { register, handleSubmit } = useForm<FormData>();
  const [nextSubmission, setNextSubmission] = useState(true);




  const closeModal = () => {
    router.push("/?showMessage=y");
  }

  const onSubmit = (data: FormData) => {
   sendEmail(data, closeModal);
    setNextSubmission(false);

    setTimeout(() => {
      setNextSubmission(true);
    }, 2000);

  }
  

  return (
    <>
   
      <div className="flex flex-1 w-full flex-col ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col sm:flex-row sm:gap-4  ">
            <div className="mb-5 ">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-black"
              >
                {text[language].c.nome}
              </label>
              <input
                type="text"
                placeholder={text[language].c.nomeplace}
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register("name", { required: true })}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-black"
              >
                Email
              </label>
              <input
                type="email"
                placeholder={text[language].c.mailplace}
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register("email", { required: true })}
              />
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-black"
            >
              {text[language].c.mensagem}
            </label>
            <textarea
              rows={4}
              placeholder={text[language].c.menplace}
              className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              {...register("message", { required: true })}
            ></textarea>
          </div>
          <div className="flex flex-1 items-center justify-center md:justify-start ">
            <button
              className="hover:shadow-sm hover:bg-opacity-90 rounded-md bg-orange-500 py-3 px-8 text-base font-semibold text-white outline-none"
              type="submit"
              disabled={!nextSubmission}
            >
              {!nextSubmission
                ? text[language].c.sending
                : text[language].c.send}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
