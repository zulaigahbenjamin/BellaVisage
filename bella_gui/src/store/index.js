import { createStore } from 'vuex';
const miniUrl = 'https://zulaigahsapi.onrender.com/';
export default createStore({
  state: {
    products: null,
    product: null,
  },
  mutations: {
    SET_PRODUCTS(state, productData) {
      state.products = productData;
    },
    SET_PRODUCT(state, productData) {
      state.product = productData;
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
    }
  },
  modules: {},
});