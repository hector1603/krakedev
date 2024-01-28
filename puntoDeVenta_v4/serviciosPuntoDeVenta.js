calcularValorDescuento = function(monto, porcentajeDescuento) {
    let valorDescuento;
    valorDescuento = (monto * porcentajeDescuento) / 100;
    return descuento;
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