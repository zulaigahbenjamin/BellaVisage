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
      <h2 class="text-caro">Search Products</h2>

      <!-- <div class="sort-filter-container">
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
</div> -->

<select v-model="selectedCategory" @change="filter">
      <option value="">All</option>
      <!-- <option value="Necklaces">Necklaces</option> -->
      <option v-for="category in categories" :key="category">{{ category }}</option>
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
    </div>

      <!--End of filter -->

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
                  <button class="btn btn-product" @click="addToCart(product.id)">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div style="text-align:center !important; margin-top:3rem;" v-else>
            Loading...
           <SpinnerComp/>
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
import SpinnerComp from '../components/SpinnerComp.vue';
export default {
    data() {
        return {
            product: null,
            selectedProduct: null,
            selectedCategory: "", // Holds the selected category
            filteredProducts: [], // Holds the filtered products
            categories: ["Serum", "Moisturiser", "Facial Wash"],
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    
    filter() {
      this.filteredProducts = this.products.filter(product => {
        return this.selectedCategory === "" || product.category === this.selectedCategory;
      });
    },

    mounted() {
        this.$store.dispatch('fetchProducts');
    },
    components: {
    SpinnerComp
  }
};
</script>

<style scoped>

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
}
.card-title {
  margin-left: 10px;
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

/* header */
.nav-logo {
  width: 3rem;
}

nav {
  background: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  padding: 25px !important;
}
#navbar {
  display: flex;
  align-items: center;
  justify-content: center;
}
#navbar li {
  padding: 0 25px;
  position: relative;
}
#navbar li a {
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  color: black !important;
  transition: 0.5s ease;
}
#navbar li a:hover,
#navbar li a.active {
  color: black !important;
}
#navbar li a.active::after,
#navbar li a:hover::after {
  content: "";
  width: 56%;
  height: 2px;
  background: black !important;
  position: absolute;
  bottom: -4px;
  left: 20px;
}

/* Landing Page */
#hero {
  background-image: url(https://i.postimg.cc/1XvMr9n5/home-image.jpg);
  height: 97vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: right 0;
  background-size: cover;
  padding: 0 10rem;
  padding-bottom: 10rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  letter-spacing: 10px;
}

@media screen and (max-width: 300px) {
  .resp-text {
    font-size: 12px;
    font-weight: 900;
    margin: 0px;
    margin-bottom: 12px;
    letter-spacing: 1px;
    text-align: left;
  }

  .btn {
    font-size: 11px !important;
    letter-spacing: 0 !important;
    margin-top: 4px !important;
    text-decoration: none !important;
  }

  .category-box h3 {
    float: left;
    padding-left: 150px;
    font-size: 23px !important;
    margin-top: 100px !important;
  }
  .category-box label {
    float: left;
    padding-left: 150px;
    font-size: 25px !important;
  }
  .feature-btn {
    padding-top: 90px;
  }

  .image-feature {
    width: 100px;
    height: 80px;
  }

  html,
  body {
    overflow-x: hidden;
  }

  .feature-btn {
    float: left !important;
    margin-right: 10px !important;
    padding: 10px !important;
    padding-top: 5px !important;
    padding-bottom: 5px !important ;
  }
}

#hero h4 {
  padding-bottom: 1rem;
}
#hero h1 {
  color: red;
}

#hero button {
  letter-spacing: 3px !important;
  font-size: 14px !important;
  /* border-radius: 8px !important; */
  transition: all 0.2s ease-in-out !important;
  /* box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#FFFCF2 !important; */
  cursor: pointer !important;
  padding: 6px !important;
  /* margin-left: 30rem !important; */
  /* margin-top: 50rem !important; */
}

#hero button:hover {
  box-shadow: -2px -2px 5px #ccc5b9, 2px 2px 5px#FFFCF2 !important;
}

/* feature button */
.feature-btn {
  text-decoration: none;
  margin-top: 50px !important;
}

/* category */

.category-title {
  margin-top: 20px;
  margin-bottom: 10px;
}
.category-title h2 {
  text-align: center;
}
.category .category-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.category .category-box .box {
  margin: 30px 20px;
}
.category .category-box .box img {
  width: 600px;
  border-radius: 5px;
  height: 328px;
}

.category .category-box .box-content {
  position: absolute;
  z-index: 1;
  margin-left: 30px;
  margin-top: 100px;
}

.category .category-box .box-content h3 {
  color: #eb5e28;
  font-size: 30px;
  margin-top: 40px;
}

