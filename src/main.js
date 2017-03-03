import Vue from 'vue'
import App from './App.vue'

import mcore from './bootstrap/mcore'
import mdirectives from './bootstrap/mdirectives'

Vue.use(mcore)
Vue.use(mdirectives)


new Vue({
  el: '#app',
  render: h => h(App)
})
