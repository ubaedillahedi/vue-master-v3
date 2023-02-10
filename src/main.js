import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

// createApp(App).mount('#app')
const app = createApp(App)

app.use(router)
app.mount('#app')
