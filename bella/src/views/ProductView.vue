<template>
    <div calss="banner_section">
        <div v-if="product" class="container products">
            <div class="row d-flex justify-content-center">
                <img :src="product.image_url" :alt="product.description" :class="pic">
                <h1>{{ product.name }}</h1>
                <div>{{ product.id }}</div>
                <button>Buy Now</button>
            </div>
        </div>
    </div>
   
    <h2>Helloooooo</h2>
</template>
<script>
import axios from 'axios';
export default {
    props: ['id'],
    data() {
        return {
            product: null
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts')
    },
    computed: {
        product() {
            return this.$store.state.product
        }
    },
    methods: {
        // Action to fetch product data
        fetchProduct() {
            axios
                .get('https://zulaigahsapi.onrender.com/products')
                .then(response => {
                    // Commit a mutation to update the state with the fetched data
                    this.$store.commit('SET_PRODUCT', response.data);
                })
                .catch(error => {
                    console.error('Error fetching product:', error);
                });
        }
    }
}
</script>