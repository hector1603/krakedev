numeroAleatorio = function() {
    let numAleatorio = parseInt((Math.random() * 100) + 1);
    return numAleatorio;
}

generarAleatorios = function() {
    let aleatorios = [];
    let numero;

    let numRecuperado = recuperarInt("txtNumero");
    if(numRecuperado >= 5 && numRecuperado <= 20) {
        for(let i = 0; i < numRecuperado; i++) {
            numero = numeroAleatorio()
            aleatorios.push(numero);
            console.log(i);
        }
        mostrarResultados(aleatorios);
    }
}

mostrarResultados = function(arregloNumeros) {

    let cmpTabla = document.getElementById("divTabla");
    let crearTabla = "<table><tr><th>Nro</th></tr>";
    let result;

    for(let i = 0; i < arregloNumeros.length; i++) {
        result = arregloNumeros[i];
        crearTabla += "<tr><td>";
        crearTabla += result;
        crearTabla += "</tr></td>";
    }
    crearTabla += "</table>"
    cmpTabla.innerHTML = crearTabla;
}