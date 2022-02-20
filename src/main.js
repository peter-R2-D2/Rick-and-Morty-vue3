import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FontAwesomeIcon from './utilities/fontAwesome'

createApp(App).component('font-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
