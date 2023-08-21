<!-- <template lang="">
  <router-link to="/admin/add">Add</router-link>

  <div class="body" v-if="products">
<div class="row table-container">
<div class="col-12">
  <h1>Products</h1>
  
</div>
<div class="col">
  <table class="table is-striped is-bordered mt-2 is-fullwidth array-listsarray-lists"  @submit="deleteProduct">
    <thead>
      <tr>
        <th>#</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Category</th>
        <th>Image</th>
        <th>Edit/Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="products.productsID" class="bord">
        <td>{{ product.productsID }}</td>
        <td>{{ product.name }}</td>
        <td>R {{ product.price }}</td>
        <td>{{ product.category }}</td>
        <td><img class="tableImg" :src="product.img" alt="" /></td>
        <td>
          <button class="btn-edit">
            <router-link :to="{ name: 'admin edit', params: { id: product.productsID } }">
Edit
</router-link>
</button>
<button class="px-5 py-1 bg-red-500 text-white rounded-sm"
@click="deleteProduct( product.productsID )"
>
Delete
</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>
</div>

</template>
<script>
import router from '@/router';
import axios from "axios"

export default {
  props: ["product"],
  computed: {
    products() {
      return this.$store.state.products
    }
  },

  mounted() {
    this.$store.dispatch("getProducts")
  },

  methods: {
    async deleteProduct(id) {
      try {
        await axios.delete(`https://e-com-api-68tp.onrender.com/products/${id}`);
        this.$store.dispatch("getProducts")
      } catch (err) {
        alert(err);
      }
    },
  },
}



</script>

<style >

</style> -->


<!-- <template>
  <div>
    <h1>Add a Product</h1>
    <form @submit.prevent="addProduct">
      <input v-model="productName" placeholder="Product Name" required>
      <input v-model.number="productSize" type="number" placeholder="Product Size">
      <textarea v-model="productDescription" placeholder="Product Description"></textarea>
      <input v-model.number="productPrice" type="number" step="0.01" placeholder="Product Price" required>
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productName: '',
      productSize: null,
      productDescription: '',
      productPrice: null
    };
  },
  methods: {
    async addProduct() {
      try {
        const response = await fetch('/addProduct', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            productName: this.productName,
            productSize: this.productSize,
            productDescription: this.productDescription,
            productPrice: this.productPrice
          })
        });

        const data = await response.json();
        console.log(data.message);
      } catch (error) {
        console.error('Error adding product:', error);
      }
    }
  }
};
</script>

<style>
/* Add your CSS styling here */
</style> -->

<!-- ProductList.vue -->
<template>
  <div>
    <h2>Update a Product</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}
        <button @click="deleteProduct(product.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: []
    };
  },
  methods: {
    async fetchProducts() {
      const response = await fetch('https://zulaigahsapi.onrender.com/products');
      this.products = await response.json();
    },
    async deleteProduct(productId) {
      const response = await fetch(`https://zulaigahsapi.onrender.com/products/${productId}`, 
      { method: 'DELETE' });
      if (response.ok) {
        alert('Product deleted successfully');
        await this.fetchProducts();
      } else {
        alert('Error deleting product');
      }
    }
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>
