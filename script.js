"use strict";
const links = document.querySelectorAll(".link");
function ativarElemento(elemento) {
    elemento.style.color = "red";
    elemento.style.border = "2px solid ##fff";
}
links.forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
        ativarElemento(link);
    }
});
