import { addToCart } from './addToCart';
import products from './api/products.json';
import { getCartProductFromLS } from './getCartProducts';
import { homeQuantityToggle } from './homeQuantityToggle';



let cartProducts = getCartProductFromLS();

// Function to display products based on category
const showGroceryProducts = () => {
    // Filter products for the "Grocery" category
    const groceryProducts = products.filter(
        (product) => product.category.toLowerCase() === 'grocery'
    );


    const cartElement = document.querySelector("#productContainer");
    const templateContainer = document.querySelector("#productTemplate");

    // Clear the container before rendering
    cartElement.innerHTML = '';

    if (groceryProducts.length === 0) {
        cartElement.innerHTML = '<p>No products found in the Grocery category.</p>';
        return;
    }

    // Render each grocery product
    groceryProducts.forEach((curProd) => {
        const { id, name, category, image, price, actualprice, stock, description } = curProd;

        console.log(groceryProducts);
        // Clone the template
        const productClone = document.importNode(templateContainer.content, true);

        

        // Populate product data into the template
        productClone.querySelector('#cardvalue').setAttribute("id", `card${id}`);
        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.productDescription').textContent = description;
        productClone.querySelector('.productPrice').textContent = `₹${price}`;
        productClone.querySelector('.productActualPrice').textContent = `₹${actualprice}`;
        productClone.querySelector('.productStock').textContent = stock;

        
        productClone.querySelector('.stockElement').addEventListener('click', (event) => {
            homeQuantityToggle(event, id, stock);
        });
        productClone.querySelector('.add-to-cartbutton').addEventListener('click', (event) => {
            addToCart(event, id, stock);
        });

        // Add a clickable link to redirect to product details page
        const detailsLink = productClone.querySelector('.productImage');
        detailsLink.addEventListener('click', () => {
            window.location.href = `productDetails.html?id=${id}`;
        });




        // Append the product to the container
        cartElement.appendChild(productClone);
    });
};

// Call the function to display products
showGroceryProducts();

