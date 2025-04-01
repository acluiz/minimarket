export const Header = () => {
  const links = [
    { url: "#frutas-verduras", label: "Frutas e verduras" },
    {
      url: "#alimenticios-nao-pereciveis",
      label: "Alimentícios não perecíveis",
    },
    { url: "#higiene-limpeza", label: "Higiene e limpeza" },
    { url: "#servicos", label: "Serviços" },
  ];

  return `
     <header class="navbar navbar-expand-lg justify-content-between shadow-sm bg-primary py-3 px-4">
      <h1 class="navbar-brand text-light">Minimercado PUCRS</h1>
      <nav>
        <ul class="navbar-nav">
          ${links
            .map(
              ({ url, label }) => `
            <li class="nav-item">
              <a class="nav-link text-light" href="${url}">${label}</a>
            </li>
          `
            )
            .join("")}
        </ul>
      </nav>
    </header>
  `;
};
