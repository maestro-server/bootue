import Vue from 'vue'
import App from './App.vue'

import mcore from './boot/mcore'
import mdirectives from './boot/mdirectives'

Vue.use(mcore)
Vue.use(mdirectives)

new Vue({
  el: '#app',
  render: h => h(App)
})
