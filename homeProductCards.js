import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";



const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");



export const showProductContainer = (products) => {
    if (!products || !productContainer) {
        return false;
    }

    products.forEach((curProd) => {
        const { id, name, category, brand, price, actualprice, stock, description, image } = curProd;

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector('#cardvalue').setAttribute('id', `card${id}`);

        

        productClone.querySelector('.category').textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productImage').alt = name;
        productClone.querySelector('.productStock').textContent = stock;
        productClone.querySelector('.productDescription').textContent = description;
        productClone.querySelector('.productPrice').textContent = `₹${price}`;
        productClone.querySelector('.productActualPrice').textContent = `₹${actualprice}`;



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





        productContainer.append(productClone);

    });


};

