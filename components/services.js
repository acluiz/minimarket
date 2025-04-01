import { ClientForm, DeliveryForm } from "./form.js";

export const Services = () => {
  return `
    <section id="servicos" class="py-3 px-4 container">
      <h2>Serviços</h2>
     
      <p class="fs-5">Cadastre-se para receber novidades por email e whatsapp</p>
      ${ClientForm()}

      <hr class="mt-4">

      <p class="fs-5">Agendar entrega</p>
      <p>
        <b>Retire o seu produto no local gratuitamente</b> ou solicite uma
        <b>entrega</b>.
      </p>
      ${DeliveryForm()}
    </section>
    `;
};
