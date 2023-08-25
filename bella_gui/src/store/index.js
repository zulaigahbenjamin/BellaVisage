import { createStore } from 'vuex';

const miniUrl = 'https://zulaigahsapi.onrender.com/';
export default createStore({
  state: {
    users: null,
    user: null,

    token: null,
    msg: null,
    chosenProduct: null,
    // new stuff
    // selectedProduct: null,

    products: null,
    product: null,
    message: null,
    properties: null,
    property: null,
    asc: true,

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
    setSpinner(state, products) {
      state.showSpinner = products;
    },
    sortPropertiesByPrice: (state) => {
      state.properties.sort((a, b) => {
        return a.price - b.price;
      });
      if (!state.asc) {
        state.properties.reverse();
      }
      state.asc = !state.asc;
    },

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
    async fetchProduct(context, id) {
      try {
        let response = await fetch(`${miniUrl}products/${id}`);
        let results = await response.json();
        context.commit("SET_PRODUCT", results);
      } catch (error) {
        alert(error.message);
      }
    },


    
   
  },
  modules: {},
});