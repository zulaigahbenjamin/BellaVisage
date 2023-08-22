

<!-- ProductList.vue -->
<template>
  <div>
    <h2>Update a Product</h2>
    <input type="text">
    <button @click="deleteProduct(product.id)">Delete</button>
  </div>
</template>

<script>
export default {
  name: ["UpdateProduct"],
  data() {
    return {
      products: []
    };
  },
  methods: {
    // async fetchProducts() {
    //   const response = await fetch('https://zulaigahsapi.onrender.com/products');
    //   this.products = await response.json();
    // },
    async deleteProduct(productId) {
      const response = await axios.delete(`https://zulaigahsapi.onrender.com/products/${productId}`,
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
