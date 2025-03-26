export const Contact = () => {
  const contact = document.createElement("div");

  const title = document.createElement("h3");
  title.innerText = "Contato";

  contact.appendChild(title);

  const links = [
    { url: "tel:+0000000000", label: "0000-0000", text: "Telefone" },
    {
      url: "mailto:minimercado@pucrs.com.br",
      label: "minimercado@pucrs.com.br",
      text: "Email",
    },
  ];

  links.map(({ url, label, text }) => {
    const info = document.createElement("p");
    const infoLink = document.createElement("a");

    info.classList.add("fw-medium");
    infoLink.classList.add("text-light", "fw-normal");

    infoLink.href = url;
    infoLink.innerText = label;

    info.innerHTML = `${text}: `;
    info.appendChild(infoLink);

    contact.appendChild(info);
  });

  return contact;
};

export const Navigation = () => {
  const navigation = document.createElement("nav");

  const title = document.createElement("h3");
  title.innerText = "Navegue";

  navigation.appendChild(title);

  const links = [
    { url: "#servicos", label: "Serviços" },
    { url: "#frutas-verduras", label: "Frutas e verduras" },
    {
      url: "#alimenticios-nao-pereciveis",
      label: "Alimentícios não perecíveis",
    },
    { url: "#higiene-limpeza", label: "Higiene e limpeza" },
  ];

  const navigationList = document.createElement("ul");
  navigationList.classList.add("navbar-nav", "fw-medium");

  links.map(({ url, label }) => {
    const navigationListItem = document.createElement("li");
    const navigationLink = document.createElement("a");

    navigationListItem.classList.add("nav-item");
    navigationLink.classList.add("nav-link");

    navigationLink.href = url;
    navigationLink.innerText = label;

    navigationListItem.appendChild(navigationLink);
    navigationList.appendChild(navigationListItem);
  });

  navigation.appendChild(navigationList);

  return navigation;
};

export const Footer = () => {
  const footerEl = document.createElement("footer");

  footerEl.classList.add(
    "d-md-flex",
    "justify-content-between",
    "bg-primary",
    "px-4",
    "py-5",
    "text-light"
  );

  const author = document.createElement("p");
  const authorName = document.createElement("span");
  const copySymbol = document.createElement("span");

  authorName.innerHTML = "Ana Luiz";
  copySymbol.innerHTML = "&copy;";

  copySymbol.classList.add("text-light", "fw-medium");
  authorName.classList.add("text-light", "fw-medium");

  author.appendChild(copySymbol);
  author.innerHTML += " Desenvolvido por ";
  author.appendChild(authorName);

  const navigation = Navigation();
  const contact = Contact();

  footerEl.appendChild(navigation);
  footerEl.appendChild(contact);
  footerEl.appendChild(author);

  return footerEl;
};
