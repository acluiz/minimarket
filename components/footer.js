export const Footer = () => {
  const contactInfos = [
    { url: "tel:+0000000000", label: "0000-0000", text: "Telefone" },
    {
      url: "mailto:minimercado@pucrs.com.br",
      label: "minimercado@pucrs.com.br",
      text: "Email",
    },
  ];

  const links = [
    { url: "#servicos", label: "Serviços" },
    { url: "#frutas-verduras", label: "Frutas e verduras" },
    {
      url: "#alimenticios-nao-pereciveis",
      label: "Alimentícios não perecíveis",
    },
    { url: "#higiene-limpeza", label: "Higiene e limpeza" },
  ];

  return `
    <footer class="d-md-flex justify-content-between bg-primary px-4 py-5 text-light">
      <nav>
        <h3>Navegue</h3>
        <ul class="navbar-nav fw-medium">
          ${links
            .map(
              ({ url, label }) => `
            <li class="nav-item">
              <a class="nav-link" href="${url}">${label}</a>
            </li>
          `
            )
            .join("")}
        </ul>
      </nav>
      <div>
        <h3>Contato</h3>
        ${contactInfos
          .map(
            ({ url, label, text }) => `
          <p class="fw-medium">
            ${text}: <a class="text-light fw-normal" href="${url}">${label}</a>
          </p>
        `
          )
          .join("")}
      </div>
      <p>
        <span class="text-light fw-medium">&copy;</span> Desenvolvido por 
        <span class="text-light fw-medium">Ana Luiz</span>
      </p>
    </footer>
  `;
};
