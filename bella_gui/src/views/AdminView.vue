<template>
  <div class="about">
    <h1 class="h1two">Admin Page:</h1>
    <div class="table-responsive" style="margin-top: 1rem" v-if="users">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Image</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
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
                @click="editProduct(item)"
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
                @click="deleteProduct(item.prodID)"
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
      <h1 class="h1two">Users:bust_in_silhouette:</h1>
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
          <tbody v-for="item in users" :key="item.userID">
            <tr>
              <th scope="row">{{ item.userID }}</th>
              <td>{{ item.firstName }}</td>
              <td>{{ item.lastName }}</td>
              <td>{{ item.userAge }}</td>
              <td>{{ item.Gender }}</td>
              <td>{{ item.userRole }}</td>
              <td>{{ item.emailAdd }}</td>
              <td>
                <img
                  :src="item.userProfile"
                  :alt="item.firstName"
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
</template>

<!-- <script>

 // import axios from "axios"
 export default {
   
   methods: {
     async editProduct(productId){
     },
     async deleteProduct(prodId){
       this.$store.dispatch('delFunction', prodId)
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
   computed:{
     products(){
       return this.$store.state.product
     },
     
     users() {
       return this.$store.state.users
     }
   },
   mounted(){
     this.$store.dispatch('fetchProducts')
     this.$store.dispatch('fetchUsers')
   }
 }
 </script> -->

<script>
//  import Spinner from "@/components/SpinnerComponent.vue"
// import axios from "axios"
export default {
     components:{
       Spinner
     },
  methods: {
    async editProduct(product) {},
    async deleteProduct(prodId) {
      this.$store.dispatch("delFunction", prodId);
    },
    async deleteUser(userId) {
      this.$store.dispatch("delFunction", userId);
    },
    fetchProduct() {
      axios
        .get("https://zulaigahsapi.onrender.com/products")
        .then((response) => {
          this.$store.commit("SET_PRODUCT", response.data);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
    this.$store.dispatch("fetchUsers");
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchUsers");
  },
};
</script>

<style>
.h1two {
  text-align: center;
}
</style>
