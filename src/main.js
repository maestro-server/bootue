import Vue from 'vue'
import App from './App.vue'

import mcore from './boot/mcore'

Vue.use(mcore)

new Vue({
  el: '#app',
  render: h => h(App)
})
