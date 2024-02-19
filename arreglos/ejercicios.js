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
    mostrarNotas()
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

generarTabla = function() {
    let crearTabla;
    let cmpTabla = document.getElementById("divTabla");
    crearTabla = "<table><tr><td>UNO</td></tr>" + "<table><tr><td>DOS</td></tr>"
    cmpTabla.innerHTML = crearTabla;
}

mostrarNotas = function() {
    let cmpTabla = document.getElementById("divTabla");
    let crearTabla = "<table><tr><th>Notas</th></tr>";
    let miNota;
    for(let i = 0; i < notas.length; i++) {
        miNota = notas[i];
        crearTabla += "<tr><td>";
        crearTabla += miNota;
        crearTabla += "</td></tr>";
    }
    crearTabla += "</table>";
    cmpTabla.innerHTML = crearTabla;
}