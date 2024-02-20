let frutas = ["Pera", "Manzana", "Sandia", "Papaya", "Melon"];

buscar = function(fruta) {
    let elemento;
    let frutaEncontrada = null;

    for(let i = 0; i < frutas.length; i++) {
        elemento = frutas[i];
        if(fruta == elemento) {
            frutaEncontrada = elemento;
            break;
        }
    }
    return frutaEncontrada;
}

buscarFruta = function() {
    let frutaRecuperada = recuperarTexto("txtFruta");
    let mostrarFruta = buscar(frutaRecuperada);

    if(mostrarFruta == null) {
        alert("No existe la fruta " + frutaRecuperada + " en el almacen.")
    } else {
        alert(frutaRecuperada + " encontrada.")
    }
}



let array = ["Manzana", "Pera", "Uva", "Durazno", "Aguacate"];

buscarIndex = function(valor) {
    let index = -1;

    for(let i = 0; i <= array.length; i++) {
        if(array[i] == valor) {
            index = i;
            break;
        }
    }
    return index;
}

console.log(buscarIndex("dfsjd"));
