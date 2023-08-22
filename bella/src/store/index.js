import { createStore } from 'vuex';
const miniUrl = 'https://zulaigahsapi.onrender.com/'

export default createStore({
  state: {
    products: null,
    product: null,
    AddProduct:null,
    UpdateProduct: null

  },
 
  mutations: {
    AddProduct(state, newProduct) {
      state.products.push(newProduct);
    },
    SET_PRODUCTS(state, productData) {
      state.products = productData;
    },

  },
  actions: {
    async fetchProducts(context) {
      try {
        let response = await fetch(`${miniUrl}products`);
        console.log(response);
        let { results } = await response.json();
        console.log(results);
        context.commit("SET_PRODUCTS", results);
      } catch (error) {
        alert(error.message);
      }
    },
    fetchDataFromServer() {
      fetch("https://zulaigahsapi.onrender.com/products")
        .then(response => response.json())  
        .then(data => console.log(data))
        .catch(error => console.error(error));
    },
    fetchProductById(context, productId) {
      fetch(`https://zulaigahsapi.onrender.com/products/${productId}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    },
    AddProduct(context, newProduct) {
      fetch("https://zulaigahsapi.onrender.com/products", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      })
      .then(response => response.json())
      .then(data => {
        context.commit('AddProduct', data);
      })
      .catch(error => console.error(error));
    }
    


  },
  
})
