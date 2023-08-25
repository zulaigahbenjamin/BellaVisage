<template lang="">
    <div>
        <h1>Filters</h1>
    </div>
</template>
<script>
export default {
    data(){
       return {
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

    sortProducts() {
        if (this.sortOrder === "asc") {
            this.filteredProducts.sort((a, b) => a.amount - b.amount);
        } else if (this.sortOrder === "desc") {
            this.filteredProducts.sort((a, b) => b.amount - a.amount);
        }
      },

      watch: {
    selectedCategory: "filter", // Call filter method when selectedCategory changes
    sortOrder: "sortProducts" // Call sortProducts method when sortOrder changes
},

    mounted() {
        this.$store.dispatch('fetchProducts');
    },
}
</script>
<style lang="">
    
</style>