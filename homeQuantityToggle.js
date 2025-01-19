// export const homeQuantityToggle = (event, id, stock) => {
//     const currrentCardElement = document.querySelector(`#card${id}`);
//     // console.log(currrentCardElement);

//     const productQuantity = currrentCardElement.querySelector('.productQuantity');
//     // console.log(productQuantity);

//     let quantity = parseInt(productQuantity.getAttribute('data-quantity')) || 1;

//     if (event.target.className === "cartIncrement") {
//         if (quantity < stock) {
//             quantity += 1;
//         } else if (quantity === stock) {
//             quantity = stock;
//         }
//     }

//     if ((event.target.className === "cartDecrement")) {
//         if (quantity > 1) {
//             quantity -= 1;
//         }
//     }

//     productQuantity.innerText = quantity;
//     productQuantity.setAttribute('data-quantity', quantity.toString());
//     return quantity;
    

// };


export const homeQuantityToggle = (event, id, stock, isDetailsPage = false) => {
    let quantityElement;
    if (isDetailsPage) {
        // On the product details page
        quantityElement = document.querySelector('.productQuantity');
    } else {
        // On the homepage or product list
        const currrentCardElement = document.querySelector(`#card${id}`);
        quantityElement = currrentCardElement.querySelector('.productQuantity');
    }

    let quantity = parseInt(quantityElement.getAttribute('data-quantity')) || 1;
    // let quantity = 1;

    if (event.target.className === "cartIncrement") {
        if (quantity < stock) {
            quantity += 1;
        }
    } else if (event.target.className === "cartDecrement") {
        if (quantity > 1) {
            quantity -= 1;
        }
    }

    quantityElement.innerText = quantity;
    quantityElement.setAttribute('data-quantity', quantity.toString());
    return quantity;
};
