import products from "./api/products.json";

import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";


let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {

     return cartProducts.some((curElem) => curElem.id === curProd.id);

});

console.log(filterProducts);

//to update the addToCart page

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
     filterProducts.forEach((curProd) =>{
       const { category, id, image, name, stock, price} = curProd;

       let productClone = document.importNode(templateContainer.content, true);

       const lSActualData = fetchQuantityFromCartLS(id, price);
     
       productClone.querySelector('#cardvalue').setAttribute("id",`card${id}`);
       productClone.querySelector('.category').textContent = category;
       productClone.querySelector('.productImage').src = image;
       productClone.querySelector(".productName").textContent = name;

       productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;
       productClone.querySelector(".productPrice").textContent = lSActualData.price;

       productClone.querySelector('.stockElement').addEventListener("click", (event) =>{
          incrementDecrement(event, id, stock, price);
       });



       productClone.querySelector('.remove-to-cart-button').addEventListener('click',() => removeProdFromCart(id));

       cartElement.appendChild(productClone);
     });
}
//showing the cart products
showCartProduct();

// calculating cart total in our cartProducts page.. means in selected offer summary section
updateCartProductTotal();

// Add the event listener for redirection here
document.addEventListener("DOMContentLoaded", () => {
     const checkoutButton = document.getElementById("proceedToCheckout");
     if (checkoutButton) {
         checkoutButton.addEventListener("click", () => {
             // Redirect to checkout.html
             window.location.href = "checkout.html";
         });
     }
 });
 