import coerce from '../_core/_utils/coerce.js'
import delayer from '../_core/_utils/delayer.js'

export default {
  props: {
    dismissable: {type: Boolean, default: false},
    duration: {default: 0},
    placement: {type: String},
    type: {type: String},
    value: {type: Boolean, default: true},
    width: {type: String}
  },
  data () {
    return {
      val: this.value
    }
  },
  computed: {
    durationNum () { return coerce.number(this.duration) }
  },
  watch: {
    val (val) {
      if (val && this.durationNum > 0) { this._delayClose() }
      this.$emit('input', val)
    },
    value (val) {
      if (this.val !== val) {
        this.val = val
      }
    }
  },
  created () {
    this._delayClose = delayer(function () {
      this.val = false
    }, 'durationNum')
  }
}