.category .category-box .box-content label {
  display: block;
  font-size: 27px;
  color: #eb5e28;
}
.category .category-box .box-content a {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 25px;
  font-size: 14px;
  border-radius: 25px;
  background: #fffcf2;
  transition: all 0.19s ease-in;
  color: black;
}
.category .category-box .box-content a:hover {
  background: silver;
}
.category .category-box .box-content.b2 {
  margin: 15px;
  text-align: left;
  margin-top: 100px;
}

/* banner section */
.banner_section {
  overflow: hidden;
}

/* Image styling for contact page */

.pfp {
  width: 100%;
  border-style: solid;
  border-width: 5px;
  border-radius: 50%;
  border-color: white;
}
.bttn {
  width: 90% !important;
}
.logo {
  margin: 0;
  padding: 0;
}
.btn {
  /* display: flex; */
  justify-content: center;
  align-items: center;
}

.input-ting {
  width: 90%;
}

.second {
  margin-bottom: 5rem;
  background-color: white !important;
  color: white !important;
}

form h2 {
  background-color: #1e1e1e !important;
  color: white !important;
  border: white !important;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: white;
}
#contact-box {
  margin-top: -0.9rem !important;
}

.bot {
  padding-top: 1rem;
  background-color: pink;
  color: white;
}

.bot p {
  color: white;
}
/* landing page preview cards */
.cards {
  border: 2px solid black;
}
/* end */

.hijab img {
  width: 18rem;
  height: 12rem;
  border: white;
}
.card-text {
  margin-left: 20px;
}
.card-title {
  margin-left: 10px;
}
.btn-contact {
  box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#FFFCF2 !important;
  padding: 3px;
  background-color: #eb5e28 !important;
}

.submit-btn {
  width: 100% !important;
  position: relative;
  display: flex;
  margin-left: 0 !important;
}
.logo-contact {
  width: 55%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
  border-radius: 50% 46% / 38% 40%;
  height: 290px;
  position: relative;
  top: 70px;
  left: 25%;
}
#contact {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

.hijab {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-top: 2rem;
  padding-bottom: 1.4rem;
  border: white !important;
}

#contactPage {
  background-image: url("https://i.postimg.cc/pV9bHMnx/unsplash-ta-O2f-C7sx-DU.png");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
}

#main-Section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.submitting {
  background-color: #faaa94 !important;
  width: 100% !important;
  margin-top: 2rem !important;
  margin-bottom: 2rem !important;
  color: white !important;
}
.submitting:hover {
  box-shadow: 0 0 15px#FFFCF2 !important;
}

