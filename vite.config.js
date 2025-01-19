// export default {
//     // Optionally, define the root directory if your HTML files are not in the root
//     root: './', 
//   };

import { defineConfig } from "vite";
import { resolve} from "path";
import { register } from "module";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "AboutUs.html"),
        contact: resolve(__dirname, "contact.html"),
        products: resolve(__dirname, "products.html"),
        addToCart: resolve(__dirname, "addToCart.html"),
        grocery: resolve(__dirname, "grocery.html"),
        beauty: resolve(__dirname, "beauty.html"),
        homecare: resolve(__dirname, "homecare.html"),
        accessories: resolve(__dirname, "accessories.html"),
        productDetails: resolve(__dirname, "productDetails.html"),
        orderConfirmation: resolve(__dirname, "orderconfirmation.html"),
        login: resolve(__dirname, "login.html"),
        register: resolve(__dirname, "register.html"),
        checkout: resolve(__dirname, "checkout.html"),


      },
    },
  },

});

