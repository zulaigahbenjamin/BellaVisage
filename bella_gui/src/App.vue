<template>
  <div>
    <nav>
      <NavBarComp/>
    </nav>
    <main>
      <router-view/>
    </main>
    <footer>
      <FooterComp/>
    </footer>
  </div>
</template>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body{
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>

<script>
import NavBarComp from './components/NavBarComp.vue';
import FooterComp from './components/FooterComp.vue';
export default {
  components: {
    NavBarComp,
    FooterComp
  }
  
}
</script>