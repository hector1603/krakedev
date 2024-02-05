calcularValorDescuento = function(monto, porcentajeDescuento) {
    let valorDescuento;
    valorDescuento = (monto * porcentajeDescuento) / 100;
    return valorDescuento;
}

calcularIVA = function(monto) {
    let valorIVA;
    valorIVA = (monto * 12) / 100;
    return valorIVA;
}


calcularSubtotal = function(precio, cantidad) {
    let subTotal;
    subTotal = precio * cantidad;
    return subTotal;
}

calcularTotal = function(subtotal, descuento, iva) {
    let totalAPagar;
    totalAPagar = (subtotal - descuento) + iva;
    return totalAPagar;
}

calcularDescuentoPorVolumen = function(subTotal, cantidad) {
    let descuentoVolumen;
    if(cantidad < 3) {
        descuentoVolumen = 0; 
    } else if(cantidad >= 3 && cantidad <= 5) {
        descuentoVolumen = subTotal * 3 / 100;
    } else if(cantidad >= 6 && cantidad <= 11) {
        descuentoVolumen = subTotal * 4 / 100;
    } else if(cantidad >= 12) {
        descuentoVolumen = subTotal * 5 / 100;
    }
    return descuentoVolumen;
}