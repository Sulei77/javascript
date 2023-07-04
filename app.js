let carrito = "";
let nuevoOperacion = false;

let producto = prompt("Ingrese el nombre del producto que desea comprar (Campera, Remera, jean, billetera):");
let cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto} que desea comprar:`));

function hacerCarrito(producto, cantidad) {
    do {
        seleccionarProducto(producto, cantidad);
        nuevoOperacion = confirm("¿Desea agregar otro producto al carrito?");
        if (nuevoOperacion) {
            producto = prompt("Ingrese el nombre del producto que desea comprar (Campera, Remera, jean, billetera):");
            cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto} que desea comprar:`));
        }
    } while (nuevoOperacion);

    alert(`"Productos en el carrito:"\n ${carrito}`);
}

function seleccionarProducto(producto, cantidad) {
    switch (producto.toLowerCase()) {
        case "campera":
            carrito += `Campera - Cantidad: ${cantidad} - Precio Total: ${15000 * cantidad} pesos\n`;
            break;
        case "remera":
            carrito += `Remera - Cantidad: ${cantidad} - Precio Total: ${5500 * cantidad} pesos\n`;
            break;
        case "jean":
            carrito += `jean - Cantidad: ${cantidad} - Precio Total: ${22000 * cantidad} pesos\n`;
            break;
        case "billetera":
            carrito += `billetera - Cantidad: ${cantidad} - Precio Total: ${3500 * cantidad} pesos\n`;
            break;
        default:
            alert("El producto ingresado no está disponible.");
            break;
    }
}

hacerCarrito(producto, cantidad);