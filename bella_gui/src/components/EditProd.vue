<template>
  <div>
    <div class="container flex-container" v-if="product">
      <label for="productName">Name</label>
      <input
        type="text"
        autocomplete="off"
        required
        id="productName"
        name="productName"
        v-model="product.prodName"
        :placeholder="product.prodName"
      />
      <label for="quantity">Quantity</label>
      <input
        type="text"
        autocomplete="off"
        required
        id="quantity"
        name="quantity"
        v-model="product.quantity"
        :placeholder="product.quantity"
      />

      <label for="quantity">Price</label>
      <input
        type="text"
        autocomplete="off"
        required
        id="amount"
        name="amount"
        v-model="product.amount"
        :placeholder="product.amount"
      />

      <label for="quantity">Category</label>
      <input
        type="text"
        autocomplete="off"
        required
        id="category"
        name="category"
        v-model="product.category"
        :placeholder="product.category"
      />

      <label for="image">Image</label>
      <input
        type="text"
        autocomplete="off"
        required
        id="prodURL"
        name="prodURL"
        v-model="product.prodURL"
        :placeholder="product.prodURL"
      />
     

      <label for="category">Category</label>
      <input
        type="text"
        autocomplete="off"
        required
        id="category"
        name="category"
        v-model="product.category"
        :placeholder="product.category"
      />

      <button @click="updateProduct(product.prodId)" class="btn-submit">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      prodName: "",
      quantity: "",
      amount: "",
      category: "",
      prodURL: "",
    };
  },
  methods: {
    async updateProduct() {
      try {
        await axios.put(
          `https://nodejseomp.onrender.com/products/${this.$route.params.id}`,
          {
            prodName: this.product.prodName,
            quantity: this.product.quantity,
            amount: this.product.amount,
            category: this.product.category,
            prodURL: this.product.prodURL,
          
          }
        );
        this.prodName = "";
        this.quantity = "";
        this.amount = "";
        this.category = "";
        this.prodURL = "";
        

        this.$router.push("/admin");
      } catch (err) {
        console.log(err);
      }
    },
  },
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.prodId),
      this.$store.dispatch("getProducts");
  },
};
</script>

<style scoped>

</style>
