<template>
  <div>
    <div class="container flex-container">
      <label>Id</label>
      <input type="number" autocomplete="off" required name="prodId" v-model="model.product.prodId" />


      <label>Name</label>
      <input type="text" autocomplete="off" required name="prodName" v-model="model.product.prodName" />
      <label>Quantity</label>
      <input type="text" autocomplete="off" required name="quantity" v-model="model.product.quantity" />
      <label>Price</label>
      <input type="number" autocomplete="off" required name="amount" v-model="model.product.amount" />
      <label>Category</label>
      <input type="text" autocomplete="off" required name="category" v-model="model.product.category" />
      <label>Image</label>
      <input type="text" autocomplete="off" required name="prodURL" v-model="model.product.prodUrl" />




      <button @click="addProduct" class="btn-submit">Submit</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: 'AddProductsComp',
  props: ['ToggleModal'],
  data() {
    return {
      model: {
        product: {
          prodId: '', // Make sure to include a prop for prodID or remove it if not needed
          prodName: '',
          quantity: '',
          amount: '',
          category: '', // 'category' should be 'Category' to match the v-model
          prodUrl: '',
        }
      }
    };
  },
  methods: {
    addProduct() {
      axios.post("https://zulaigahsapi.onrender.com/products", this.model.product)
        .then(response => {
          console.log("Product added:", response.data);

          // Emit an event to notify parent component to close the modal
          this.$emit('ToggleModal');
        })
        .catch(error => {
          console.error("Error adding product:", error);
          alert("An error occurred while adding the product.");
        });
    },
  }
};
</script>

