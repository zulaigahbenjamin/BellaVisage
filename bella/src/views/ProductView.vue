<template lang="">
    <div>
        

            <!-- Slide show -->

    <div id="carouselExampleIndicators" class="carousel slide  " data-bs-ride="carousel">

<div id="carouselExampleIndicators" class="carousel slide mb-5 mt-5" data-bs-ride="carousel">

  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">

      <img src="https://i.postimg.cc/7Ybwv2RY/Slide-Skin-care.png" class="d-block w-70  mx-auto" style="height: 300px; width: 46rem;">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/JnzfWwhH/11111.png" class="d-block w-70 mx-auto" style="height: 300px;">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/0NPgcKRf/lll.png" class="d-block w-70 mx-auto" style="height: 300px;">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<!-- End of slideshow -->

<!-- Card section -->
<h2 class="text-caro" style="text-align: center;letter-spacing: 8px;margin: 2rem; color:black;">KOREAN SKIN</h2>
 

<!-- filter -->
<!-- <h2>Search Products</h2>

<section id="products">
  <form action="" class="m-auto filter-form bg-black">
    <div class="filter-form-price filter-form-div">
      <label for="price-range">Price:</label>
      <select name="price-range" class="m-auto" id="price-range" onchange="filterItems()">
      <option value="any">Any</option>
      <option value="5000">R5000</option>
      <option value="3000">R3000</option>
      <option value="2000">R2000</option>
      </select>
    </div>

    <div class="filter-form-color filter-form-div">
      <label for="">Base-colour</label>
      <select name="base-color" class="m-auto" id="base-color" onchange="filterItems()">
      <option value="any">Any</option>
      <option value="black">Black</option>
      <option value="white">White</option>
      <option value="cream">Cream</option>
      <option value="purple">Purple</option>
      <option value="brown">Brown</option>
      </select>
    </div>

    <div class="filter-form-shoes filter-form-div">
      <label for="shoes">Shoes</label>
      <select name="shoes" class="m-auto" id="shoes" onchange="filterItems()">
      <option value="any">Any</option>
      <option value="puffy">Puffy</option>
      <option value="pointed">Pointed</option>
      <option value="glass">Glass</option>
    </select>
    </div>

  </form>
</section> -->

<!--End of filter -->


    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>



/* Slide Prods */
:root {
    --whitesmoke: whitesmoke;
    --darkred: #faaa94;
    --platinum: #e5e5e5;
    --black: #2b2d42;
    --white: #fff;
    --thumb: #edf2f4;
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  body {
    font: 16px / 24px "Rubik", sans-serif;
    color: var(--black);
    background: var(--platinum);
    margin: 50px 0;
  }
  
  .container {
    max-width: 1400px;
    padding: 0 15px;
    margin: 0 auto;
  }
  
  h2 {
    font-size: 32px;
    margin-bottom: 1em;
  }
  
  .cardz {
    display: flex;
    padding: 25px 0px;
    list-style: none;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
  
  .kard {
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 20px;
    background: var(--white);
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
    scroll-snap-align: start;
    transition: all 0.2s;
  }
  
  .kard:not(:last-child) {
    margin-right: 10px;
  }
  
  .kard:hover {
    /* color: var(--white); */
    background: var(--whitesmoke);
  }
  
  .kard .card-title {
    font-size: 20px;
  }
  
  .kard .card-content {
    margin: 20px 0;
    max-width: 85%;
  }
  
  .kard .card-link-wrapper {
    margin-top: auto;
  }
  
  .kard .card-link {
    display: inline-block;
    text-decoration: none;
    color: white;
    background: var(--darkred);
    padding: 6px 12px;
    border-radius: 8px;
    transition: background 0.2s;
  }
  
  .kard:hover .card-link {
    background: var(--darkred);
  }
  
  .cardz::-webkit-scrollbar {
    height: 12px;
  }
  
  .cardz::-webkit-scrollbar-thumb,
  .cardz::-webkit-scrollbar-track {
    border-radius: 92px;
  }
  
  .cardz::-webkit-scrollbar-thumb {
    background: var(--darkred);
  }
  
  .cardz::-webkit-scrollbar-track {
    background: var(--thumb);
  }
  
  @media (min-width: 500px) {
    .kard {
      flex-basis: calc(50% - 10px);
    }
  
    .kard:not(:last-child) {
      margin-right: 20px;
    }
  }
  
  @media (min-width: 700px) {
    .kard {
      flex-basis: calc(calc(100% / 3) - 20px);
    }
  
    .kard:not(:last-child) {
      margin-right: 30px;
    }
  }
  
  @media (min-width: 1100px) {
    .kard {
      flex-basis: calc(25% - 30px);
    }
  
    .kard:not(:last-child) {
      margin-right: 40px;
    }
  }
  
  
  
  .page-footer {
    position: fixed;
    right: 0;
    bottom: 50px;
    display: flex;
    align-items: center;
    padding: 5px;
    z-index: 1;
  }
  
  .page-footer a {
    display: flex;
    margin-left: 4px;
  }
/* End of Slide Prods */



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
    
</style>