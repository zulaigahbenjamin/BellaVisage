<template>
  <div>
    <button v-if="product && product.prodId" type="button" class="btn btn-primary" @click="openEditModal(product.prodId)"
      data-bs-toggle="modal" :data-bs-target="'#exampleModal' + product.prodId">
      Update Products
    </button>
    <div v-if="product && product.prodId" class="modal fade" :id="'exampleModal' + product.prodId" tabindex="-1"
      :aria-labelledby="'exampleModalLabel' + product.prodId" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Update Products
            </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input placeholder="product Name" type="text" v-model="editingProduct.prodName" required />
            <input placeholder="quantity" type="number" v-model="editingProduct.quantity" required />
            <input placeholder="amount" type="number" v-model="editingProduct.amount" required />
            <input placeholder="category" type="text" v-model="editingProduct.category" required />
            <input placeholder="product image" type="text" v-model="editingProduct.prodUrl" required />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="saveProduct(product.prodId)">
              Save changes
            </button>
          </div>
        </div>
      </div>
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
    async addProduct() {
      try {
        await axios.post("https://zulaigahsapi.onrender.com/products/", {
          prodName: this.prodName,
          quantity: this.quantity,
          amount: this.amount,
          category: this.category,
          prodURL: this.prodURL,
          
        });

        this.productName = "";
        this.quantity = "";
        this.amount = "";
        this.category = "";
        this.prodURL = "";
      

        this.$router.push("/admin");
         alert("Product has been created");
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>



<!-- <script>
import axios from 'axios';

export default {
  props: ["product"],
  data() {
    return {
      editingProduct: {
        product: {
          prodName: "",
          quantity: 0,
          amount: 0,
          category: "",
          prodUrl: "",
        },
      },
    };
  },
  computed: {
    thisProduct() {
      return this.$store.state.product;
    },
  },
  methods: {

saveProduct(){
  axios.post("https://zulaigahsapi.onrender.com/products", this.editingProduct.product)
   .then(res => {
    console/log(res)
    alert(res.data.message);

    this.editingProduct.product ={
      prodName: "",
          quantity: '',
          amount: '',
          category: "",
          prodUrl: "",
    }
   })
   .catch(function (error ){ 
    if(error.response){
      if(error.response == 422){

      }
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    })
   })
},


    // openEditModal(prodId) {
    //   this.editingProductId = prodId;
    //   this.editingProduct = {
    //     ...this.$store.state.products.find(
    //       (product) => product.prodId === prodId
    //     ),
    //   };
    // },
    // updateProduct(prodId) {
    //   this.$store
    //     .dispatch("updateProduct", {
    //       prodId: prodId,
    //       ...this.editingProduct,
    //     })
    //     .then(() => {
    //       console.log("product successfully updated");
    //       setTimeout(() => {
    //         location.reload();
    //       }, 500);
    //     })
    //     .catch((err) => {
    //       console.error("Error while updating: ", err);
    //     });
    // },
  },
};
</script> -->

<style scoped></style>