const Product = (product) => {
  const gridEl = document.createElement("div");
  const divEl = document.createElement("div");
  const contentEl = document.createElement("div");
  const imgEl = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("p");
  const price = document.createElement("p");

  gridEl.classList.add("col-12", "col-md-3");
  divEl.classList.add("card", "h-100", "d-flex", "flex-column");
  contentEl.classList.add("card-body", "flex-grow-1");

  imgEl.classList.add("ratio", "ratio-4x3");
  img.classList.add("card-img-top", "object-fit-cover");
  name.classList.add("card-title", "fw-medium");
  price.classList.add("card-text");

  img.src = product.img.src;
  img.alt = product.img.alt;
  name.innerHTML = product.name;
  price.innerHTML = product.price;

  contentEl.appendChild(name);
  contentEl.appendChild(price);

  imgEl.appendChild(img);
  divEl.appendChild(imgEl);
  divEl.appendChild(contentEl);

  gridEl.appendChild(divEl);

  return gridEl;
};

export const Products = ({ id, title, products }) => {
  const sectionEl = document.createElement("section");
  const productsEl = document.createElement("div");

  sectionEl.id = id;

  sectionEl.classList.add("py-3", "px-4", "container");
  productsEl.classList.add("row", "mt-1", "g-4");

  const titleEl = document.createElement("h2");
  titleEl.innerText = title;

  sectionEl.appendChild(titleEl);

  products.map((product) => productsEl.appendChild(Product(product)));

  sectionEl.appendChild(productsEl);

  return sectionEl;
};
