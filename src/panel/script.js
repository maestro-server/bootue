export default {
  props: {
    header: {type: String},
    isOpen: {type: Boolean, default: null},
    type: {type: String, default: null}
  },
  data () {
    return {
      open: this.isOpen
    }
  },
  watch: {
    isOpen (val) {
      this.open = val
    }
  },
  computed: {
    inAccordion () {
      return this.$parent && this.$parent._isAccordion
    },
    panelType () {
      return 'panel-' + (this.type || (this.$parent && this.$parent.type) || 'default')
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
      if (this.inAccordion) {
        this.$parent.openChild(this)
      }
    },
    enter (el) {
      el.style.height = 'auto'
      let endWidth = getComputedStyle(el).height
      el.style.height = '0px'
      el.offsetHeight // force repaint
      el.style.height = endWidth
    },
    afterEnter (el) {
      el.style.height = 'auto'
    },
    beforeLeave (el) {
      el.style.height = getComputedStyle(el).height
      el.offsetHeight // force repaint
      el.style.height = '0px'
    }
  },
  created () {
    if (this.isOpen === null) {
      this.open = !this.inAccordion
    }
  }
}
