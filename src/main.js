import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';    // dodala nakon npm install vue-router
import AddContact from './pages/AddContact.vue'  //dodala nakon pravljenja foldera pages
import Contacts from './pages/Contacts.vue'  //dodala nakon pravljenja foldera pages

Vue.use(VueRouter); // dodala nakon npm install vue-router
Vue.config.productionTip = false

const routes = [
  {path:"/", component: Contacts},
  {path: "/add-contact", component: AddContact}
  // {path: "/add-contact/:id", component: AddContact}
];       //dodala

const router = new VueRouter ({
  routes
}) //dodala

new Vue({
  router,      //dodala
  render: h => h(App)
}).$mount('#app')
