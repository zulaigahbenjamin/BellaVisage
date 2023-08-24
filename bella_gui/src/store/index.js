import { createStore } from 'vuex';

const miniUrl = 'https://zulaigahsapi.onrender.com/';
export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    token: null,
    msg: null,
    chosenProduct: null
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, productData) {
      state.product = productData;
    },
    setUsers(state, users) {
      state.users = users;
    },
        setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },


  },
  actions: {
    async fetchProducts(context) {
      try {
        let response = await fetch(`${miniUrl}products`);
        let { results } = await response.json();
        context.commit("SET_PRODUCTS", results);
      } catch (error) {
        alert(error.message);
      }
    },
  },
  actions: {
    async fetchProduct(context) {
      try {
        let response = await fetch(`${miniUrl}products`);
        let { results } = await response.json();
        context.commit("SET_PRODUCT", results);
      } catch (error) {
        alert(error.message);
      }
    },
    async fetchProducts(context) {
      try {
        let response = await fetch(`${miniUrl}products`);
        let { results } = await response.json();
        context.commit("SET_PRODUCT", results);
      } catch (error) {
        alert(error.message);
      }
    },
  },
  modules: {},
});