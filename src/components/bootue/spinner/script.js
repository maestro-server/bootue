
import delayer from '../_core/_utils/delayer.js'

const MIN_WAIT = 500 // in ms

export default {
  props: {
    fixed: {type: Boolean, default: false},
    global: {type: Boolean, default: false},
    size: {type: String, default: 'md'},
    text: {type: String, default: ''},
    value: {default: false}
  },
  data () {
    return {
      active: this.value,
      locked: false
    }
  },
  computed: {
    spinnerSize () { return 'spinner-' + (this.size ? this.size : 'sm') }
  },
  watch: {
    active (val, old) {
      if (val !== old) this.$emit('input', val)
    },
    value (val, old) {
      if (val !== old) { this[val ? 'show' : 'hide']() }
    }
  },
  methods: {
    hide () {
      this.active = false
    },
    show (options) {
      if (options) {
        if (options.text) { this.text = options.text }
        if (options.size) { this.size = options.size }
        if (options.fixed) { this.fixed = options.fixed }
      }
      // block scrolling when spinner is on
      this._body.style.overflowY = 'hidden'
      // activate spinner
      this._started = new Date()
      this.active = true
      this.locked = true
      this._unlock()
    }
  },
  created () {
    this._body = document.body
    this._bodyOverflow = document.body.style.overflowY
    this._unlock = delayer(function () {
      this.locked = false
      this._body.style.overflowY = this._bodyOverflow
    }, MIN_WAIT)
    if (this.global) {
      if (!this.$root._globalSpinner) {
        this.$root._globalSpinner = true
        let self = this
        this._global = {
          hide () { self.hide() },
          show () { self.show() }
        }
        this.$root.$on('spinner::show', this._global.show)
        this.$root.$on('spinner::hide', this._global.hide)
      }
    }
  },
  beforeDestroy () {
    if (this._global) {
      this.$root.$off('spinner::show', this._global.show)
      this.$root.$off('spinner::hide', this._global.hide)
      delete this.$root._globalSpinner
    }
    clearTimeout(this._spinnerAnimation)
    this._body.style.overflowY = this._bodyOverflow
  }
}
