import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './i18n'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import { useLanguageStore } from './stores/language'
import './styles/global.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
const languageStore = useLanguageStore()
languageStore.initLanguage()
app.mount('#app')
