<template>
  <div class="about">
    
    <div class="heading">
  <h1>𝑩𝒆𝒍𝒍𝒂 𝑽𝒊𝒔𝒂𝒈𝒆</h1>

</div>
<div class="container-about">
  <section class="about">
    <div class="about-image">
      <img src="https://i.postimg.cc/MTdxvvm9/About-image-korean.jpg" alt="Image">
    </div>
    <div class="about-content">
      <h2>About Us</h2>
      <p><span>𝑩𝒆𝒍𝒍𝒂 𝑽𝒊𝒔𝒂𝒈𝒆</span> was first Established in South Korea in 2023, selling lasting products never to be seen before.Recreating the past with the future, eventing our unique products with our signature logo representing it. We only strive towards success.</p>

     <p><span>𝑩𝒆𝒍𝒍𝒂 𝑽𝒊𝒔𝒂𝒈𝒆</span> we believe beauty has no boundaries, introducing ground braking formulas with our own secret ingredients from South korea and gotten from 선조.</p>
    
      <p><span>𝑩𝒆𝒍𝒍𝒂 𝑽𝒊𝒔𝒂𝒈𝒆</span> balances our products with the most natural earth friendly, natural ingredients but yet still luxurious as ever leaving the skin moisturized and glowing.</p>
    
      <p>We strongly stand firm with quality over quantity as we believe beauty takes time to morph into what we have today and that is the one and only It's <span>𝑩𝒆𝒍𝒍𝒂 𝑽𝒊𝒔𝒂𝒈𝒆</span>.</p>
      <a href="/html/product.html" class="read-more">Korean Skin Care</a>
    </div>
  </section>
</div>

<!--End of Content-->

  </div>
</template>



<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Roboto:ital,wght@0,400;0,500;0,700;1,500&display=swap");


@media screen and (max-width: 300px){


.heading h1{
font-size: 30px !important;
}
p{
  font-size: 14px !important;
}
.about-content .read-more{
  padding: 2px !important;
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

h1 {
  /* font-size: 50px; */
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



@media screen and (max-width: 300px) {


  html,
  body {
    overflow-x: hidden;
  }

}










/* About Page */
.heading {
  width: 90% !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  flex-direction: column !important;
  margin: 20px auto !important;
}
.heading h1 {
  font-size: 50px;
  color: black !important;
  margin-bottom: 20px !important;
  position: relative !important;
}
.heading h1::after {
  content: "" !important;
  margin: 0 auto !important;
  background-color: #333333 !important;
  position: absolute !important;
  display: block !important;
  height: 4px !important;
  width: 100% !important;
}


.container-about {
  width: 90% !important;
  margin: 0 auto !important;
  padding: 10px 20px !important;
}
.about {
  display: flex !important;
  justify-content: space-between !important;
  flex-wrap: wrap !important;
  align-items: center !important;
 line-height: 26px;
}
.about-image {
  flex: 1 !important;
  margin-right: 40px !important;
  overflow: hidden !important;
}
.about-image img {
  max-width: 100% !important;
  display: block !important;
  transition: 0.6 ease !important;
  height: auto !important;
}
.about-content {
  flex: 1 !important;
}
.about-content h2 {
  font-size: 25px !important;
  margin-bottom: 40px !important;
}

.about-content p {
  font-size: 20px;
  text-align: start !important;


  line-height: 2;
}
.about-content .read-more {
  display: inline-block !important;
  font-size: 20px !important;
  padding: 7px;
  text-decoration: none !important;
  border-radius: 20px !important;
  transition: 0.3s ease !important;
  background-color: #faaa94 !important;
  color: white !important;
  margin: 1rem !important;
  text-align: start !important;

}
.about-content .read-more:hover {
  box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#CCC5B9 !important;
}
@media screen and (max-width: 300px) {
  .heading {
    padding: 0px 20px !important;
  }


  .heading p {
    font-size: 15px !important;
    margin-bottom: 0px !important;
  }



  .about {
    padding: 15px !important;
    flex-direction: column !important;
  }

  .about-image {
    margin: 0px !important;
  margin-bottom: 15px !important;
  }

  .about-content {
    padding: 0px !important;
    font-size: 12px !important;
  }

  .about-content .read-more {
    font-size: 15px !important;
  }


}




#body-admin {
  justify-content: center;
  display: flex;
}


/* Slide Prods */

* {
  box-sizing: border-box;
  padding: 0 !important;
  margin: 0 !important;
}

/* body {
  font: 16px / 24px "Rubik", sans-serif !important;
  color:#2b2d42 !important;
  background-color:#e5e5e5 !important;
  margin: 50px 0;
} */


h2 {
  font-size: 32px !important;
  margin-bottom: 1em !important;
}


h2,
h3 {
  font-weight: 700 !important;
}

.section-padding {
  padding: 80px 0 !important;
}

.section-title {
  text-align: center !important;
  margin-bottom: 60px !important;
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
  box-shadow: 0 0 2px #dadfd3 !important;
  margin: 2px !important; 
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
  color: #333 !important;
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

</style>
