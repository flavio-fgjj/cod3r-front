import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './config/bootstrap'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// TEMPORÁRIO! (toda requisição feita pelo axios, terá um header Authorization)
// require('axios').defaults.headers.common['Authorization'] = 'bearer token'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
