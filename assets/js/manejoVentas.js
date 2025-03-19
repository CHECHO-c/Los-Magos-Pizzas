
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

    //Postres
    const botonAgregarPtChocolate = document.querySelector("#botonAgregarPtChocolate");
    const botonAgregarPtCerezo = document.querySelector("#botonAgregarPtCerezo");
    const botonAgregarPtFlan = document.querySelector("#botonAgregarPtFlan");
    const botonAgregarPtCupcake = document.querySelector("#botonAgregarPtCupcake");
    const botonAgregarPtVainilla = document.querySelector("#botonAgregarPtVainilla");
    //Cartas Postres
    const cartaPtChocolate = document.querySelector("#cartaPtChocolate");
    const cartaPtCerezo = document.querySelector("#cartaPtCerezo");
    const cartaPtFlan = document.querySelector("#cartaPtFlan");
    const cartaPtCupcake = document.querySelector("#cartaPtCupcake");
    const cartaPtVainilla = document.querySelector("#cartaPtVainilla");    

    const botonComprar = document.querySelector("#botonComprar");
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

function funcionMostrarFactura(){
    const textoModalMostrarFactura = document.querySelector("#textoModalMostrarFactura");
    
   for (let i=1;i<=localStorage.length;i++){ 
    let leerLocalStorage = JSON.parse(localStorage.getItem(i))
    textoModalMostrarFactura.innerHTML+=`
   <h5>Producto: ${leerLocalStorage.Producto}</h5>
   <p>Cantidad: ${leerLocalStorage.Cantidad}</p><div class="separador"></div>
   `
   
   }
 
    
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

//Postres
botonAgregarPtChocolate.addEventListener('click',()=>{
    funcionLeerProducto(cartaPtChocolate); 
});
botonAgregarPtCerezo.addEventListener('click',()=>{
    funcionLeerProducto(cartaPtCerezo); 
});
botonAgregarPtFlan.addEventListener('click',()=>{
    funcionLeerProducto(cartaPtFlan); 
});
botonAgregarPtCupcake.addEventListener('click',()=>{
    funcionLeerProducto(cartaPtCupcake); 
});
botonAgregarPtVainilla.addEventListener('click',()=>{
    funcionLeerProducto(cartaPtVainilla); 
});

botonComprar.addEventListener('click',()=>{
    funcionMostrarFactura();
    // localStorage.clear();
});

modalMostrarFactura.addEventListener('hidden.bs.modal',()=>{
    textoModalMostrarFactura.innerHTML=`
   `
});













