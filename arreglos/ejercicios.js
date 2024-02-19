let notas = [];

agregarElementos = function() {
    notas.push(5);
    notas.push(10);

    console.log(notas.length);
}

recorrerArreglo = function() {
    let notaR;
    for(let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice];
        console.log(notaR);
    }
}

probarAgregar = function() {
    let notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota = function(nota) {
    notas.push(nota);
}

ejecutarPromedio = function() {
    let valorPromedio = calcularPromedio();
    mostrarTexto("lblPromedio", valorPromedio);
}

calcularPromedio = function() {
    let sumaNotas = 0;
    let promedio;

    for(let i = 0; i < notas.length; i++) {
        promedio = notas[i];
        sumaNotas = sumaNotas + promedio; 
    }

    promedio = sumaNotas / notas.length;
    return promedio;
}