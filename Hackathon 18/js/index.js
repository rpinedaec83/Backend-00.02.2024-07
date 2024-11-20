const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevoPedido = document.createElement("div");
    nuevoPedido.classList = "tarjeta-producto";
    nuevoPedido.innerHTML = `
      <img src="./img/productos/${producto.id}.jpg">
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio}</p>
      <button>Agregar al carrito</button>
    `
    contenedorTarjetas.appendChild(nuevoPedido);
    nuevoPedido.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(producto))
  });
}


crearTarjetasProductosInicio(bicicletas);