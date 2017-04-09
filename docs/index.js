import Vue from 'vue'

require('./assets/docs.css')
require('./assets/style.css')

const Prism = require('prismjs')
require('./js/showLanguage')

Vue.use(require('vue-resource'))
require('./js/vue-strap-lang.js')

import bodyDocs from './bodyDocs.vue'

Vue.config.devtools = true
Vue.config.debug = true

new Vue({
  el: '#app',
  components: {
    bodyDocs
  },
  data: {
    sections : []
  },
  mounted () {
    let sections = document.querySelectorAll('.bs-docs-section')
    Array.prototype.forEach.call(sections, el => {
      let id = el.id
      let name = el.querySelector('.anchor', el).innerText
      if (id && name) this.sections.push({el, id, name})
    })
  },
  updated () {
    Prism.highlightAll();
  }
})
