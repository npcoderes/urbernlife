// const cartValue = document.querySelector('#cartValue');

// export const updateCartValue = (cartProducts) => {
//    return (cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`);
// };


//new----
const cartValue = document.querySelector('#cartValue');

export const updateCartValue = (cartProducts) => {
   if (!cartValue) return; // Ensure the cartValue element exists

   const distinctProductsCount = cartProducts.length; // Count unique products
   cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Add to Cart (${distinctProductsCount})`;
};



