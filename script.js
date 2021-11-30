//Lista de todos los productos en stock
let stock = document.getElementsByClassName("products_imgcontainer_price");
let contenedor = document.getElementsByClassName("container_one");


for ( const products of stock){
    console.log(products.innerHTML);
}


let boton = document.createElement("button");
boton.innerHTML = "<button>Añadir al carrito</button>";
document.getElementById("contenedor").appendChild(boton);

boton.parentNode.removeChild(boton);