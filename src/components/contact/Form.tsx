"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/sendEmail";
import text from "@/data/text.json";
import { language } from "@/utils/language";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { IoMdMail } from "react-icons/io";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

type FeedbackState = null | "success" | "error";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackState>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const clearFeedback = () => {
    timerRef.current = setTimeout(() => {
      setFeedback(null);
    }, 5000);
  };

  const onSubmit = (data: FormData) => {
    if (sending) return;
    setSending(true);
    setFeedback(null);
    if (timerRef.current) clearTimeout(timerRef.current);

    sendEmail(data)
      .then(() => {
        setFeedback("success");
        reset();
      })
      .catch(() => {
        setFeedback("error");
      })
      .finally(() => {
        setSending(false);
        clearFeedback();
      });
  };

  return (
    <div className="flex flex-col w-full">
      <form id="contactos" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col sm:flex-row sm:gap-4">
          <div className="mb-5">
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
              className="font-sans text-sm w-full border border-gray-300 focus:border-none py-3 px-3 outline-none focus:shadow-md bg-muted-mutedDois"
              required={true}
              autoComplete="name"
            />
          </div>
          <div className="mb-5 sm:flex-1">
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
              className="w-full font-sans text-sm border border-gray-300 focus:border-none py-3 px-3 outline-none focus:shadow-md bg-muted-mutedDois"
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
            className="w-full font-sans text-sm border border-gray-300 focus:border-opacity-0 bg-muted-mutedDois"
            required={true}
          />
        </div>
        <div className="flex flex-1 items-center gap-4 justify-center md:justify-start">
          <Button
            type="submit"
            disabled={sending}
            className="flex flex-row items-center justify-center gap-3"
          >
            <IoMdMail />
            {sending ? text[language].c.sending : text[language].c.send}
          </Button>

          {feedback === "success" && (
            <p className="text-sm font-medium text-green-600 dark:text-green-400 animate-in fade-in duration-300">
              {text[language].c.feedback}
            </p>
          )}
          {feedback === "error" && (
            <p className="text-sm font-medium text-destructive animate-in fade-in duration-300">
              Erro ao enviar, tente novamente.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
