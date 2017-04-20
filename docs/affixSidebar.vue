<template>
  <affix :offset="60" v-scroll="scrollSpy">
    <ul class="nav bs-docs-sidenav" id="sidenav">
      <li v-for="s in sections" :class="{active:active==s.id}"><a @click="scrollMeTo(s.id)" class="handCursor">{{ s.name }}</a></li>
    </ul>
  </affix>
</template>


<script>
import Scroll from '../src/components/bootue/affix/_directives/Scroll.js'
import AnimateScroll from './libs/animate';


export default {
  directives: {
    Scroll
  },
  filters: {
    space(val) {
      return val.replace('-', ' ')
    }
  },
  data () {
    return {
      active: null,
      sections: []
    }
  },

  methods: {
    scrollSpy () {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
      for (let s of this.sections) {
        if (s.el.offsetTop - 35 <= scrollPosition) {
          this.active = s.id
        }
      }
    },
    scrollMeTo(refName) {
      const element = document.querySelector(`#${refName}`)
      const top = element.offsetTop -30
      AnimateScroll(top, 0, 'easeInOutQuint')
    }
  },
  mounted () {
    this.sections = this.$root.makeSections()
    this.scrollSpy()
  }
}
</script>
