import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from "axios";
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
