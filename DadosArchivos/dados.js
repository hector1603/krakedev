jugar = function() {
    let aleatorio;
    aleatorio = lanzarDado();
    let mensajeGanar = "Es mayor a 3, GANASTE!!! 👍🏼";
    let mensajePerder = "No es mayor a 3, PERDISTE 👎🏼";

    cambiarTexto("lblNumero", aleatorio);
    if(aleatorio > 3) {
        cambiarTexto("lblMensaje", mensajeGanar);
    } else {
        cambiarTexto("lblMensaje", mensajePerder);
    }

}

lanzarDado = function() {
    let numAleatorio;
    let numDado;
    numAleatorio = parseInt(Math.random() * 6);
    numDado = numAleatorio + 1;
    return numDado;
}