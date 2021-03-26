import { createApp } from 'vue'
import App from './App.vue'
//Import router
import router from './router'

//Let the app use the router to be able to routing
createApp(App).use(router).mount('#app')
