const productosDisponibles = [
    { nombre: "campera", precio: 15000 },
    { nombre: "remera", precio: 5500 },
    { nombre: "jean", precio: 22000 },
    { nombre: "billetera", precio: 3500 },
];

let carrito = "";
let nuevoOperacion = false;

function buscarProducto(nombreProducto) {
    return productosDisponibles.find((producto) => producto.nombre === nombreProducto);
}

function calcularPrecioTotal(cantidad, precioUnitario) {
    return cantidad * precioUnitario;
}

function seleccionarProducto(producto, cantidad) {
    const productoEncontrado = buscarProducto(producto.toLowerCase());
    if (productoEncontrado) {
        const precioTotal = calcularPrecioTotal(cantidad, productoEncontrado.precio);
        carrito += `${productoEncontrado.nombre} - Cantidad: ${cantidad} - Precio Total: ${precioTotal} pesos\n`;
    } else {
        alert("El producto ingresado no está disponible.");
    }
}

function hacerCarrito() {
    do {
        let producto = prompt("Ingrese el nombre del producto que desea comprar (Campera, Remera, jean, billetera):");
        let cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto} que desea comprar:`));
        seleccionarProducto(producto, cantidad);
        nuevoOperacion = confirm("¿Desea agregar otro producto al carrito?");
    } while (nuevoOperacion);

    alert(`"Productos en el carrito:"\n ${carrito}`);
}

hacerCarrito();