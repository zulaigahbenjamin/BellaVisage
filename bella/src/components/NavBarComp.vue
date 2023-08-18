<template lang="">
    <div>
             <!-- Navbar -->


             <nav class="navbar sticky-top navbar-expand-lg ">
    <div class="container-fluid">
      <router-link to="/"
        ><img class="navbar-logo"
          src="https://i.postimg.cc/HsbqzZy5/Bv-1.png "
          id="slideInLeft"
          alt="Ridhaa Gabier"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id="navbar" class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li id="slideInLeft"><router-link to="/">𝐇𝐨𝐦𝐞</router-link></li>
    
          <li id="slideInLeft">
            <router-link to="/product">𝐏𝐫𝐨𝐝𝐮𝐜𝐭</router-link>
          </li>
          <li id="slideInLeft">
            <router-link to="/about"> 𝐀𝐛𝐨𝐮𝐭</router-link>
          </li>
          <li id="slideInLeft">
            <router-link to="/contact">𝐂𝐨𝐧𝐭𝐚𝐜𝐭</router-link>
          </li>
          <li id="slideInLeft">
            <router-link to="/log in">𝐋𝐨𝐠 𝐈𝐧</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>





  <!-- https://i.postimg.cc/HsbqzZy5/Bv-1.png 
  
    𝐇𝐨𝐦𝐞
   𝐏𝐫𝐨𝐝𝐮𝐜𝐭
   𝐀𝐛𝐨𝐮𝐭
   𝐂𝐨𝐧𝐭𝐚𝐜𝐭
   𝐋𝐨𝐠 𝐈𝐧
  -->

  <!-- End Navbar -->
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>



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

  .navbar-logo{
  height: 50px;
  width: 100%;
  margin: 0 !important;
  padding: 0 !important;
}


    
</style>
