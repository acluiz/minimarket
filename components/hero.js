const slides = [
  { src: "img/banner-1.jpg", alt: "comemoração do aniversário guanabara" },
  {
    src: "img/banner-2.png",
    alt: "semana baixou geral, aproveite as ofertas!",
  },
  {
    src: "img/banner-3.jpg",
    alt: "saldão de abil. preço baixo é no guanabara!",
  },
];

export const heroAnimation = () => {
  let activeSlideIndex = 0;

  const slidesEl = document.querySelectorAll(".carousel-item");
  const indicatorsEl = document.querySelectorAll(".carousel-indicators button");

  setInterval(() => {
    slidesEl[activeSlideIndex].classList.remove("active");
    indicatorsEl[activeSlideIndex].classList.remove("active");

    if (activeSlideIndex === slides.length - 1) {
      activeSlideIndex = 0;
    } else {
      activeSlideIndex += 1;
    }

    slidesEl[activeSlideIndex].classList.add("active");
    indicatorsEl[activeSlideIndex].classList.add("active");
  }, 3000);
};

export const Hero = () => {
  return `
    <div id="indicators" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#indicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#indicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#indicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
       ${slides
         .map(
           ({ src, alt }, index) => `
          <div class="carousel-item ${index === 0 ? "active" : ""}">
            <img src="${src}" class="d-block w-100" alt="${alt}">
          </div>  
        `
         )
         .join("")}
      </div>
      
      <button class="carousel-control-prev" type="button" data-bs-target="#indicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#indicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Próximo</span>
      </button>
    </div>
  `;
};
