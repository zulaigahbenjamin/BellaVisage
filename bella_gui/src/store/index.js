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
    showSpinner: true,
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
    },
    setSpinner(state, products) {
      state.showSpinner = products;
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
    async fetchProduct(context) {
      try {
        let response = await fetch(`${miniUrl}products`);
        let { results } = await response.json();
        context.commit("SET_PRODUCT", results);
      } catch (error) {
        alert(error.message);
      }
    },
  
    getUsers: async (context) => {
      try {
        const res = await fetch(`${miniUrl}users`);
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        const users = await res.json();
        context.commit("setUsers", users);
        context.commit("setSpinner", false);
      } catch (error) {
        context.commit("setSpinner", true);
        console.error("Error fetching users:", error);
      }
    },

    async getUser(context, id) {
      try {
        const res = await fetch(`${miniUrl}users/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch user by ID");
        }
        const { results, err } = await res.json();
        if (results) {
          context.commit("setUsers", results);
        } else {
          context.commit("setMessage", err);
        }
      } catch (error) {
        console.error("Error fetching user by ID:", error);
      }
    },
    // new stuff
    // async fetchProducts(context) {
    //   try {
    //     openProductModal(context, product);{
    //       context.commit('SET_SELECTED_PRODUCT', product);
    //     }
    //   } catch (error) {
    //     alert(error.message);
    //   }
    // },
  },
  modules: {},
});