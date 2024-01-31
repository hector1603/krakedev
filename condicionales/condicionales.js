calcularTasaInteres = function(ingresoAnual) {
    let tasaInteres;

    if(ingresoAnual < 300000) {
        tasaInteres = (ingresoAnual * 16) / 100;
        return "La tasa de interes es el 16% " + tasaInteres;
    } else if(ingresoAnual >= 300000 && ingresoAnual < 500000) {
        tasaInteres = (ingresoAnual * 15) / 100;
        return "La tasa de interes es el 15% " + tasaInteres;
    } else if(ingresoAnual >= 500000 && ingresoAnual < 1000000) {
        tasaInteres = (ingresoAnual * 14) / 100;
        return "La tasa de interes es el 14% " + tasaInteres;
    } else if(ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
        tasaInteres = (ingresoAnual * 13) / 100;
        return "La tasa de interes es el 13% " + tasaInteres;
    } else if(ingresoAnual >= 2000000) {
        tasaInteres = (ingresoAnual * 12) / 100;
        return "La tasa de interes es el 12% " + tasaInteres;
    }
}
//let result = calcularTasaInteres(500000);
//console.log(result);

calcularCapacidadPago = function(edad, ingresos, egresos) {
    let capacidad;
    if(edad > 50) {
        capacidad = (ingresos - egresos) * 30 / 100;
        return "Su capacidad de pago es del 30% " + capacidad;
    } else if(edad <= 50) {
        capacidad = (ingresos - egresos) * 40 / 100;
        return "Su capacidad de pago es del 40% " + capacidad;
    }
}
//let result = calcularCapacidadPago(38, 500000, 50000);
//console.log(result);

calcularDescuento = function(precio, cantidad) {
    let valorAPagar;
    let descuento;
    if(cantidad < 3) {
        valorAPagar = precio * cantidad;
    } else if(cantidad >= 3 && cantidad <= 5) {
        descuento = (precio * cantidad) * 2 / 100;
        valorAPagar = (precio * cantidad) - descuento;
    } else if(cantidad >= 6 && cantidad <= 11) {
        descuento = (precio * cantidad) * 3 / 100;
        valorAPagar = (precio * cantidad) - descuento;
    } else if(cantidad >= 12) {
        descuento = (precio * cantidad) * 4 / 100;
        valorAPagar = (precio * cantidad) - descuento;
    }
    console.log(valorAPagar);
    return valorAPagar;
}
//calcularDescuento(30.0, 3);

/*
    Nivel de colesterol LDL  |  Categoría de colesterol LDL
-----------------------------|-----------------------------------
    Menos de 100 mg/dl	     |  Óptimo (lo mejor para su salud)
    Entre 100 y 129 mg/dl	 |  Casi óptimo
    Entre 130 y 159 mg/dl	 |  Límite superior del rango normal
    Entre 160 y 189 mg/dl	 |  Alto
    190 mg/dl o más	         |  Muy alto
*/
determinarColesterolLDL = function(nivelColesterol) {
    if(nivelColesterol < 100) {
        return "Óptimo (lo mejor para su salud)";
    } else if(nivelColesterol >= 100 && nivelColesterol <= 129) {
        return "Casi óptimo";
    } else if(nivelColesterol >= 130 && nivelColesterol <= 159) {
        return "Límite superiro del rango normal";
    } else if(nivelColesterol >= 160 && nivelColesterol <= 189) {
        return "Alto";
    } else if(nivelColesterol >= 190) {
        return "Muy alto";
    }
}
//let resultado = determinarColesterolLDL(160.9);
//console.log(resultado);

validarClave = function(clave) {
    if(clave.length >= 8 && clave.length <= 16) {
        return true;
    } else {
        return false;
    }
}
//let result = validarClave("Hola123456");
//console.log(result);

esMayuscula = function(caracter) {
    let ascii = caracter.charCodeAt(0);
    
    if(ascii >= 65 && ascii <= 90) {
        return ascii + " " + true;
    } else {
        return ascii + " " + false;
    }
}
//let result = esMayuscula("5");
//console.log(result);

esMinuscula = function(caracter) {
    let ascii = caracter.charCodeAt(0);

    if(ascii >= 97 && ascii <= 122) {
        return ascii + " " + true;
    } else {
        return ascii + " " + false;
    }
}
//let result = esMinuscula("í");
//console.log(result);

esDigito = function(caracter) {
    let ascii = caracter.charCodeAt(0);
    if(ascii >= 65 && ascii <= 122) {
        if(ascii > 90 && ascii < 97) {
            return ascii + " " + false;
        } else {
            return ascii + " " + true;
        }
    } else {
        return ascii + " " + false;
    }
}
//let result = esDigito("a");
//console.log(result);

darPermiso = function(notaMatematica, notaFisica, notaGeometria) {
    if(notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) {
        return true;
    } else {
        return false;
    }
}
//let result = darPermiso(60, 90, 10);
//console.log("Tiene permiso? " + result);

otorgarPermiso = function(notaMatematica, notaFisica, notaGeometria) {
    if((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80) {
        return true;
    } else {
        return false;
    }
}
//let result = otorgarPermiso(90, 10, 81);
//console.log(result);

dejarSalir = function(notaMatematica, notaFisica, notaGeometria) {
    if(notaMatematica > 90 && notaFisica > 90 && notaGeometria > 90) {
        if(notaFisica > notaMatematica) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
//let result = dejarSalir(90, 92, 91);
//console.log("2 condiciones: " + result)