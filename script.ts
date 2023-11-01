async function fetchVendas() {
  const response = await fetch("https://api.origamid.dev/json/vendas.json");
  const data = await response.json();
  somarVendas(data);
}

fetchVendas();

type Venda = [string, number, string, ProdutoDetalhes];
interface ProdutoDetalhes {
  marca: string;
  cor: string;
}

function somarVendas(vendas: Venda[]) {
  let totalFor = 0;
  for (let index = 0; index < vendas.length; index++) {
    totalFor += vendas[index][1];
  }
  document.body.innerHTML += `<p>Total com For loop: R$ ${totalFor}</p>`;
  const totalReduce = vendas.reduce((anterior, atual) => {
    return anterior + atual[1];
  }, 0);

  document.body.innerHTML += `<p>Total com reduce: R$ ${totalReduce}</p>`;
}
