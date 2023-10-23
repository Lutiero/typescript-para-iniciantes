const input = document.querySelector("input");

let total = localStorage.getItem("total");
input.value = total;
calcularGanho(input.value);

function calcularGanho(value) {
  const p = document.querySelector("p");
  p.innerText = `Você ganhou: R$ ${value + 100 - value * 0.2}.`;
}

function totalMudou() {
  const value = +input.value;
  localStorage.setItem("total", value);
  calcularGanho(value);
}

input.addEventListener("keyup", totalMudou);
