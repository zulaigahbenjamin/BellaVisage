import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import cors from 'cors'
import AddProduct from './components/AddProduct.vue'

createApp(App).use(store).use(AddProduct).use(router).mount('#app')