<template>
  <div>
    <div class="form-container flex-container">
      <label class="form-label">Id</label>
      <input type="number" autocomplete="off" required name="prodId" v-model="model.product.prodId" />


      <label class="form-label">Name</label>
      <input type="text" class="form-input" autocomplete="off" required name="prodName" v-model="model.product.prodName" />

      <label class="form-label">Quantity</label>
      <input type="text" class="form-input" autocomplete="off" required name="quantity" v-model="model.product.quantity" />

      <label class="form-label">Price</label>
      <input type="number" class="form-input" autocomplete="off" required name="amount" v-model="model.product.amount" />

      <label class="form-label">Category</label>
      <input type="text" class="form-input" autocomplete="off" required name="category" v-model="model.product.category" />

      <label class="form-label">Image</label>
      <input type="text" class="form-input" autocomplete="off" required name="prodURL" v-model="model.product.prodUrl" />




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
<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}

.form-label {
  font-weight: bold;
  margin-bottom: 5px;
}

.form-input {
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: #e685e8;
}

.btn-submit {
  padding: 10px 15px;
  background-color: #94407e;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-submit:hover {
  background-color: #d290d3;
}
</style>

