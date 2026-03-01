import { FormData } from "@/components/contact/Form";


export function sendEmail(data: FormData, handleModal: () => void): Promise<void>;
export function sendEmail(data: FormData): Promise<void>;
export function sendEmail(data: FormData, handleModal?: () => void) {
  const apiEndpoint = "/api/email";

  return fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Erro ao enviar");
      return res.json();
    })
    .then(() => {
      handleModal?.();
    });
}
