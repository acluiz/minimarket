export const Navigation = () => {
  const navigation = document.createElement("nav");

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
  navigationList.classList.add("navbar-nav");

  links.map(({ url, label }) => {
    const navigationListItem = document.createElement("li");
    const navigationLink = document.createElement("a");

    navigationListItem.classList.add("nav-item");
    navigationLink.classList.add("nav-link", "text-light");

    navigationLink.href = url;
    navigationLink.innerText = label;

    navigationListItem.appendChild(navigationLink);
    navigationList.appendChild(navigationListItem);
  });

  navigation.appendChild(navigationList);

  return navigation;
};

export const Header = () => {
  const headerEl = document.createElement("header");

  headerEl.classList.add(
    "navbar",
    "navbar-expand-lg",
    "justify-content-between",
    "shadow-sm",
    "bg-primary",
    "py-3",
    "px-4"
  );

  const title = document.createElement("h1");
  title.innerText = "Minimercado PUCRS";
  title.classList.add("navbar-brand", "text-light");

  const navigation = Navigation();

  headerEl.appendChild(title);
  headerEl.appendChild(navigation);

  return headerEl;
};
