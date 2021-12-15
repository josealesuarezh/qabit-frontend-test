import Vue from 'vue'
import App from './App.vue'
import store from './store';
import VModal from 'vue-js-modal';
import VueRouter from 'vue-router'
import './assets/tailwind.css'

import Index from './views/Index.vue';
import WishList from './views/WishList.vue';
import Details from './views/Details.vue';


Vue.use(VModal);

Vue.use(VueRouter);
const routes = [
  { path: '/', component: Index },
  { path: '/wishlist', component: WishList },
  { path: '/details/:id', component: Details },
];

const router = new VueRouter({
  routes,
  mode: 'history'
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
