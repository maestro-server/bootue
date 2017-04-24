export default {
  props: {
    type: {
      type: String,
      default: null
    },
    oneAtAtime: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openChild (child) {
      if (this.oneAtAtime) {
        this.$children.forEach(item => {
          if (child !== item) {
            item.open = false
          }
        })
      }
    }
  },
  created () {
    this._isAccordion = true
  }
}