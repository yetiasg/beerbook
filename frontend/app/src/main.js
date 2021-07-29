import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'



import BaseBadge from './components/baseComponents/BaseBadge.vue'
import BaseButton from './components/baseComponents/BaseButton.vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'


const app = createApp(App)
app.use(router)
app.use(store)


app.component('base-badge', BaseBadge)
app.component('base-button', BaseButton)
app.component('the-header', TheHeader)
app.component('the-footer', TheFooter)

router.isReady().then(() => {
    app.mount('#app')
})