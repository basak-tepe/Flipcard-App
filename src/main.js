import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import '/node_modules/primeflex/primeflex.css'
import "primevue/resources/themes/saga-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                 //core css


const app = createApp(App);

app.use(PrimeVue);

app.component('Button', Button);


app.mount("#app");