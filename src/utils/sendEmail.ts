import { FormData } from "@/components/contact/Form";


export function sendEmail(data: FormData, handleModal: () => void) {
  const apiEndpoint = "/api/email";


  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      //alert(res.message);
      handleModal();
   
    })
    .catch((err) => {
      alert(err);

    });
}
