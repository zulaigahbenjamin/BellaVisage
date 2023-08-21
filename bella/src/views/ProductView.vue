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
    <!-- <div class="col-12 col-sm-6 col-md-4 col-lg-${product.size} my-4">
        <div class="card">
            <div v-if="product" class="container products">
                <img :src="product.image_url" :alt="product.description" :class="card - img - top" style="padding: 0.6rem;"
                    height="450">
                <div class="card-body">
                    <h5 class="card-title">R&G</h5>
                    <h1>{{ product.name }}</h1>
                    <p class="card-text">{{ product.description }}</p>
                    <p class="card-text">{{ product.price }}</p>
                    <button class="btn btn-product" onclick="addToCart({{product.id}})">Buy Now</button>
                </div>
            </div>
        </div>
    </div> -->
    <h2>Helloooooo</h2>
</template>
<script>
import axios from 'axios';
export default {
    props: ['id'],
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