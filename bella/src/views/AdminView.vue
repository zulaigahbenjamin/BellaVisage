<template>
  <div>
    <h2>Admin Page</h2>
    <label class="label">Product Name</label>
    <input class="input" v-model="name" type="text" placeholder="Product Name" required />
    <label class="label">Price</label>
    <input class="input" v-model="price" type="number" placeholder="R" required />
    <label class="label">Category</label>
    <input class="input" v-model="category" type="text" placeholder="Name" required />
    <label class="label">Image</label>
    <input class="input" v-model="img" type="text" placeholder="http://" required />
    <button class="btn btn-success mt-3" @click="addProduct">Add</button>
    <button onclick="deleteProduct(123)">Delete Product</button>
<input>
  </div>

  <div class="col-12 col-sm-6 col-md-4 col-lg- my-4">
    <div v-if="products" class="flex-container">
      <div v-for="product of products" :key="product.id">
        <!-- Render your product details here -->
        <div v-if="product" class="card">
          <img :src="product.image" :alt="product.description" :class="card - img - top" style="padding: 0.6rem;"
            height="450">
          <div class="card-body">
            <h1>{{ product.name }}</h1>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">{{ product.price }}</p>
            <button class="btn btn-product" onclick="addToCart({{product.id}})">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
  <h2>HELLOOOOOO</h2>
  <AdminTable />
</template>

<script>


import AddProduct from '@/components/AddProduct.vue';
import UpdateProduct from '@/components/UpdateProduct.vue'

export default {
  components: { AddProduct, UpdateProduct },
  data() {
    return {
      products: [] // Initialize with your product data
    };
  },
  methods: {
    deleteProduct(productId) {
      if (confirm("Are you sure you want to delete this product?")) {
        fetch(`/products/${productId}`, { method: 'DELETE' })
          .then(response => response.text())
          .then(result => {
            alert(result);
            // Optionally, you can refresh the product list or perform other actions.
            this.fetchProducts(); // Call a method to fetch products again
          })
          .catch(error => {
            console.error("Error deleting product:", error);
          });
      }
    },
    fetchProduct() {
      axios
        .get('https://zulaigahsapi.onrender.com/products')
        .then(response => {
          // Commit a mutation to update the state with the fetched data
          this.$store.commit('SET_PRODUCT', response.data);
        })
        .catch(error => {
          console.error('Error fetching product:', error);
        });
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>
<style></style>