let puntosUsuario = 0;
let puntosComputador = 0;

jugar = function(seleccionado) {
    let elemento = generarElemento();
    let ruta = generarRuta(elemento);

    cambiarImagen("imgComputador", ruta);

    let result = determinarGanador(elemento, seleccionado);

    if(result == 0) {
        mostrarTexto("txtResultado", "EMPATE");
    } else if(result == 1) {
        mostrarTexto("txtResultado", "PERDISTE LA PARTIDA");
        puntosComputador = puntosComputador + 1;
        mostrarTexto("puntosComputador", puntosComputador);

        if(puntosComputador == 5) {
            mostrarTexto("result", "El computador te ha vencido.")
            puntosComputador = 0;
            puntosUsuario = 0;
        }
    } else if(result == 2) {
        mostrarTexto("txtResultado", "GANASTE LA PARTIDA");
        puntosUsuario = puntosUsuario + 1;
        mostrarTexto("puntosUsuario", puntosUsuario);

        if(puntosUsuario == 5) {
            mostrarTexto("result", "Has ganado el juego.")
            puntosUsuario = 0;
            puntosComputador = 0;
        }
    }
}