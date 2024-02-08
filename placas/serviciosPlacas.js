validarEstructura = function (placa) {
    let errorres = "";

    if (placa.length != 7 && placa.length != 8) {
        errorres += "La placa debe tener 7 u 8 caracteres. ";
    }

    for (let i = 0; i < 3; i++) {
        if (!esMayuscula(placa[i])) {
            errorres += " El caracter " + (i + 1) + " debe ser una letra mayuscula.";
        }
    }

    if (placa.charAt(3) != "-") {
        errorres += " El caracter 4 debe ser un guion.";
    }

    for (let i = 4; i < placa.length; i++) {
        if (!esDigito(placa[i])) {
            errorres += " El caracter " + (i + 1) + " debe ser un digito.";
        }
    }

    if (errorres != '') {
        return errorres;
    } else {
        return null;
    }

}

obtenerProvincia = function (placa) {
    let provincia = null;
    if (placa.charAt(0) == "A") {
        provincia = "Azuay";
    }
    if (placa.charAt(0) == "B") {
        provincia = "Bolívar";
    }
    if (placa.charAt(0) == "U") {
        provincia = "Cañar";
    }
    if (placa.charAt(0) == "C") {
        provincia = "Carchi";
    }
    if (placa.charAt(0) == "X") {
        provincia = "Cotopaxi";
    }
    if (placa.charAt(0) == "H") {
        provincia = "Chimborazo";
    }
    if (placa.charAt(0) == "O") {
        provincia = "El Oro";
    }
    if (placa.charAt(0) == "E") {
        provincia = "Esmeraldas";
    }
    if (placa.charAt(0) == "W") {
        provincia = "Galápagos";
    }
    if (placa.charAt(0) == "G") {
        provincia = "Guayas";
    }
    if (placa.charAt(0) == "I") {
        provincia = "Imbabura";
    }
    if (placa.charAt(0) == "L") {
        provincia = "Loja";
    }
    if (placa.charAt(0) == "R") {
        provincia = "Los Ríos";
    }
    if (placa.charAt(0) == "M") {
        provincia = "Manabí";
    }
    if (placa.charAt(0) == "V") {
        provincia = "Morona Santiago";
    }
    if (placa.charAt(0) == "N") {
        provincia = "Napo";
    }
    if (placa.charAt(0) == "S") {
        provincia = "Pastaza";
    }
    if (placa.charAt(0) == "P") {
        provincia = "Pichincha";
    }
    if (placa.charAt(0) == "K") {
        provincia = "Sucumbíos";
    }
    if (placa.charAt(0) == "Q") {
        provincia = "Orellana";
    }
    if (placa.charAt(0) == "T") {
        provincia = "Tungurahua";
    }
    if (placa.charAt(0) == "Z") {
        provincia = "Zamora Chinchipe";
    }
    if (placa.charAt(0) == "Y") {
        provincia = "Santa Elena";
    }
    return provincia;
}

obtenerTipoVehiculo = function (placa) {
    let tipo = placa.charAt(1);
    let msg;
    if (tipo != esMayuscula(tipo)) {
        if (tipo == "A" || tipo == "Z") {
            msg = "Taxi o Autobus";
        } else if (tipo == "E") {
            msg == "Vehiculos gubernamentales";
        } else if (tipo == "X") {
            msg = "Vehiculo de tipo oficial";
        } else if (tipo == "S") {
            msg = "Vehiculo del gbierno provincial";
        } else if (tipo == "M") {
            msg = "Vehiculos municipales";
        } else {
            msg = "Vehiculo particular";
        }
    } else {
        msg = null;
    }
    return msg;
}

obtenerDiaPicoYPlaca = function (placa) {
    let dia;
    let domingo;
    let msg;
    let ultimoCaracter = placa.charAt(placa.length - 1);

    if (ultimoCaracter == 1 || ultimoCaracter == 2) {
        msg = "Lunes";
    } else if (ultimoCaracter == 3 || ultimoCaracter == 4) {
        msg = "Martes";
    } else if (ultimoCaracter == 5 || ultimoCaracter == 6) {
        msg = "Miercoles";
    } else if (ultimoCaracter == 7 || ultimoCaracter == 8) {
        msg = "Jueves";
    } else if (ultimoCaracter == 9 || ultimoCaracter == 0) {
        msg = "Viernes";
    } else {
        msg = "Libre circulación";
    }
    return msg;
}

limpiar = function () {
    document.getElementById("txtPlaca").value = '';
    cmpEstado.innerHTML = '';
    cmpErrores.innerHTML = '';
    cmpProvicia.innerHTML = '';
    cmpTipo.innerHTML = '';
    cmpSalida.innerHTML = '';

    console.log("Limpiaste toda la pantalla...");
}