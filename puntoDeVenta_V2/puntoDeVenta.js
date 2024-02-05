calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento;

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto("txtProducto");

    esProductoValido = function() {
        if(nombreProducto === '') {
            mostrarTexto("lblError1", "Campo obligatorio");
        } else if(nombreProducto.length < 3 || nombreProducto.length > 10) {
            mostrarTexto("lblError1", "El nombre debe tener entre 3 a 10 carcteres");
        } else {
            mostrarTexto("lblError1", '');
        }
    }

    esProductoValido();

    //2. Recuperar el precio como float
    precioProducto = recuperarFloat("txtPrecio");

    esPrecioValido = function(precio, idComponenteError) {
        let precioValido = false;
        if(precio === null) {
            mostrarTexto(idComponenteError, "Campo obligatorio");
            precioValido = false;
        }else if(isNaN(precio) ) {
            mostrarTexto(idComponenteError, 'Debe ingresar un número valido')
            precioValido = false;
        } else if(precio <= 0 || precio >= 50) {
            mostrarTexto(idComponenteError, 'El precio debe estar entre 0 y 50')
            precioValido = false;
        } else if(precio > 0 && precio < 50) {
            mostrarTexto(idComponenteError, '');
            precioValido = true;
        }
        return precioValido;
    }  
    esPrecioValido(precioProducto, "lblError3");  
     
    //3. Recuperar cantidad como int
    cantidad = recuperarInt("txtCantidad");

    esCantidadValida = function(cantidad, idComponenteError) {
    let cantidadValida = false;

    if (cantidad === null) {
        mostrarTexto(idComponenteError, "Campo obligatorio");
    } else if (isNaN(cantidad)) {
        mostrarTexto(idComponenteError, 'Debe ingresar un número válido');
    } else if (cantidad <= 0 || cantidad > 100) {
        mostrarTexto(idComponenteError, "La cantidad debe estar entre 0 y 100");
    } else if (cantidad >= 0 && cantidad <= 100) {
        mostrarTexto(idComponenteError, '');
        cantidadValida = true;
    }

    return cantidadValida;
}


    esCantidadValida(cantidad, "lblError2");
    
    //4. Recuperar el porcentaje de descuento como int
    //porcentajeDescuento = recuperarInt("txtPorcentajeDescuento");

    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
    // los parametros cuando invoca la funcion.
    valorSubtotal = calcularSubtotal(precioProducto, cantidad);

    //5. Mostrar valorSubtotal en el componente lblSubtotal
    // Utilizar mostrarTexto
        /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4  
            Subtotal esperado: 54
        Si el caso de prueba es exitoso, hacer un commit
     */
    mostrarTexto("lblSubtotal", valorSubtotal);

    //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
    valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);

    //7. Mostrar el resultado en el componente lblDescuento
    /*
        Caso de prueba: 
            - cantidad: 10 
            - precioProducto: 5.4  
            - descuento: 10
            - Descuento esperado: 5.4
        Si el caso de prueba es exitoso, hacer un commit
     */
    mostrarTexto("lblDescuento", valorDescuento);

    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    // El IVA debe calcularse sobre el valor del subtotal menos el descuento
    valorIVA = calcularIVA(valorSubtotal - valorDescuento);

    //9. Mostrar el resultado en el componente lblValorIVA    
        /*
            Caso de prueba: 
                - cantidad: 10 
                - precioProducto: 5.4  
                - descuento: 10

                    - valorSubtotal: 54
                    - descuento:5.4
                    - valorSubtotal 
                    - descuento: 48.6

                IVA esperado: 5.832

            Si el caso de prueba es exitoso, hacer un commit
        */
    mostrarTexto("lblValorIVA", valorIVA.toFixed(3));

    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    valorTotal =  calcularTotal(valorSubtotal, valorDescuento, valorIVA);

    //11. Mostrar el resultado en el componente lblTotal
    /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4 
            - descuento: 10

                --valorSubtotal: 5.4
                --descuento: 5.4
                --IVA: 5.832

                Total esperado: 54.432

                Si el caso de prueba es exitoso, hacer un commit
       */
    mostrarTexto("lblTotal", valorTotal);
            
    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    /*
        Ejemplo: 
            Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
        Si funciona, hacer un commit
    */

}
limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
    */
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtCantidad", "");
    mostrarTextoEnCaja("txtPrecio", "");
    mostrarTextoEnCaja("txtPorcentajeDescuento", "");

    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
}
/* SI TODO FUNCIONA, HACER UN PUSH */