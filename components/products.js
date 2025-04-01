export const Products = ({ id, title, products }) => {
  return `
    <section id="${id}" class="py-3 px-4 container">
      <h2>${title}</h2>
      <div class="row mt-1 g-4">
      ${products.map(
        (product) => `
        <div class="col-12 col-md-3">
          <div class="card h-100 d-flex flex-column">
            <div class="ratio ratio-4x3">
              <img class="card-img-top object-fit-cover" src="${product.img.src}" alt="${product.img.alt}" />
            </div>
            <div class="card-body flex-grow-1">
              <p class="card-title fw-medium">${product.name}</p>
              <p class="card-text">${product.price}</p>
            </div>
          </div>
        </div>
      `
      )}
      </div>
    </section>
  `;
};
