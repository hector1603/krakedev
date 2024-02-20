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