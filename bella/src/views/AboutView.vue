<template>
  <div>
    <label for="productId">Enter Product ID:</label>
    <input v-model="inputProductId" type="text" id="productId" />
    <button @click="fetchProduct">Fetch Product</button>
  </div>
  <section>
    <div id="app">
      <h2>Add a New Product</h2>
      <form @submit.prevent="addNewProduct">
        <label for="name">Product Name:</label>
        <input type="text" id="name" v-model="newProduct.name" required />

        <label for="price">Price:</label>
        <input
          type="number"
          id="price"
          v-model.number="newProduct.price"
          required
        />

        <label for="description">Description:</label>
        <textarea
          id="description"
          v-model="newProduct.description"
          required
        ></textarea>

        <label for="category">Category:</label>
        <input
          type="text"
          id="category"
          v-model="newProduct.category"
          required
        />

        <button type="submit">Add Product</button>
        <td>
          <tr v-for="product in products" :key="product.productsID" class="bord">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>R {{ product.price }}</td>
            <td>{{ product.description }}</td>
            <td><img class="tableImg" :src="productsID.img" alt="" /></td>
          </tr>
        </td>
      </form>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { insertProduct } from "../store/index";

export default {
  components: { insertProduct },
  data() {
    return {
      inputProductId: "",
      newProduct: {
        name: "",
        price: 0,
        description: "",
        image: "",
        category: "",
      },
    };
  },
  methods: {
    ...mapActions(["fetchProductById"]),

    fetchProduct() {
      if (this.inputProductId) {
        this.fetchProductById(this.inputProductId);
      }
    },

    async addNewProduct() {
      try {
        const response = await fetch('http://localhost:5002/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.newProduct),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Product added:', data);
          // Clear the form or perform other actions
        } else {
          console.error('Failed to add product');
        }
      } catch (error) {
        console.error('Error adding product:', error);
      }
    },

  },
};
</script>
