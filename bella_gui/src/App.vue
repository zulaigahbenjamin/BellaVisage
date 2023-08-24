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