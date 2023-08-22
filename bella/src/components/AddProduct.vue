<template>
  <div>
    <h2>Admin Page</h2>
    <AddProduct :products="products"/>
    <UpdateProduct/>
    <div class="app">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg- my-4"
        v-if="products"
        v-for="product in products"
        :key="product.id"
      >
        <div class="flex-container">
          <div class="card">
            <img :src="product.image" :alt="product.description" class="card-img-top" style="padding: 0.6rem;" height="450">
            <div class="card-body">
              <h1>{{ product.name }}</h1>
              <p class="card-text">{{ product.description }}</p>
              <p class="card-text">{{ product.price }}</p>
              <button class="btn btn-product" @click="addToCart(product.id)">Buy Now</button>
              <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
            </div>
          </div>
         
        </div>
        
      </div>
      <div v-else>Loading...</div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'; // Import the axios library

import AddProduct from '@/components/AddProduct.vue';
import UpdateProduct from '@/components/UpdateProduct.vue';

export default {
  components: { AddProduct, UpdateProduct },
  data() {
    return {
      // Initialize with your product data
      products: []
    };
  },
  methods: {
    deleteProduct(productId) {
      if (confirm("Are you sure you want to delete this product?")) {
        axios
          .delete(`https://zulaigahsapi.onrender.com/products/${productId}`)
          .then(response => {
            alert(response.data);
            this.fetchProducts(); // Call a method to fetch products again
          })
          .catch(error => {
            console.error("Error deleting product:", error);
          });
      }
    },
    addToCart(productId) {
      // Implement your addToCart logic here
    },
    fetchProducts() {
      axios.get('https://zulaigahsapi.onrender.com/products')
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    }
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>
