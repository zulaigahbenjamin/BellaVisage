
<template lang="">
  <div>
      <div class="container-fluid">
    <div class="row gap-3 justify-content-center" v-if="product"  :key="product.prodId" :product="product">
      <div  >
        <div style="width:100%;height:100%;" class="card">
          <img :src="product.prodUrl" class="card-img-top" style="padding: 1.6rem;" height="550">
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="card-text">{{ product.category }}</p>
            <p class="card-text">R {{ product.amount }}</p>
             <button class="" href="./Products.vue">Go back</button>
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
</template>
<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProduct", this.$route.params.id);
  },
  components:{SpinnerComp},
};
</script>
<!-- <script>
import axios from 'axios';
export default {
    // props: ['id'],
    mounted() {
        this.$store.dispatch('fetchProduct', this.id)
    },
    computed: {
        product() {
            return this.$store.state.product
        }
    }

//     methods: {
//         // Action to fetch product data
//         fetchProduct() {
//             axios
//                 .get('https://zulaigahsapi.onrender.com/products')
//                 .then(response => {
//                     // Commit a mutation to update the state with the fetched data
//                     this.$store.commit('SET_PRODUCT', response.data);
//                 })
//                 .catch(error => {
//                     console.error('Error fetching product:', error);
//                 });
//         }
//     }
}
</script> -->

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Roboto:ital,wght@0,400;0,500;0,700;1,500&display=swap");
   
@media screen and (max-width: 300px) {
.card-img-top {
  height: auto !important;
  width: 100%;
}

}
@media screen and (max-width: 600px){
  .card-img-top {
    width: 100%;
    height: auto;
  }
 
}

.card-img-top {
 padding: 0px;
 height: 500px;
 width: 50%;
 margin: auto;
  
}

*{
margin: 0;
padding: 0;
box-sizing: border-box;
text-decoration: none;
list-style: none;
font-family: "Poppins", sans-serif;
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
background: #333333;
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
color: whitesmoke;
transition: 0.5s ease;
}
#navbar li a:hover,
#navbar li a.active {
color: white;
}
#navbar li a.active::after,
#navbar li a:hover::after {
content: "";
width: 56%;
height: 2px;
background: whitesmoke;
position: absolute;
bottom: -4px;
left: 20px;
}


#hero {
background-image: url(https://i.postimg.cc/4NZ54SSy/fashion-girl-model-wallpaper-59926-61719-hd-wallpapers.jpg);
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
}

.category-box h3{
 float: left;
 padding-left: 150px;
font-size: 23px !important;
margin-top: 100px !important;
}
.category-box label{
  float: left;
  padding-left: 150px;
  font-size: 25px !important;
}
.feature-btn{
  padding-top: 90px;
}


.image-feature{
width: 100px;
height: 80px;
}

html,
body {
  overflow-x: hidden;
}

.feature-btn{
float:left !important;
margin-right: 10px !important;
padding: 10px !important;
padding-top: 5px !important;
padding-bottom:5px !important ;
}

}

#hero h4 {
padding-bottom: 1rem;
}
#hero h1 {
color: #eb5e28;
}

#hero button {
letter-spacing: 3px;
font-size: 14px;
border-radius: 5px;
transition: all 0.2s ease-in-out;
box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#FFFCF2;
cursor: pointer;
}

#hero button:hover {
box-shadow: -4px -4px 10px #ccc5b9, 4px 4px 10px#FFFCF2;
}

/* feature button */
.feature-btn {
text-decoration: none;
margin-top: 50px !important;

}

/* category */

.category-title {
margin-top: 20px;
margin-bottom: 90px;
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
overflow: hidden !important;
}

/* Image styling for contact page */

.pfp {
width: 100%;
border-style: solid;
border-width: 5px;
border-radius: 50%;
border-color: black;
}
.bttn {
width: 90% !important;
}
.logo {
margin: 0;
padding: 0;
}
.btn {
display: flex;
justify-content: center;
align-items: center;
}

.input-ting {
width: 90%;
}

.second {
margin-bottom: 5rem;
background-color: #1e1e1e !important;
color: white !important;
}

form h2 {
background-color: #1e1e1e !important;
color: white !important;
}

form {
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
#contact-box {
margin-top: -0.9rem !important;
}

.bot {
padding-top: 1rem;
background-color: #1e1e1e;
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
height: 22rem;
}
.card-text {
margin-left: 20px;
text-align: center;
font-size: 18px;
}
.card-title {
margin-left: 10px;
text-align: center;
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
height: 220px;
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
background-color: #1e1e1e;
padding-top: 2rem;
padding-bottom: 1.4rem;
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
background-color: #eb5e28 !important;
width: 100% !important;
margin-top: 2rem !important;
margin-bottom: 2rem !important;
color: white !important;
}
.submitting:hover {
box-shadow: 0 0 15px#FFFCF2 !important;
}

/* ProductPage */
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

@media screen and (max-width: 300px) {
.carousel {
  width: 100% !important;
  height: 100%;
}
.d-block{
  width: 100% !important;
}
.text-carousel {
  font-size: 18px;
}
.heading-admin{
  width: 100%;
  font-size: 30px;                               
  padding: 0 !important;
  padding-left: 28px !important;
}
.instructions{
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
.heading h1 {
font-size: 50px;
color: black;
margin-bottom: 20px;
position: relative;
}
.heading h1::after {
content: "";
margin: 0 auto;
background-color: #333333;
position: absolute;
display: block;
height: 4px;
width: 100%;
}

.line-head::after {
content: "";
margin: 0 auto;
background-color: #333333;
position: absolute;
display: block;
height: 4px;
width: 18%;
position: relative;
}

.line-heading::after {
content: "";
margin: 0 auto;
background-color: #333333;
position: absolute;
display: block;
height: 4px;
width: 31%;
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
background-color: #eb5e28;
color: white;
}
.about-content .read-more:hover {
box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#CCC5B9;
}
@media screen and (max-width: 300px) {
.heading {
  padding: 0px 20px;
}

#productList{
 width: 100% !important;
 padding-left: 20px !important;
 padding-right: 20px !important;
}
.admin-images{
  width: 250px;
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
  padding: 0px !important;
  width: min(900px, 100px -3rem) !important;
  margin-inline: auto !important;
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

}


/* Admin CSS */
.container-admin{
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: #A9A9A9;

}
#productName,#productImage,#productPrice,#admin-submit{
width: 100% !important;
margin-top: 1rem !important;
margin-bottom: 1rem !important;
color: #333333 !important;
cursor: pointer;
padding: 5px;
border: black solid 0.5px;
}
#productList{
margin-left: 10px;
margin-right: 10px;
background: whitesmoke;
padding-left: 20px;
padding-right: 20px;
padding-top: 20px;
padding-bottom: 20px;
border-radius: 20px;
border: black solid ;
overflow-y: scroll !important;
height: 700px;
}



 #productList::-webkit-scrollbar{
width: 0px!important;}

#admin-submit{
color: #333333 !important;
border: black solid 0.5px;
}
#admin-submit:hover{
box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#CCC5B9;
}
</style>