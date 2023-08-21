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
    props: ["products"],
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
                await axios.delete(`https://zulaigahsapi.onrender.com/products/${id}`);
                this.$store.dispatch("getProducts")
            } catch (err) {
                alert(err);
            }
        },
    },
}



</script>

<style>

</style> -->


<!-- ProductForm.vue -->
<template>
  <div>
    <h2>Add Product</h2>
    <form @submit.prevent="addProduct">
      <label for="name">Name:</label>
      <input type="text" v-model="name" required>
      <label for="price">Price:</label>
      <input type="number" v-model="price" required>
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      price: ''
    };
  },
  methods: {
    async addProduct() {
      const response = await fetch('https://zulaigahsapi.onrender.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: this.name, price: this.price })
      });
      if (response.ok) {
        alert('Product added successfully');
        this.name = '';
        this.price = '';
      } else {
        alert('Error adding product');
      }
    }
  }
};
</script>
