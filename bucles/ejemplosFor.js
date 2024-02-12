mostrarNumero = function() {
    console.log("Antes del for...");

    for(let i = 0; i < 4; i++) {
        console.log(i);
    }
    console.log("Despues del for");
}

mostrarNumero2 = function() {
    console.log("Antes del for...");

    for(let indice = 1; indice <= 5; indice++) {
        console.log(indice);
    }

    console.log("Despues del for.");
}

mostrarPares = function() {
    console.log("Antes del for...");

    for(let i = 2; i <= 10; i += 2) {
        console.log(i);
    }

    console.log("Despues del for.");
}

mostrarInverso = function() {
    console.log("Antes del for...");

    for(let i = 10; i > 0; i--) {
        console.log(i);
    }
    console.log("Despues del for.");
}

hackearNasaPelis = function() {
    for(let i = 0; i <= 100; i += 10) { 
        console.log("Hackeando Nasa " + i + "%");
    }

    console.log("La Nasa ha sido hackeada XD");
}

mostarImpares = function() {
    console.log("Antes del for...");

    for(let i = 1; i <= 21; i+=2) {
        console.log(i);
    }

    console.log("Despues del for.");
}