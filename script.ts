function tipoDeDado<T>(a: T) {
  const resultado = {
    dado: a,
    tipo: typeof a,
  };

  console.log(resultado);
  return resultado;
}

const nav = document.getElementById("nav");
tipoDeDado(nav);
