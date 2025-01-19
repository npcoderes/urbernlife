import './style.css';

import products from "./api/products.json";

import { showProductContainer } from './homeProductCards';

//new--------
import { updateCartValue } from './updateCartValue';

// console.log(products);

//Define a function named 'showProductContainer' that takes an array of products as input.
// showProductContainer(products);

//new-----
document.addEventListener('DOMContentLoaded', () => {

    showProductContainer(products);

    const cartProducts = JSON.parse(localStorage.getItem('cartProductLS')) || [];
    updateCartValue(cartProducts);
});


