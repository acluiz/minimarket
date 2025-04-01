export const ClientForm = () => {
  return `
    <form id="clientForm">
      <div class="d-md-flex gap-md-3">
        <div class="mb-3 col">
          <label for="name" class="form-label">Nome</label>
          <input required type="text" placeholder="João Silva" class="form-control" id="name" aria-describedby="name">
        </div>
        <div class="mb-3 col">
          <label for="cpf" class="form-label">CPF</label>
          <input required type="text" placeholder="000.000.000-00" class="form-control" id="cpf" aria-describedby="cpf">
        </div>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Endereço</label>
        <input required type="text" placeholder="Rua Altamar, 16 - Grandioso" class="form-control" id="address" aria-describedby="address">
      </div>

      <p>Sexo</p>
      <div class="d-flex col-md-3">
        <div class="mb-3 col form-check">
          <input required type="radio" class="form-check-input" id="gender-male" name="gender" value="male">
          <label class="form-check-label" for="gender-male">Masculino</label>
        </div>
        <div class="mb-3 col form-check">
          <input required type="radio" class="form-check-input" id="gender-female" name="gender" value="female">
          <label class="form-check-label" for="gender-female">Feminino</label>
        </div>
      </div>

      <div class="d-md-flex gap-md-3">
        <div class="mb-3 col">
          <label for="phone" class="form-label">Telefone</label>
          <input required type="tel" placeholder="(00) 90000-0000" class="form-control" id="phone" aria-describedby="phone">
        </div>
        <div class="mb-3 col">
          <label for="email" class="form-label">Email</label>
          <input required type="email" placeholder="mercado@pucrs.com.br" class="form-control" id="email" aria-describedby="email">
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  `;
};

export const DeliveryForm = () => {
  return `
    <form id="deliveryForm">
      <div class="mb-3 form-check">
        <input required type="radio" class="form-check-input" id="type-male" name="type" value="male">
        <label class="form-check-label" for="type-male">Retirar na loja</label>
      </div>
      <div class="mb-3 form-check">
        <input required type="radio" class="form-check-input" id="type-delivery" name="type" value="delivery">
        <label class="form-check-label" for="type-delivery">Receber em casa</label>
      </div>
      <div class="mb-3">
        <label for="date" class="form-label">Dia e horário</label>
        <input required type="datetime-local" class="form-control" id="date" aria-describedby="date">
      </div>
      <button type="submit" class="btn btn-primary">Agendar</button>
    </form>
  `;
};

export const onSendForms = () => {
  const clientForm = document.getElementById("clientForm");
  const deliveryForm = document.getElementById("deliveryForm");

  clientForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("send clientForm");
  });

  deliveryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("send deliveryForm");
  });
};
