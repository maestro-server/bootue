export default {
  props: {
    disabled: {type: Boolean, default: false},
    size: {type: String, default: null},
    text: {type: String, default: null},
    type: {type: String, default: 'default'},
    value: {type: Boolean, default: false}
  },

  data () {
    return {
      show: this.value
    }
  },

  computed: {
    buttonSize () { return ~['lg', 'sm', 'xs'].indexOf(this.size) ? 'btn-' + this.size : '' },
    inInput () { return this.$parent._input },
    isLi () { return this.$parent._isTabs || this.$parent._navbar || this.$parent.menu },
    menu () { return !this.$parent || this.$parent.navbar },
    slots () { return this._slotContents },
    submenu () { return this.$parent && (this.$parent.menu || this.$parent.submenu) }
  },

  watch: {
    show (val) {
      this.$emit('input', val)
      this.eventClickOutside(val)
    },
    value (val) {
      this.show = val
    }
  },

  methods: {
    toggle () {
      if (!this.disabled)
        this.show = !this.show
    },
    hiddeMe () {
      this.show = false
    },
    clickOutside (e) {
      if (!this.$el.contains(e.target))
      this.hiddeMe()
    },
    eventClickOutside(val) {
      if(val) {
        document.addEventListener('click', this.clickOutside, false)
        return
      }

      document.removeEventListener('click', this.clickOutside, false)
    }
  },

  mounted () {
    let links = this.$el.querySelectorAll('li>a')
    Array.prototype.map.call(links, (el) => {
      el.addEventListener('click', this.hiddeMe, false)
    })

  },

  beforeDestroy () {
    let links = this.$el.querySelectorAll('li>a')
    Array.prototype.map.call(links, (el) => {
      el.removeEventListener('click', this.hiddeMe, false)
    })


  }
}
