//Lista de todos los productos en stock
let stock = document.getElementsByClassName("products_imgcontainer_price");
console.log(stock[1].innerHTML);

for ( const products of stock){
    console.log(products.innerHTML);
}
