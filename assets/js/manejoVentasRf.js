
    //Refrescos
    const botonAgregarRfFanta = document.querySelector("#botonAgregarRfFanta");
    const botonAgregarRfSprite = document.querySelector("#botonAgregarRfSprite");
    const botonAgregarRfPepsi = document.querySelector("#botonAgregarRfPepsi");
    const botonAgregarRfCoca = document.querySelector("#botonAgregarRfCoca");
    //Cartas Refrescos
    const cartaRfFanta = document.querySelector("#cartaRfFanta");
    const cartaRfSprite = document.querySelector("#cartaRfSprite");
    const cartaRfPepsi = document.querySelector("#cartaRfPepsi");
    const cartaRfCoca = document.querySelector("#cartaRfCoca");

   

 
    const modalMostrarFactura = document.querySelector("#modalMostrarFactura");

        

function funcionLeerProducto(cartaProducto){
   let nombreProducto = cartaProducto.childNodes[3].childNodes[1].innerText;
   let precioProducto = cartaProducto.childNodes[3].childNodes[5].innerText;
   let idLeerCantidad = cartaProducto.childNodes[3].childNodes[7].childNodes[3].id;
   let cantidadElegida = document.querySelector("#"+idLeerCantidad).value;

   if(cantidadElegida == 0 ||  cantidadElegida<0){
    Swal.fire({
        title: "La cantidad que ingresaste no es valida!",
        text: "El producto no ha sido agregado!",
        icon: "error"
      });

   }
   else{
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
   
   
}




//Refrescos
botonAgregarRfFanta.addEventListener('click',()=>{
    funcionLeerProducto(cartaRfFanta); 
});
botonAgregarRfSprite.addEventListener('click',()=>{
    funcionLeerProducto(cartaRfSprite); 
});
botonAgregarRfPepsi.addEventListener('click',()=>{
    funcionLeerProducto(cartaRfPepsi); 
});
botonAgregarRfCoca.addEventListener('click',()=>{
    funcionLeerProducto(cartaRfCoca); 
});





