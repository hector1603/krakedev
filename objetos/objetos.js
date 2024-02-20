probarAtributos = function() {
    let persona = { 
        nombre: "Hector",
        apellido: "Ajumado",
        edad: 29,
        estaVivo: true
    }

    console.log(persona.nombre);
    console.log(persona.edad);

    if(!persona.estaVivo) {
        console.log("No está vivo");
    } else {
        console.log("Está vivito y coleando.");
    }
}

crearProducto = function() {
    let producto1 = {
        nombre: "Manzana",
        precio: 2.5,
        stock: 10
    }

    let producto2 = {
        nombre: "Pera",
        precio: 1.5,
        stock: 15
    }

    console.log(producto1.nombre);
    console.log(producto2.precio);

    if(producto1.stock == producto2.stock) {
        console.log("Ambos productos tienen el mismo stock.");
    } else if(producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock.");
    } else if(producto1.stock < producto2.stock) {
        console.log("Producto 2 tiene mayor stock.");
    }
}

modificarAtributos = function() {
    let cuenta = {
        numero: "123456789",
        saldo: 0.0
    }

    cuenta.saldo = 100;
    cuenta.saldo += 10;

    console.log(cuenta.saldo);
}

crearClientes = function() {
    let cliente = {
        cedula: "123654",
        nombre: "HEctor"
    }

    let cliente1 = {}
    cliente1.nombre = "Pedro",
    cliente1.apellido = "Cruz",
    cliente1.cedula = "652389"
}

probarIncrementarSaldo = function() {
    let cta = {saldo: 100}
    incrementarSalso(cta, 35);
    console.log(cta.saldo);
}

probarDeterminarMayor = function() {
    let per1 = {nombre: "Juan", edad: 45}
    let per2 = {nombre: "Diego", edad: 30}
    let mayor = determinarMayor(per1, per2);

    if(mayor != null) {
        console.log("El mayor es: " + mayor.nombre);
    }
}

incrementarSalso = function(cuenta, monto) {
    cuenta.saldo += monto;
}

determinarMayor = function(persona1, persona2) {
    if(persona1.edad > persona2.edad) {
        return persona1;
    } else if(persona2.edad > persona1.edad) {
        return persona2;
    } else {
        return null;
    }
}