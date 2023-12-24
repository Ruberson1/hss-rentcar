import { createApp, markRaw } from 'vue'
import { createPinia} from "pinia";
import './style.css'
import router from './router';
import App from './App.vue'
import axios from 'axios';

axios.defaults.withCredentials = true
axios.defaults.baseURL = "http://localhost:8000";



const pinia = createPinia();
const app = createApp(App);

pinia.use(({ store }) => {
    store.router = markRaw(router);
});
app.use(pinia)
app.use(router)

app.mount('#app')
