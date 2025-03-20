
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
const btnContinuarModal = document.querySelector("#btnContinuarModal");



function funcionAgregarDecimalesValor(valor){
  let valorString = valor.toString();
  if(valorString.length==5){
      
      return `${valorString.substring(0,2)}.${valorString.substring(2,6)}`
      
  }
  else if(valorString.length==6){
      return `${valorString.substring(0,3)}.${valorString.substring(3,7)}`
  }
  else if(valorString.length==7){
      return `${valorString.substring(0,1)}'${valorString.substring(1,4)}.${valorString.substring(4,8)}`
  }
  else if(valorString.length==8){
    return `${valorString.substring(0,2)}'${valorString.substring(2,5)}.${valorString.substring(5,9)}`
  }
  else{
      return valor;
  }
}
    

function funcionLeerProducto(cartaProducto){
  let nombreProducto = cartaProducto.childNodes[3].childNodes[1].innerText;
  let precioProducto = cartaProducto.childNodes[3].childNodes[5].innerText;
  let idLeerCantidad = cartaProducto.childNodes[3].childNodes[7].childNodes[3].id;
  let cantidadElegida = document.querySelector("#"+idLeerCantidad).value;
  if(cantidadElegida == 0 || cantidadElegida<0){
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

function funcionMostrarFactura(){

if(localStorage.length==0){
   
    Swal.fire({
        title: "No has selecionado ningun producto!",
        text: "Porfavor selecione uno!",
        icon: "error"
      })
      
      setTimeout(()=>{
        location.href="/index.html";
      },1000)

      
      
      
     

      
}
else{
const textoModalMostrarFactura = document.querySelector("#textoModalMostrarFactura");
let sumaTotal =0;

for (let i=1;i<=localStorage.length;i++){ 
let leerLocalStorage = JSON.parse(localStorage.getItem(i))
textoModalMostrarFactura.innerHTML+=`
<h5>Producto: ${leerLocalStorage.Producto}</h5>
<p>Cantidad: ${leerLocalStorage.Cantidad}</p><div class="separador"></div>
`
sumaTotal +=parseInt(leerLocalStorage.Precio*leerLocalStorage.Cantidad);
}
sumaTotal += 1500
let sumaConPuntos = funcionAgregarDecimalesValor(sumaTotal);
textoModalMostrarFactura.innerHTML+=`
<h4>Total a pagar: ${sumaConPuntos} </h4>
`


}



}




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

});

modalMostrarFactura.addEventListener('hidden.bs.modal',()=>{
textoModalMostrarFactura.innerHTML=`
`
localStorage.clear();
});

btnContinuarModal.addEventListener('click',()=>{
  Swal.fire({
    title: "Tu pedido ha sido aprobado!",
    text: "Gracias por su compra!",
    icon: "success"
  })
});