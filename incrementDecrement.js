import { getCartProductFromLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {
    const currrentCardElement = document.querySelector(`#card${id}`);
    const productQuantity = currrentCardElement.querySelector('.productQuantity');
    const productPrice = currrentCardElement.querySelector('.productPrice');

    let quantity = 1;
    let localStoragePrice = 0;

    //get data from localstorage
    let localCartProducts = getCartProductFromLS();

    let existingProd = localCartProducts.find((curProd) => curProd.id === id);

    if (existingProd) {
        quantity = existingProd.quantity;
        localStoragePrice = existingProd.price;
    } else {
        localStoragePrice = price;
        price = price;
    }

    if (event.target.className === "cartIncrement") {
        if (quantity < stock) {
            quantity += 1;
        } else if (quantity === stock) {
            quantity = stock;
            localStoragePrice = price * stock;
        }
    }

    if ((event.target.className === "cartDecrement")) {
        if (quantity > 1) {
            quantity -= 1;
        }
    }

    // finally we will update the price in localStorage
    localStoragePrice = price * quantity;


    let updatedCart = { id, quantity, price: localStoragePrice };

    updatedCart = localCartProducts.map((curProd) => {
        return curProd.id === id ? updatedCart : curProd;
    });

    localStorage.setItem('cartProductLS', JSON.stringify(updatedCart));

    //also we need to reflect changes on the screen too
    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice;

    // calculating cart total in our cartProducts page.. means in selected offer summary section
    updateCartProductTotal();

};

