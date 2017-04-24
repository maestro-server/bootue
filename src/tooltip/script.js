import PopoverMixin from '../_core/_utils/popoverMixins.js'

export default {
  mixins: [PopoverMixin],
  props: {
    effect: {type: String, default: 'scale'},
    trigger: {type: String, default: 'hover'}
  }
}
