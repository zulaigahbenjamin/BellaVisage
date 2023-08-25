<template lang="">
  <div>
    <!-- Slide show -->

    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div
        id="carouselExampleIndicators"
        class="carousel slide mb-5 mt-5"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://i.postimg.cc/7Ybwv2RY/Slide-Skin-care.png"
              class="d-block w-70 mx-auto"
              style="height: 300px; width: 46rem"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://i.postimg.cc/JnzfWwhH/11111.png"
              class="d-block w-70 mx-auto"
              style="height: 300px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://i.postimg.cc/0NPgcKRf/lll.png"
              class="d-block w-70 mx-auto"
              style="height: 300px"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- End of slideshow -->

      <!-- Card section -->
      <h2 class="text-caro"
        
      >
        KOREAN SKIN
      </h2>

      <!-- filter -->
      <!-- <h2 class="text-caro">Search Products</h2>

      <div class="sort-filter-container">
  <div class="filter-container">
    <label for="filter">Filter by:</label>
    <select id="filter">
      <option value="all">All Items</option>
      <option value="category1">Category 1</option>
      <option value="category2">Category 2</option>
      <option value="category3">Category 3</option>
    </select>
  </div>
  <div class="sort-container">
    <label for="sort">Sort by:</label>
    <select id="sort">
      <option value="relevance">Relevance</option>
      <option value="latest">Latest</option>
      <option value="popular">Popular</option>
      <option value="price-low">Price Low to High</option>
      <option value="price-high">Price High to Low</option>
    </select>
  </div>
</div>  -->

<!-- <select v-model="selectedCategory" @change="filter">
      <option value="">All</option> -->
    
      <!-- <option v-for="category in categories" :key="category">{{ category }}</option>
    </select>

    <select v-model="sortOrder" @change="sortProducts">
    <option value="asc">Low to High</option>
    <option value="desc">High to Low</option>
</select>

    <div v-for="product in filteredProducts" :key="product.prodID">
        <img :src="product.miniUrl" alt="Product Image" class="product-image" />
        <h3>{{ product.prodName }}</h3>
        <p>Price: R {{ product.amount }}</p>
        <p>Quantity: {{ product.quantity }}</p>
 </div> -->



    




      <div>
        <div class="container-fluid">
          <div class="row gap-3 justify-content-center" v-if="products">
            <div v-for="product of products" :key="product.id" class="col-12 col-sm-6 col-md-3 col-lg-${product.size} my-4">
              <div style="width:100%;height:100%;" class="card">
                <img :src="product. prodUrl" class="card-img-top" style="padding: 0.6rem;" height="390">
                <div class="card-body">
                  <h5 class="card-title">{{ product.prodName}}</h5>
                  <p class="card-text">{{ product.category}}</p>
                  <p class="card-text">{{ product.amount }}</p>
               <router-link :to ="{name: 'product', params: {id: product.prodId}}">See more</router-link>
                </div>
              </div>
            </div>
          </div>
          <div style="text-align:center !important; margin-top:3rem;" v-else>
            Loading...
          </div>
        </div>
      </div>
    </div>
  </div>



  <!-- Existing code -->

  <!-- <div class="modal" v-if="selectedProduct">
    <div class="modal-content">
      <span class="close-modal" @click="selectedProduct = null">&times;</span>
      <img :src="selectedProduct.prodUrl" :alt="selectedProduct.category" :class="pic">
      <h3>{{ selectedProduct.prodName }}</h3>
      <div>{{ selectedProduct.amount }}</div>
      <div>{{ selectedProduct.quantity }}</div>
      <div>{{ selectedProduct.prodId }}</div>
      <button>Buy Now</button>
    </div>
  </div>
 -->

</template>

<script>
<<<<<<< HEAD
import PostComp from '../components/PostComp.vue';
import FilterComp from '../components/FilterComp.vue';
import SpinnerComp from '../components/SpinnerComp.vue';
=======

