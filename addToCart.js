import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

// to get cart data from local stroage
// to update the cart value and also to get the data always ready from local storage
// getCartProductFromLS();


// to add data into localstorage
// export const addToCart = (event, id, stock) =>{

//     let arrLocalStorageProduct = getCartProductFromLS();

//     const curProdElement = document.querySelector(`#card${id}`);

//     let quantity = curProdElement.querySelector('.productQuantity').innerText;
//     let price = curProdElement.querySelector('.productPrice').innerText;

//     // console.log(quantity, price);

//     price = price.replace("₹","");

//     let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);

//     if(existingProd && quantity > 1){
//         quantity = Number(existingProd.quantity) + Number(quantity);
//         price = Number(price * quantity);

//         let updatedCart = { id, quantity, price};

//        updatedCart =  arrLocalStorageProduct.map((curProd) => {
//            return curProd.id === id ? updatedCart : curProd;
//         });
//         console.log(updatedCart);
//         localStorage.setItem('cartProductLS', JSON.stringify(updatedCart));

//         // show toast when product added to the cart
//         showToast("add", id);

//     }

//     if(existingProd) {
//         // alert('the product is already existed');
//         return false;
//     }
//     price = Number(price * quantity);
//     quantity = Number(quantity);


//     arrLocalStorageProduct.push({ id, quantity, price});
//     localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct));

//     //update cart button value
//     updateCartValue(arrLocalStorageProduct);

//     //show toast when product added to the cart
//     showToast("add", id);
// };




//previous one---
// export const addToCart = (event, id, stock, quantity = null, isDetailsPage = false) => {
//     let arrLocalStorageProduct = getCartProductFromLS();

//     let curQuantity, price;

//     if (isDetailsPage) {
//         const quantityElement = document.querySelector('.productQuantity');
//         const priceElement = document.querySelector('#detailedProductPrice');

//         if (!quantityElement || !priceElement) {
//             console.error('Quantity or Price element is missing on the product details page.');
//             return;
//         }

//         curQuantity = parseInt(quantityElement.innerText);
//         price = priceElement.innerText.replace("₹", "");
//     } else {
//         const curProdElement = document.querySelector(`#card${id}`);
//         if (!curProdElement) {
//             console.error(`Product card with ID ${id} is missing.`);
//             return;
//         }

//         const quantityElement = curProdElement.querySelector('.productQuantity');
//         const priceElement = curProdElement.querySelector('.productPrice');

//         if (!quantityElement || !priceElement) {
//             console.error('Quantity or Price element is missing in the product card.');
//             return;
//         }

//         curQuantity = parseInt(quantityElement.innerText);
//         price = priceElement.innerText.replace("₹", "");
//     }

//     if (quantity !== null) curQuantity = quantity;

//     let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);

//     if (existingProd) {
//         curQuantity += Number(existingProd.quantity);
//         if (curQuantity > stock) curQuantity = stock;

//         existingProd.quantity = curQuantity;
//         existingProd.price = curQuantity * price;

//         arrLocalStorageProduct = arrLocalStorageProduct.map((curProd) =>
//             curProd.id === id ? existingProd : curProd
//         );
//     } else {
//         arrLocalStorageProduct.push({
//             id,
//             quantity: curQuantity,
//             price: curQuantity * price,
//         });
//     }

//     localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

//     updateCartValue(arrLocalStorageProduct);
//     showToast("add", id);
// };



//new---
export const addToCart = (event, id, stock, quantity = null, isDetailsPage = false) => {
    let arrLocalStorageProduct = getCartProductFromLS() || [];

    let curQuantity, price;

    if (isDetailsPage) {
        const quantityElement = document.querySelector('.productQuantity');
        const priceElement = document.querySelector('#detailedProductPrice');
        if (!quantityElement || !priceElement) return;

        curQuantity = parseInt(quantityElement.innerText, 10);
        price = parseFloat(priceElement.innerText.replace("₹", ""));
    } else {
        const curProdElement = document.querySelector(`#card${id}`);
        if (!curProdElement) return;

        const quantityElement = curProdElement.querySelector('.productQuantity');
        const priceElement = curProdElement.querySelector('.productPrice');
        if (!quantityElement || !priceElement) return;

        curQuantity = parseInt(quantityElement.innerText, 10);
        price = parseFloat(priceElement.innerText.replace("₹", ""));
    }

    if (quantity !== null) curQuantity = quantity;

    const existingProd = arrLocalStorageProduct.find((prod) => prod.id === id);

    if (existingProd) {
        curQuantity += Number(existingProd.quantity);
        if (curQuantity > stock) curQuantity = stock;

        existingProd.quantity = curQuantity;
        existingProd.price = curQuantity * price;

        arrLocalStorageProduct = arrLocalStorageProduct.map((prod) =>
            prod.id === id ? existingProd : prod
        );
    } else {
        arrLocalStorageProduct.push({ id, quantity: curQuantity, price: curQuantity * price });
    }

    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
    updateCartValue(arrLocalStorageProduct);
    showToast("add", id);

    
};


