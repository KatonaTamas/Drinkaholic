import { createRouter, createWebHistory } from 'vue-router';

// Importing Views 'cause we want to route these
import AllBeers from '../views/AllBeers.vue';
import SearchArea from '../views/SearchArea.vue';

//Created a routes array, defined the imported components in it
const routes = [
  {
    path: '/',
    name: 'SearchArea',
    component: SearchArea
  },
  {
    path: '/all',
    name: 'AllBeers',
    component: AllBeers
  }
]

//Creted router with the defined routes, and created BrowserHistory as well
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
