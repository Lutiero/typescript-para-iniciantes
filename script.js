function tipoDeDado(a) {
    var resultado = {
        dado: a,
        tipo: typeof a,
    };
    console.log(resultado);
    return resultado;
}
var nav = document.getElementById("nav");
tipoDeDado(nav);
