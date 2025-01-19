import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

document.addEventListener("DOMContentLoaded", () => {
  // Extract product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"), 10);

  if (isNaN(productId)) {
    document.querySelector("#productDetailView").innerHTML = "<p>Invalid Product ID</p>";
    return;
  }

  // Fetch product data from JSON
  // fetch("./api/products.json")
  //   .then((response) => response.json())
  //   .then((products) => {
  //     const product = products.find((p) => p.id === productId);

  //     if (product) {
  //       displayProductDetails(product);
  //     } else {
  //       document.querySelector("#productDetailView").innerHTML = "<p>Product not found</p>";
  //     }
  //   })
  //   .catch((error) => console.error("Error loading product data:", error));


  fetch(new URL("./api/products.json", import.meta.url))
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((products) => {
      const product = products.find((p) => p.id === productId);

      if (product) {
        displayProductDetails(product);
      } else {
        document.querySelector("#productDetailView").innerHTML = "<p>Product not found</p>";
      }
    })
    .catch((error) => {
      console.error("Error loading product data:", error);
      document.querySelector("#productDetailView").innerHTML = "<p>Failed to load product data. Please try again later.</p>";
    });






});

function displayProductDetails(product) {
  document.querySelector("#detailedProductImage").src = product.image;
  document.querySelector("#detailedProductName").textContent = product.name;
  document.querySelector("#detailedProductDescription").textContent = product.description;
  document.querySelector("#detailedProductPrice").textContent = `₹${product.price}`;
  document.querySelector("#detailedProductActualPrice").textContent = `₹${product.actualprice}`;
  document.querySelector("#detailedProductStock").textContent = product.stock;

  const quantityElement = document.querySelector(".productQuantity");
  const stockElement = document.querySelector(".stockElement");
  const addToCartButton = document.querySelector(".add-to-cartbutton");

  let quantity=1;

  stockElement.addEventListener("click", (event) => {
    homeQuantityToggle(event, product.id, product.stock, true);
});

addToCartButton.addEventListener("click", (event) => {
  addToCart(event, product.id, product.stock,  null, true); // Pass quantity to the addToCart function
});





  // stockElement.addEventListener("click", (event) => {
  //   quantity = homeQuantityToggle(event, product.id, product.stock);
  //   quantityElement.textContent = quantity; // Update the displayed quantity
  // });

  // addToCartButton.addEventListener("click", (event) => {
  //   addToCart(event, product.id, product.stock,  null, true); // Pass quantity to the addToCart function
  // });

  // document.querySelector('.add-to-cartbutton').addEventListener('click', (event) => {
  //   addToCart(event, product.id, product.stock);
  // });

  // productClone.querySelector('.stockElement').addEventListener('click', (event) => {
  //   homeQuantityToggle(event, id, stock);
  // });
  
  document.querySelector("#productDetailView").classList.remove("hidden");
};



