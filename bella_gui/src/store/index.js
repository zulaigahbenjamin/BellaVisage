import { createStore } from 'vuex';

const miniUrl = 'https://zulaigahsapi.onrender.com/';
export default createStore({
  state: {
    users: null,
    user: null,
<<<<<<< HEAD

    token: null,
    msg: null,
    chosenProduct: null,
    // new stuff
    // selectedProduct: null,

=======
    token: null,
    msg: null,
>>>>>>> 0294005e99b591f41de823103cc3717f40c52806
    products: null,
    product: null,
    message: null,
<<<<<<< HEAD
    properties: null,
    property: null,
    asc: true,
=======
>>>>>>> 0294005e99b591f41de823103cc3717f40c52806

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
<<<<<<< HEAD
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
=======
    }
>>>>>>> 0294005e99b591f41de823103cc3717f40c52806

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
<<<<<<< HEAD
    async fetchProduct(context, id) {
      try {
        let response = await fetch(`${miniUrl}products/${id}`);
        let results = await response.json();
        context.commit("SET_PRODUCT", results);
=======

    async fetchUsers(context) {
      try {
        let response = await fetch(`${miniUrl}users`);
        let { results } = await response.json();
        context.commit("setUsers", results);
>>>>>>> 0294005e99b591f41de823103cc3717f40c52806
      } catch (error) {
        alert(error.message);
      }
    },


    
   
  },
  modules: {},
});