import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import router from './router'
import { createPinia } from 'pinia'


import './style.css'
import '/node_modules/primeflex/primeflex.css'
import "primevue/resources/themes/saga-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                 //core css
import 'primeicons/primeicons.css'                          //icons


const app = createApp(App);
const pinia = createPinia();

app.use(pinia);


app.use(PrimeVue);
app.use(router);

app.component('Button', Button);

app.mount("#app");