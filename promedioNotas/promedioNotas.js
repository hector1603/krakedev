calcularPromedioNotas = function() {
    let promedio;
    let parcialUno = recuperarFlotante("parcialUno");
    let parcialDos = recuperarFlotante("parcialDos");
    let parcialTres = recuperarFlotante("parcialTres");
    
    promedio = calcularPromedio(parcialUno, parcialDos, parcialTres);
    let msgReprobado = promedio.toFixed(2) + " - REPROBADO";
    let msgAprobado = promedio.toFixed(2) + " - BUEN TRABAJO";
    let msgExcelente = promedio.toFixed(2) + " - EXCELENTE";

    if(promedio > 0 && promedio < 5) {
        cambiarTexto("lblResultado", msgReprobado);
        cambiarImagen("lblImagen", "./img/reprobado.gif");
    } else if(promedio >= 5 && promedio <= 8) {
        cambiarTexto("lblResultado", msgAprobado);
        cambiarImagen("lblImagen", "./img/aprobado.gif");
    } else if(promedio > 8 && promedio <= 10) {
        cambiarTexto("lblResultado", msgExcelente);
        cambiarImagen("lblImagen", "./img/excelente.gif");
    } else {
        cambiarTexto("lblResultado", "DATOS INCORRECTOS...");
        cambiarImagen("lblImagen", "./img/error.gif");
    }

}