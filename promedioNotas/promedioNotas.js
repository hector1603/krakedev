calcularPromedioNotas = function() {
    let promedio;
    let parcialUno = recuperarFlotante("parcialUno");
    let parcialDos = recuperarFlotante("parcialDos");
    let parcialTres = recuperarFlotante("parcialTres");

    promedio = calcularPromedio(parcialUno, parcialDos, parcialTres);

    cambiarTexto("lblResultado", promedio.toFixed(2));
}