>>>>>>> 0294005e99b591f41de823103cc3717f40c52806
export default {
  props: ["product"],
    data() {
        return {
            product: null,
            selectedProduct: null,
            sortOrder:null,
            selectedCategory: "", // Holds the selected category
            filteredProducts: [], // Holds the filtered products
            categories: ["Serum", "Moisturiser", "Facial Wash"],
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        properties() {
      return this.$store.state.properties?.filter((property) => {
        let isMatch = true;
        if (!property.title.toLowerCase().includes(this.search.toLowerCase())) {
          isMatch = false;
        }
        if (this.area !== "All" && this.area !== property.area) {
          isMatch = false;
        }
        return isMatch;
      });
    },
        
    },
    methods: {
    sortPrice() {
      this.$store.commit("sortPropertiesByPrice");
    },
  },
    
//     filter() {
//       this.filteredProducts = this.products.filter(product => {
//         return this.selectedCategory === "" || product.category === this.selectedCategory;
//       });
//     },

//     sortProducts() {
//         if (this.sortOrder === "asc") {
//             this.filteredProducts.sort((a, b) => a.amount - b.amount);
//         } else if (this.sortOrder === "desc") {
//             this.filteredProducts.sort((a, b) => b.amount - a.amount);
//         }
//       },

//       watch: {
//     selectedCategory: "filter", 
//     sortOrder: "sortProducts" 
// },

    mounted() {
        this.$store.dispatch('fetchProducts');
    },
<<<<<<< HEAD
    components: {
    SpinnerComp,
    FilterComp,
    PostComp
  }
=======
>>>>>>> 0294005e99b591f41de823103cc3717f40c52806
};
</script>

<style scoped>

a{
  /* color: white;
  border-radius: 8px;
  margin: 5px;
  margin-bottom: 5px !important;
  padding: 1px;
  background-color: #faaa94; */
  display: inline-block !important;
  text-decoration: none !important;
  color: white !important;
  background-color: #faaa94 !important;
  padding: 4px 6px !important;
  border-radius: 8px !important ;
  transition: background 0.2s !important;
}
a:hover{
  background-color: #faaa94 !important;
  box-shadow: 2px 2px 5px #ccc5b9, -2px -2px 5px#CCC5B9 !important;
}

.card-body{
  text-align: center;
  margin-bottom: 15px;
}
.container-Comp{
  display: flex;
  margin: 20px;
  border: solid red;
}

.half{
  width: 50%;

}


.sort-filter-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.filter-container,
.sort-container {
  display: flex;
  align-items: center;
  color: white;
}

.filter-container select,
.sort-container select {
  margin-left: 8px;
  padding: 6px;
  border: none;
  border-radius: 4px;
  background-color: #555;
  color: white;
}

label {
  font-weight: bold;
  margin-right: 6px;
}

/* Style the select arrow */
select::-ms-expand {
  display: none;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
}

/* Hover effect */
select:hover {
  background-color: #777;
}

/* Card */

.cards {
  border: 2px solid black;
}
/* end */

.hijab img {
  width: 18rem;
  height: 22rem;
}
.card-text {
  margin-left: 20px;
  text-align: center;
}
.card-title {
  margin-left: 10px;
  text-align: center;
}



.btn-product {
  box-shadow: 0 0 15px#FFFCF2 !important;
  background-color: #eb5e28 !important;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: white !important;
}

.btn-primary{
  box-shadow: 0 0 15px#FFFCF2 !important;
  background-color: #eb5e28 !important;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: white !important;
}
.btn-product:hover {
  box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#CCC5B9 !important;
}
/* end of card */



svg {
 width: 2.10em;
 transform-origin: center;
 animation: rotate4 2s linear infinite;
}

circle {
 fill: none;
 stroke: hsl(197, 75%, 49%);
 stroke-width: 2;
 stroke-dasharray: 1, 200;
 stroke-dashoffset: 0;
 stroke-linecap: round;
 animation: dash4 1.5s ease-in-out infinite;
}

@keyframes rotate4 {
 100% {
  transform: rotate(360deg);
 }
}

@keyframes dash4 {
 0% {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
 }

 50% {
  stroke-dasharray: 90, 200;
  stroke-dashoffset: -35px;
 }

 100% {
  stroke-dashoffset: -125px;
 }
}

@media screen and (max-width: 300px) {
  .d-block {
    width: 100% !important;
    height: 200px !important;
    padding: 20px !important;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Roboto:ital,wght@0,400;0,500;0,700;1,500&display=swap");

@media screen and (max-width: 500px) {
  a.anchor-button {
    margin-left: 0% !important;
    margin-left: 140px !important;
    margin-top: 750px !important;
    padding: 0% !important;
  }
}

@media screen and (max-width: 300px) {
  a.anchor-button {
    margin-left: 0% !important;
    margin-left: 36px !important;
    margin-top: 750px !important;
    padding: 0% !important;
  }
}

@media screen and (max-width: 600px) {
  a.anchor-button {
    margin-left: 0% !important;
    margin-left: 50px !important;
    margin-top: 750px !important;
    padding: 0% !important;
  }
}

@media screen and (max-width: 300px) {
  .single-testimonial-item {
    width: 100% !important;
    font-size: 15px;
    padding: 0% !important;
    margin: 0% !important;
  }
}

@media screen and (max-width: 300px) {
  h3.line-heading {
    font-size: 22px;
    margin: 0% !important;
    text-align: center !important;
  }

  h3.line-heading::after {
    width: 55%;
  }
  h2.line-head {
    font-size: 19px !important;
  }

  .spot-light {
    font-size: 20px !important;
  }
  .testi-review {
    font-size: 21px !important;
  }

  .stars {
    font-size: 29px !important;
    margin-top: 0px !important;
  }

  h2 span {
    font-size: 21px !important;
  }

  .carousel-item {
    width: 100% !important;
    font-size: 10px !important;
  }
  .text-caro{
    font-size: 17px !important;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: "Poppins", sans-serif;
}

.anchor-button {
  margin-left: 49rem !important;
  margin-top: 50rem !important;
}
.btn {
  color: white;

}

h1 {
  font-size: 50px;
  line-height: 64px;
  color: black;
  font-weight: 500;
}
h2 {
  font-size: 46px;
  line-height: 54px;
  color: black;
  font-weight: 400;
}
h4 {
  font-size: 20px;
  color: black;
}
h6 {
  font-size: 16px;
  font-weight: 700;
}

p {
  font-size: 16px;
  margin: 15px 0 20px 0;
  color: black;
}
.section-p1 {
  padding: 40px 80px;
}
.section-m1 {
  margin: 40px 0;
}
body {
  width: 100%;
}




/* ProductPage */
.text-caro{
  text-align: center;
  letter-spacing: 8px;
  font-size: 35px;
  margin: 3rem;
  color: black;
}


.btn-product {
  box-shadow: 0 0 15px grey !important;
  background-color: #ecc3b3 !important;
  margin-top: 2rem;
  padding: 6px !important;
  /* margin-left: 45rem !important; */
  margin-bottom: 2rem;
  color: white !important;
  
  
}

.btn-primary {
  box-shadow: 0 0 15px#FFFCF2 !important;
  background-color: red !important;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: white !important;
}
.btn-product:hover {
  box-shadow: 2px 2px 5px #ccc5b9, -2px -2px 5px#CCC5B9 !important;
}

@media screen and (max-width: 300px) {
  .carousel {
    width: 100% !important;
    height: 100%;
  }
  .d-block {
    width: 100% !important;
  }
  
  .text-carousel {
    font-size: 18px;
  }
  .heading-admin {
    width: 100%;
    font-size: 30px;
    padding: 0 !important;
    padding-left: 28px !important;
  }
  .instructions {
    font-size: 16px;
  }
}


.page-footer {
  position: fixed !important;
  right: 0 !important;
  bottom: 50px !important;
  display: flex !important;
  align-items: center !important;
  padding: 5px !important;
  z-index: 1 !important;
}

.page-footer a {
  display: flex !important;
  margin-left: 4px !important;
}
/* End of Slide Prods */

/* css for carousel */

h2,
h3 {
  font-weight: 700 !important;
}

.section-padding {
  padding: 80px 0 !important;
}

.section-title {
  text-align: center !important;
  margin-top: 10rem !important;
}

.section-borders span {
  height: 5px !important;
  background: #faaa94 !important;
  width: 40px !important;
  display: inline-block !important;
  border-radius: 2px !important;
}

.section-borders span.black-border {
  background: #333 !important;
  width: 30px !important;
  margin: 0 6px !important;
}

.client-testimonial-carousel .owl-dots button {
  height: 5px !important;
  background: #faaa94 !important;
  width: 20px !important;
  display: inline-block !important;
  margin: 5px !important;
  transition: 0.2s !important;
  border-radius: 2px !important;
}

.client-testimonial-carousel button.owl-dot.active {
  background: #333 !important;
  width: 30px !important;
}

.client-testimonial-carousel .owl-dots {
  text-align: center !important;
  margin-top: 25px !important;
}

.single-testimonial-item {
  position: relative !important;
  box-shadow: 0 0 6px #dadfd3 !important;
  padding: 20px !important;
  font-style: italic !important;
  padding-left: 85px !important;
}

.single-testimonial-item:before {
  font-family: "Font Awesome 5 Free" !important;
  content: "\f10e" !important;
  font-weight: 900 !important;
  position: absolute !important;
  left: 20px !important;
  top: 50% !important;
  font-size: 20px !important;
  color: #8f7e18 !important;
  line-height: 30px !important;
  margin-top: -15px !important;
}

.single-testimonial-item:after {
  background: #ddd !important;
  content: "" !important;
  height: 70% !important;
  left: 60px !important;
  position: absolute !important;
  top: 10% !important;
  width: 1px !important;
}

.single-testimonial-item h3 {
  font-size: 20px !important;
  font-style: normal !important;
  margin-bottom: 0 !important;
}

.single-testimonial-item h3 span {
  display: block !important;
  font-size: 12px !important;
  font-weight: normal !important;
  margin-top: 5px !important;
}
/* end of carousel */

/* footer */
.text-reset {
  text-decoration: none !important;
  color: #484848 !important;
}

.text-uppercase {
  color: black !important;
}
/* end of footer */

/* about */
strong {
  color: black !important;
  font-family: "Caveat", cursive !important;
  font-family: "Poppins", sans-serif !important;
}

span {
  color: pink !important;
  font-family: "Caveat", cursive !important;
  font-family: "Poppins", sans-serif !important;
}
/* about end */

#carouselExampleIndicators {
  margin-top: 4rem !important;
  justify-content: center !important;
}
</style>
