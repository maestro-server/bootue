import Vue from 'vue'
import Prism from 'prismjs'
import VueRouter from 'vue-router'
import mcore from '../index.js'

require('./resource/docs.css')
require('./resource/style.css')

import navbar from './pages/modules/navbar.vue'
import footerDocs from './pages/modules/footer.vue'

import Home from './pages/home.vue'
import Components from './pages/components.vue'
import Started from './pages/started.vue'
import Css from './pages/css.vue'
import Structured from './pages/structured.vue'
import Extend from './pages/extend.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/started', component: Started },
  { path: '/components', component: Components },
  { path: '/css', component: Css },
  { path: '/structured', component: Structured },
  { path: '/extend', component: Extend }
]

const router = new VueRouter({
  routes // short for routes: routes
})

Vue.use(VueRouter)
Vue.use(mcore)

new Vue({
  el: '#app',
  router,
  components: {
    navbar,
    footerDocs
  },
  data: {
    sections : []
  },
  methods: {
    makeSections () {
      const sections = document.querySelectorAll('.bs-docs-section')
      let newArr = [];

      Array.prototype.forEach.call(sections, el => {
        let id = el.id
        let name = el.querySelector('.anchor', el).innerText
        if (id && name) newArr.push({el, id, name})
      });

      return newArr
    }
  },
  updated () {
    Prism.highlightAll();
  }
})
