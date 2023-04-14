import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// PrimeVue
import PrimeVue from 'primevue/config'
//theme
import 'primevue/resources/themes/lara-light-indigo/theme.css'

//core
import 'primevue/resources/primevue.min.css'

//icons
import 'primeicons/primeicons.css'

//primevue components
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Password from 'primevue/password'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('InputText', InputText)
app.component('Button', Button)
app.component('PasswordInput', Password)
app.mount('#app')
