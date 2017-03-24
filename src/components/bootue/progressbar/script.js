
import coerce from '../_core/_utils/coerce.js'

export default {
  props: {
    animated: {type: Boolean, default: false},
    label: {default: false},
    now: {required: true},
    striped: {type: Boolean, default: false},
    type: {type: String}
  },
  computed: {
    labelBool () { return coerce.boolean(this.label) },
    nowNum () { return coerce.number(this.now) }
  }
}
