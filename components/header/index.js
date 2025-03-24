export const Navigation = () => {
  const links = [
    { url: "#servicos", label: "Serviços" },
    { url: "#frutas-verduras", label: "Frutas e verduras" },
    {
      url: "#alimenticios-nao-pereciveis",
      label: "Alimentícios não perecíveis",
    },
    { url: "#higiene-limpeza", label: "Higiene e limpeza" },
  ];

  const navigation = document.createElement("nav");
  const navigationList = document.createElement("ul");

  links.map(({ url, label }) => {
    const navigationListItem = document.createElement("li");
    const navigationLink = document.createElement("a");

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

  const title = document.createElement("h1");
  title.innerText = "Minimercado PUCRS";

  const navigation = Navigation();

  headerEl.appendChild(title);
  headerEl.appendChild(navigation);

  return headerEl;
};
