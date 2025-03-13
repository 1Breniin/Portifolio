document.addEventListener("DOMContentLoaded", function () {
    const logoBreno = document.getElementById("logo-breno");

    logoBreno.addEventListener("mouseover", function () {
        this.src = "medias/Logo colorida.png";
    });

    logoBreno.addEventListener("mouseout", function () {
        this.src = "medias/Logo degrade.png";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const logoBreno = document.getElementById("FotoRealEditada");

    logoBreno.addEventListener("mouseover", function () {
        this.src = "medias/FotoRealEditada.png";
    });

    logoBreno.addEventListener("mouseout", function () {
        this.src = "medias/FotoRealDegrade.png";
    });
});