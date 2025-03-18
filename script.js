document.addEventListener("DOMContentLoaded", function () {
  const logoBreno = document.getElementById("logo-breno");
  if (window.innerWidth > 768) {
      logoBreno.addEventListener("mouseover", function () {
          this.src = "medias/Logo colorida.png";
      });

      logoBreno.addEventListener("mouseout", function () {
          this.src = "medias/Logo degrade.png";
      });
  } else {
      logoBreno.src = "medias/Logo colorida.png";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const logoBreno = document.getElementById("FotoRealEditada");

  if (window.innerWidth > 768) {
      logoBreno.addEventListener("mouseover", function () {
          this.src = "medias/FotoRealEditada.png";
      });

      logoBreno.addEventListener("mouseout", function () {
          this.src = "medias/FotoRealDegrade.png";
      });
  } else {
      logoBreno.src = "medias/FotoRealEditada.png";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".efeito");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("active");
              }
          });
      },
      { threshold: 0.2 }
  );

  elements.forEach((element) => {
      observer.observe(element);
  });
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const hamburguer = document.querySelector(".menu-hamburguer");

  menu.classList.toggle("show");
  hamburguer.classList.toggle("ativo"); // Adiciona a classe para mudar a cor
}