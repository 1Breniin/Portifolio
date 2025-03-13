document.addEventListener("DOMContentLoaded", function () {
    const logoBreno = document.getElementById("logo-breno"); // Seleciona a imagem dentro do #breno

    logoBreno.addEventListener("mouseover", function () {
        this.src = "medias/Logo colorida.png"; // Muda para a nova imagem
    });

    logoBreno.addEventListener("mouseout", function () {
        this.src = "medias/Logo degrade.png"; // Volta para a imagem original
    });
});