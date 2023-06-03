const productos = [
    {id: 1, nombre: "Cubo Rubik 3x3", precio: 4500},
    {id: 2, nombre: "Cubo Rubik Ghost 3x3", precio: 7800},
    {id: 3, nombre: "Cubo Rubik Piramix", precio: 6200},
    {id: 4, nombre: "Cubo Rubik Mirror 2x2", precio: 6100}
];
let contenedor = document.getElementById("contenedor");
productos.forEach(producto => {
    let div = document.createElement("div");
    div.innerHTML = `
    <p> id : ${producto.id}</p>
    <p> nombre : ${producto.nombre}</p>
    <p> precio : ${producto.precio}</p>
    <button class="boton-compra">Agregar al carrito</button>
    <div class="opciones" style="display: none;">
    <button class="opcion">Default</button>
    <button class="opcion">Pastel</button>
    <button class="opcion">Neon</button>
    </div>
    `;
    contenedor.append(div);
});
const botonCompra = () => {
    console.log("Se ha agregado con éxito al carrito");
}
const toggleOpciones = (event) => {
    const opciones = event.target.nextElementSibling;
    opciones.style.display = (opciones.style.display === "none") ? "block" : "none";
}

const botonesCompra = document.getElementsByClassName("boton-compra");
for (let i = 0; i < botonesCompra.length; i++) {
    botonesCompra[i].addEventListener("click", toggleOpciones);
}

const opciones = document.getElementsByClassName("opcion");
for (let i = 0; i < opciones.length; i++) {
    opciones[i].addEventListener("click", (event) => {
        const opcionSeleccionada = event.target.textContent;
        console.log("Opción seleccionada:", opcionSeleccionada);
    });
}