/* ProductPage */
.text-caro{
  text-align: center;
  letter-spacing: 8px;
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

/* About Page */
.heading {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px auto;
}
.heading h3 {
  font-size: 50px;
  color: black;
  margin-bottom: 20px;
  position: relative;
}
.heading h3::after {
  content: "";
  margin: 0 auto;
  background-color: #333333;
  position: absolute;
  display: block;
  height: 4px;
  width: 100%;
}

.line-heading::after {
  content: "";
  margin: 0 auto;
  background-color: #faaa94;
  position: absolute;
  display: block;
  height: 4px;
  width: 18%;
  position: relative;
}

.container-about {
  width: 90%;
  margin: 0 auto;
  padding: 10px 20px;
}
.about {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
.about-image {
  flex: 1;
  margin-right: 40px;
  overflow: hidden;
}
.about-image img {
  max-width: 100%;
  display: block;
  transition: 0.6 ease;
  height: auto;
}
.about-content {
  flex: 1;
}
.about-content h2 {
  font-size: 25px;
  margin-bottom: 40px;
}

.about-content p {
  font-size: 18px;

  line-height: 2;
}
.about-content .read-more {
  display: inline-block;
  font-size: 20px;
  padding: 10px;
  text-decoration: none;
  border-radius: 20px;
  transition: 0.3s ease;
  background-color: #faaa94;
  color: white;
}
.about-content .read-more:hover {
  box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#CCC5B9;
}
@media screen and (max-width: 300px) {
  .heading {
    padding: 0px 20px;
  }

  .line-head::after {
    width: 70%;
  }
  .line-heading::after {
    width: 80%;
  }
  .heading-h1 {
    font-size: 20px;
  }

  .heading p {
    font-size: 15px;
    margin-bottom: 0px;
  }

  .container {
    padding: 0px;
    width: min(900px, 100px -3rem);
    margin-inline: auto;
  }

  .about {
    padding: 15px;
    flex-direction: column;
  }

  .about-image {
    margin: 0px;
    margin-bottom: 15px;
  }

  .about-content {
    padding: 0px;
    font-size: 12px;
  }

  .about-content .read-more {
    font-size: 15px;
  }

  .table thead {
    display: none;
  }
  .table,
  .yable tbody,
  .table tr,
  .yable td {
    display: block;
    width: 100%;
    font-size: 8px;
  }
  .table tr {
    margin: 10px;
  }
  .table tbody tr td {
    text-align: right;
    padding-right: 100%;
    position: relative;
  }

  /* .container{ */
  /* justify-content: center !important;
    display: flex !important;
    position: relative !important;
    padding: 0 10% !important;
    margin: 0px !important;
    overflow: hidden !important;
    font-size: 4px;}
   */
}

/* Admin Css */

.Admin-buttons {
  box-shadow: 0 0 15px#FFFCF2 !important;
  background-color: #eb5e28 !important;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: white !important;
  border: none;
  border-radius: 14px;
  padding: 3px;
}

.Admin-buttons:hover {
  box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#CCC5B9 !important;
}

#body-admin {
  justify-content: center;
  display: flex;
}
.app {
  width: 300px;
  border: 5px solid;
  border-radius: 10px;
  padding: 20px;
  width: 30%;
  height: 800px;
  margin: 100px;
  padding: 100px;
  overflow-y: scroll;
}

/* Slide Prods */
:root {
  --whitesmoke: whitesmoke !important;
  --darkred: #faaa94 !important;
  --platinum: #e5e5e5 !important;
  --black: #2b2d42 !important;
  --white: #fff !important;
  --thumb: #edf2f4 !important;
}

* {
  box-sizing: border-box;
  padding: 0 !important;
  /* margin: 0 !important; */
}

body {
  font: 16px / 24px "Rubik", sans-serif !important;
  color: #2b2d42 !important;
  background-color: #e5e5e5 !important;
  margin: 50px 0;
}

.container {
  max-width: 1400px !important;
  padding: 0 15px !important;
  margin: 0 auto !important;
}

h2 {
  font-size: 32px !important;
  margin-bottom: 1em !important;
}

.cardz {
  display: flex !important;
  padding: 25px 0px !important;
  list-style: none !important;
  overflow-x: scroll !important;
  scroll-snap-type: x mandatory !important;
}

.kard {
  display: flex !important;
  flex-direction: column !important;
  flex: 0 0 100% !important;
  padding: 20px !important;
  background-color: #fff !important;
  border-radius: 12px !important;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 15%) !important;
  scroll-snap-align: start !important;
  transition: all 0.2s !important;
}

.kard:not(:last-child) {
  margin-right: 10px !important;
}

.kard:hover {
  /* color: var(--white); */
  background-color: whitesmoke !important;
}

.kard .card-title {
  font-size: 20px !important;
}

.kard .card-content {
  margin: 20px 0 !important;
  max-width: 85% !important;
}

.kard .card-link-wrapper {
  margin-top: auto !important;
}

.kard .card-link {
  display: inline-block !important;
  text-decoration: none !important;
  color: white !important;
  background-color: #faaa94 !important;
  padding: 6px 12px !important;
  border-radius: 8px !important ;
  transition: background 0.2s !important;
}

.kard:hover .card-link {
  background-color: #faaa94 !important;
}

.cardz::-webkit-scrollbar {
  height: 12px !important;
}

.cardz::-webkit-scrollbar-thumb,
.cardz::-webkit-scrollbar-track {
  border-radius: 92px !important;
}

.cardz::-webkit-scrollbar-thumb {
  background-color: #faaa94 !important;
}

.cardz::-webkit-scrollbar-track {
  background-color: #edf2f4 !important;
}

@media (min-width: 500px) {
  .kard {
    flex-basis: calc(50% - 10px) !important;
  }

  .kard:not(:last-child) {
    margin-right: 20px !important;
  }
}

@media (min-width: 700px) {
  .kard {
    flex-basis: calc(calc(100% / 3) - 20px) !important;
  }

  .kard:not(:last-child) {
    margin-right: 30px !important;
  }
}

@media (min-width: 1100px) {
  .kard {
    flex-basis: calc(25% - 30px) !important;
  }

  .kard:not(:last-child) {
    margin-right: 40px !important;
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
