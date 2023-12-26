import { createApp, markRaw } from 'vue'
import { createPinia} from "pinia";
import './style.css'
import router from './router';
import App from './App.vue'
import axios from 'axios';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css'


axios.defaults.withCredentials = true
axios.defaults.baseURL = "http://localhost:8000";



const pinia = createPinia();
const app = createApp(App);

pinia.use(({ store }) => {
    store.router = markRaw(router);
});
app.use(pinia)
app.use(router)
app.use(PrimeVue);

app.mount('#app')
