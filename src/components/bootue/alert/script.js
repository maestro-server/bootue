import {coerce, delayer} from '../_core/_utils/utils.js'

let DURATION = 0
export default {
  props: {
    dismissable: {type: Boolean, default: false},
    duration: {default: DURATION},
    placement: {type: String},
    type: {type: String},
    value: {type: Boolean, default: true },
    width: {type: String}
  },
  data () {
    return {
      val: this.value
    }
  },
  computed: {
    durationNum () { return coerce.number(this.duration, DURATION) }
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
