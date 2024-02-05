calcularPromedio = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular1 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) {
        alert("Ingrese un número por favor...")
    } else {
        nota2 = recuperarFloat("txtNota2");
        if (isNaN(nota2)) {
            alert("Ingrese un número en el segundo campor por favor...")
        } else {
            nota3 = recuperarFloat("txtNota3");
            if (isNaN(nota3)) {
                alert("Ingrese un número en el tercer campo por favor...")
            } else {
                resultado = calcularPromedio(nota1, nota2, nota3);
                resultadoFormato = resultado.toFixed(2);
                mostrarTexto("lblResultado", resultadoFormato);
            }
        }
    }
}

calcular2 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existeError = false;

    nota1 = recuperarFloat("txtNota1");
    if(isNaN(nota1)) {
        alert("Error");
        existeError = true;
    }

    nota2 = recuperarFloat("txtNota2");
    if(isNaN(nota2)) {
        alert("Error");
        existeError = true;
    }

    nota3 = recuperarFloat("txtNota3");
    if(isNaN(nota3)) {
        alert("Error");
        existeError = true;
    }

    if(existeError == false) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    }

}

calcular = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existeError = false;

    nota1 = recuperarFloat("txtNota1");
    nota2 = recuperarFloat("txtNota2");
    nota3 = recuperarFloat("txtNota3");


    if(esNotaValida(nota1, "lblError1") & esNotaValida(nota2, "lblError2") & esNotaValida(nota3, "lblError3")) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    } else { 
        mostrarTexto("lblResultado", "0.0");
    }

}

esNotaValida = function(nota, idComponenteError) {
    if(isNaN(nota)) {
        mostrarTexto(idComponenteError, "Debe ingresar un número valido por favor");
        return false;
    } else {
        if(nota >= 0 && nota <= 10) {
            mostrarTexto(idComponenteError, "");
            return true;
        } else {
            mostrarTexto(idComponenteError, "El número debe estar en 0 y 10");
            return false;
        }
    }
}