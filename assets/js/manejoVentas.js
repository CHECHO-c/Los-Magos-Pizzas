
    //Botones Pizzas
    const botonAgregarPzPeperoni = document.querySelector("#botonAgregarPzPeperoni");
    const botonAgregarPzPollo = document.querySelector("#botonAgregarPzPollo");
    const botonAgregarPzBbq = document.querySelector("#botonAgregarPzBbq");
    const botonAgregarPzVegetariana = document.querySelector("#botonAgregarPzVegetariana");
    const botonAgregarPzRanchera = document.querySelector("#botonAgregarPzRanchera");
    //Cartas Pizzas
    const cartaPzPeperoni = document.querySelector("#cartaPzPeperoni");
    const cartaPzPollo = document.querySelector("#cartaPzPollo");
    const cartaPzBbq = document.querySelector("#cartaPzBbq");
    const cartaPzVegetariana = document.querySelector("#cartaPzVegetariana");
    const cartaPzRanchera = document.querySelector("#cartaPzRanchera");
    
   

    
 
    const modalMostrarFactura = document.querySelector("#modalMostrarFactura");

        

function funcionLeerProducto(cartaProducto){
   let nombreProducto = cartaProducto.childNodes[3].childNodes[1].innerText;
   let precioProducto = cartaProducto.childNodes[3].childNodes[5].innerText;
   let idLeerCantidad = cartaProducto.childNodes[3].childNodes[7].childNodes[3].id;
   let cantidadElegida = document.querySelector("#"+idLeerCantidad).value;
   let i=localStorage.length;

   precioProducto = precioProducto.substring(7);    
    i++;
   let datosProducto={
    Producto:nombreProducto,
    Precio:precioProducto,
    Cantidad:cantidadElegida
   }
   localStorage.setItem(i,JSON.stringify(datosProducto));
   Swal.fire({
    title: "Agregado con exito!",
    text: "Se agrego el producto al carrito!",
    icon: "success"
  });
   
}


 
//Pizzas
botonAgregarPzPeperoni.addEventListener('click',()=>{
    funcionLeerProducto(cartaPzPeperoni); 
});
botonAgregarPzPollo.addEventListener('click',()=>{
    funcionLeerProducto(cartaPzPollo); 
});
botonAgregarPzBbq.addEventListener('click',()=>{
    funcionLeerProducto(cartaPzBbq); 
});
botonAgregarPzVegetariana.addEventListener('click',()=>{
    funcionLeerProducto(cartaPzVegetariana); 
});
botonAgregarPzRanchera.addEventListener('click',()=>{
    funcionLeerProducto(cartaPzRanchera); 
});



















