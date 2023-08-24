<template lang="">
    <div>

    <!-- Carousel -->

    <div class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title">
              <h2>REAL PEOPLE, REAL REVIEWS</h2>

              <div class="section-borders">
                <span></span>
                <span class="black-border"></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="owl-carousel client-testimonial-carousel">
              <div class="single-testimonial-item">
                <p>
                  First time online shopping with Skin Theory was great! Wide
                  range of k-beauty products, very user friendly and simple
                  shopping process, and loved the many lovely free samples that
                  came along with my purchases. Will definitely be using Skin
                  Theory again for my next k-beauty fix!
                </p>
                <h3>Nicki Manaj <span>Customer</span></h3>
              </div>
              <div class="single-testimonial-item">
                <p>
                  Ran out of my Korean skincare and Skin Theory had a selection
                  (& more) of what I was looking for. Price of products are
                  affordable. Delivery was very quick and was pleasantly
                  surprised at the generosity of samples. Will definitely return
                  to order more.
                </p>
                <h3>Cardi B <span>Customer</span></h3>
              </div>
              <div class="single-testimonial-item">
                <p>
                  The online store has a great layout. I can search by brand,
                  skin-type and category which is makes navigating so easy!!
                  They carry more brands than other Korean skincare online
                  stores. Products are well-described and I love the blogs too!
                  Delivery is fast.
                </p>
                <h3>Ariana Grande <span>Customer</span></h3>
              </div>
              <div class="single-testimonial-item">
                <p>
                  Smooth and thick on the skin, good deep hydration, not leaving
                  a trace of greece behind. I love it! My skin is very dry,
                  itchy with ashy elbows dry finger nails, fruity buns with a
                  bit of a itch and this serum does a perfect job of deep
                  hydration on my skin. Feels thick, smooth. I highly
                  recommend!!
                </p>
                <h3>Selena Gomez <span>Customer</span></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- End Carousel -->

    </div>
</template>
<script>

export default {
    name: "Testimonials",
    
    
}
</script>
<style scoped>

/* css for carousel */


h2,
h3 {
  font-weight: 700;
}

.section-padding {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-borders span {
  height: 5px;
  background:#faaa94 ;
  width: 40px;
  display: inline-block;
  border-radius: 2px;
}

.section-borders span.black-border {
  background: #333;
  width: 30px;
  margin: 0 6px;

}

.client-testimonial-carousel .owl-dots button {
  height: 5px;
  background: #faaa94!important;
  width: 20px;
  display: inline-block;
  margin: 5px;
  transition: .2s;
  border-radius: 2px;
}

.client-testimonial-carousel button.owl-dot.active {
  background: #333 !important;
  width: 30px;
}

.client-testimonial-carousel .owl-dots {
  text-align: center;
  margin-top: 25px
}

.single-testimonial-item {
  position: relative;
  box-shadow: 0 0 2px #dadfd3;
  margin: 2px;
  padding: 20px;
  font-style: italic;
  padding-left: 85px;
}

.single-testimonial-item:before {
  font-family: "Font Awesome 5 Free";
  content: "\f10e";
  font-weight: 900;
  position: absolute;
  left: 20px;
  top: 50%;
  font-size: 20px;
  color:#333 ;
  line-height: 30px;
  margin-top: -15px;
}

.single-testimonial-item:after {
  background: #ddd;
  content: "";
  height: 70%;
  left: 60px;
  position: absolute;
  top: 10%;
  width: 1px;
}

.single-testimonial-item h3 {
  font-size: 20px;
  font-style: normal;
  margin-bottom: 0;
}

.single-testimonial-item h3 span {
  display: block;
  font-size: 12px;
  font-weight: normal;
  margin-top: 5px;
}
/* end of carousel */

/* footer */
.text-reset{
  text-decoration: none;
  color: #484848;
}

.text-uppercase{
  color: black;
}
/* end of footer */

/* about */
strong{
  color: black;
  font-family: 'Caveat', cursive;
font-family: 'Poppins', sans-serif;
}

span{
  color:pink ;
  font-family: 'Caveat', cursive;
font-family: 'Poppins', sans-serif;
}
/* about end */
    
</style>