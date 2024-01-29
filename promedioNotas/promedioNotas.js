calcularPromedioNotas = function() {
    let promedio;
    let parcialUno = recuperarFlotante("parcialUno");
    let parcialDos = recuperarFlotante("parcialDos");
    let parcialTres = recuperarFlotante("parcialTres");
    
    promedio = calcularPromedio(parcialUno, parcialDos, parcialTres);
    let msgAprobado = promedio.toFixed(2) + " - APROBADO";
    let msgReprobado = promedio.toFixed(2) + " - REPROBADO";

    if(promedio > 7) {
        cambiarTexto("lblResultado", msgAprobado);
        cambiarImagen("lblImagen", "./img/aprobado.gif");
    } else {
        cambiarTexto("lblResultado", msgReprobado);
        cambiarImagen("lblImagen", "./img/reprobado.gif");
    }

}