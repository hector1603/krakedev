let puntosUsuario = 0;
let puntosComputador = 0;

jugar = function(seleccionado) {
    let msg;
    let elemento = generarElemento();
    let ruta = generarRuta(elemento);

    cambiarImagen("imgComputador", ruta);

    let result = determinarGanador(elemento, seleccionado);

    if(result == 0) {
        mostrarTexto("txtResultado", "EMPATE");
    } else if(result == 1) {
        mostrarTexto("txtResultado", "PERDISTE LA PARTIDA");
    } else if(result == 2) {
        mostrarTexto("txtResultado", "GANASTE LA PARTIDA");
    }
}