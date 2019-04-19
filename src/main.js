import Vue from 'vue'
import App from './App.vue'
import 'weui'
import axios from 'axios'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
