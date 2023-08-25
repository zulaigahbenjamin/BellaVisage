<template>
  <div class="about">
    <h1 class="h1two">Admin Table:</h1>
    <div class="table-responsive" style="margin-top: 1rem" v-if="users">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" id="display_disappear">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Image</th>
            <th scope="col">Edit</th>
           <th scope="co;">Delete</th>
          </tr>
        </thead>
        <tbody v-for="product in products" :key="product.prodId">
          <tr>
            <th scope="row">{{ product.prodId }}</th>
            <td>{{ product.prodName }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.amount }}</td>
            <td>{{ product.category }}</td>
            <td>
              <img
                :src="product.prodUrl"
                :alt="product.prodName"
                style="width: 5rem"
              />
            </td>
            <td>
              <button
                @click="editProduct(product)"
                class="btn btn-dark"
                data-bs-toggle=""
                data-bs-target="#exampleModal"
                data-bs-whatever=""
              >
                Edit
              </button>
            </td>
            <td>
              <button
                @click="deleteProduct(product.prodId)"
                class="btn btn-dark"
                data-bs-toggle=""
                data-bs-target="#exampleModal"
                data-bs-whatever=""
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h1 class="h1two">User Table:</h1>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">firstName</th>
              <th scope="col">lastName</th>
              <th scope="col">userAge</th>
              <th scope="col">Gender</th>
              <th scope="col">userRole</th>
              <th scope="col">emailAdd</th>
              <th scope="col">userProfile</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody v-for="user in users" :key="user.userId">
            <tr>
              <th scope="row">{{ user.userId}}</th>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userAge }}</td>
              <td>{{ user.Gender }}</td>
              <td>{{ user.userRole }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>
                <img
                  :src="user.userProfile"
                  :alt="user.firstName"
                  style="width: 5rem"
                />
              </td>
              <td>
                <button
                  class="btn btn-dark"
                  data-bs-toggle=""
                  data-bs-target="#exampleModal"
                  data-bs-whatever=""
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-dark"
                  data-bs-toggle=""
                  data-bs-target="#exampleModal"
                  data-bs-whatever=""
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="else" v-else>
      <Spinner/>
    </div>
  </div>
  <AddProducts/>
  <UpdateProducts/>
  <UpdateUser/>
  <AddUser/>
</template>

<script>
import axios from 'axios';
import AddProducts from "@/components/AddProduct.vue";
import AddUser from "@/components/AddUser.vue";
import UpdateProduct from "@/components/UpdateProduct.vue";
import UpdateUser from "@/components/UpdateUser.vue";
export default {
  components: {
    UpdateUser,
    AddProducts,
    AddUser,
    UpdateProduct
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    product() {
      return this.$store.state.product;
    },
    products(){
      return this.$store.state.products
    },
    user(){
      return this.$store.state.user
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
    this.$store.dispatch("fetchUsers");
  },
  methods: {
   
    async deleteProduct(prodId) {
    try {
      await axios.delete(`https://zulaigahsapi.onrender.com/products/${prodId}`);
      this.$store.dispatch("getProducts");
    } catch (err) {
      alert(err);
    }
  },
  },
};
</script>

<style>
.h1two {
  text-align: center;
}

@media screen and (max-width: 300px){
  .about{
    
    width: 100% !important;
  }

  .table-responsive{
    width: 100%;
  }
  
}
@media screen and (max-width: 500px){
.btn{
  padding: 1px;
  width: fit-content;
  
  font-size: 10px;
}
 img{
  width: 40px !important;
  padding: 0 ;
  margin: 0;
  height: 100%;

}
td{
  padding: 0;
  font-size: 10px;
}
th{
  font-size: 8px;
  padding: 0;
  margin: 0;
}
}
</style>
