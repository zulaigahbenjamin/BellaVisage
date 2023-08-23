<template lang="">
    <div class="">
        <div>
            <button>Add Users</button>
            <button>Add Products</button>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Quantity</td>
                        <td>Size</td>
                        <td>Price</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody v-if="products">
                    <tr v-for="product in Products" :key="product.id">
                        <td>{{prodId}}</td>
                        <td>{{prodName}}</td>
                        <td>{{quantity}}</td>
                        <td>{{size}}</td>
                        <td>{{amount}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
    return {
      product: null,
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
    mounted() {
        this.$store.dispatch("fetchProducts")
    },
}
</script>
<style scoped>
    /* *{
        border: 2px solid red
    } */
    table{
        border: 2px solid green !important;
        min-height: 400px;
        min-width: 500px ;
    }
    main{
     min-height:70vh
    }
</style>