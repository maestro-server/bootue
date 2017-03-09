import Vue from 'vue'

require('./assets/docs.css')
require('./assets/style.css')

var Prism = require('prismjs')
require('./js/showLanguage')

Vue.use(require('vue-resource'));
require('./js/vue-strap-lang.js')
require('./js/isMobileBrowser.js')

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
    var sections = document.querySelectorAll('.bs-docs-section')
    Array.prototype.forEach.call(sections, el => {
      var id = el.id
      var name = el.querySelector('.anchor', el).innerText
      if (id && name) this.sections.push({el, id, name})
    })
  },
  updated () {
    Prism.highlightAll();
  }
})
