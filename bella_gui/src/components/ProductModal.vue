<template>
  <div class="modal">
    <!-- <div class="modal-content">
   
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      
      <button @click="$emit('close')">Close</button>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style>
/* Add your modal styling here */
</style>