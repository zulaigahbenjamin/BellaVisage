import { createStore } from 'vuex';

const miniUrl = 'https://zulaigahsapi.onrender.com/';
export default createStore({
  state: {
    users: null,
    user: null,
    token: null,
    msg: null,
    products: null,
    product: null,
    message: null,

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
    }

    // new stuff
    // SET_SELECTED_PRODUCT(state, product) {
    //   state.selectedProduct = product;
    // },

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

    async fetchUsers(context) {
      try {
        let response = await fetch(`${miniUrl}users`);
        let { results } = await response.json();
        context.commit("setUsers", results);
      } catch (error) {
        alert(error.message);
      }
    },


    
   
  },
  modules: {},
});