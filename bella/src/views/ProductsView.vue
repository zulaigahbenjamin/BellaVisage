<template>
    <div>
        <div class="col-12 col-sm-6 col-md-4 col-lg- my-4">
            <div v-if="products" class="flex-container">
                <div v-for="product of products" :key="product.id">
                    <!-- Render your product details here -->
                    <div v-if="product" class="card">
                        <img :src="product.image" :alt="product.description" :class="card - img - top"
                            style="padding: 0.6rem;" height="450">
                        <div class="card-body">
                            <h1>{{ product.name }}</h1>
                            <p class="card-text">{{ product.description }}</p>
                            <p class="card-text">{{ product.price }}</p>
                            <button class="btn btn-product" onclick="addToCart({{product.id}})">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>Loading...</div>
        </div>
    </div>
    <h2>HELLOOOOOO</h2>
</template>
<script>
export default {
    data() {
        return {
            products: null
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
    },
};
</script>

