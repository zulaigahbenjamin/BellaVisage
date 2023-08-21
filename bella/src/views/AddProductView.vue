<!-- <template>
    <div>
        <div>
            <label class="label">Product Name</label>
            <input class="input" v-model="name" type="text" placeholder="Product Name" required />
            <label class="label">Price</label>
            <input class="input" v-model="price" type="number" placeholder="R" required />
            <label class="label">Category</label>
            <input class="input" v-model="category" type="text" placeholder="Name" required />
            <label class="label">Image</label>
            <input class="input" v-model="img" type="text" placeholder="http://" required />
            <button class="btn btn-success mt-3" @click="addProduct">
                Add
            </button>
        </div>
    </div>
</template>
<script>
import Admin from '@/components/AddProducts.vue'
import axios from 'axios'

export default {
    components: { Admin },
    data() {
        return {
            name: '',
            category: '',
            description: '',
            price: '',
            img: ''
        }
    },
    methods: {
        async addProduct() {
            try {
                await axios.post('https://zulaigahsapi.onrender.com/products', {
                    name: this.name,
                    category: this.category,
                    price: this.price,
                    img: this.img
                })
                this.name = '';
                this.category = '';
                this.price = '';
                this.img = '';
                this.$router.push('/admin')
            } catch (err) {
                alert(err)
            }
        }
    }
};

</script>
<style >
</style> -->

<template lang="">
    <div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>