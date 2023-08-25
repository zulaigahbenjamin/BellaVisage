<template>
    <div class="container-fluid">
      <div class="row gap-3 justify-content-center" v-if="products">
        <div v-for="product of products" :key="product.id" :class="['col-12', 'col-sm-6', 'col-md-3', 'col-lg-' + product.size, 'my-4']">
          <div style="width:100%;height:100%;" class="card">
            <img :src="product.prodUrl" class="card-img-top" style="padding: 0.6rem;" height="150">
            <div class="card-body">
              <h5 class="card-title">{{ product.prodName }}</h5>
              <p class="card-text">{{ product.category }}</p>
              <p class="card-text">{{ product.amount }}</p>
              <button class="btn btn-product" @click="addToCart(product.id)">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div style="text-align:center !important; margin-top:3rem;" v-else>
        Loading...
        <SpinnerComp/>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    created() {
      this.fetchProducts();
    },
    data() {
      return {
        products: null
      };
    },
    methods: {
      fetchProducts() {
        axios
          .get('https://zulaigahsapi.onrender.com/products')
          .then(response => {
            this.products = response.data;
          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
      },
      addToCart(productId) {
        // Implement your addToCart logic here
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  