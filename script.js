const formulary = document.querySelector(".formulario-fale-conosco");
const mask = document.querySelector(".mascara-formulario");

function showForm() {
    formulary.style.left = "50%";
    formulary.style.transform = "translateX(-50%)";
    mask.style.visibility = "visible";
}

function hiddenForm() {
    formulary.style.left = "-300%";
    formulary.style.trasform = "translateX(0)";
    mask.style.visibility = "hidden";
}
