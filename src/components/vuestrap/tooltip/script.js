import PopoverMixin from '../../utils/popoverMixins.js'

export default {
  mixins: [PopoverMixin],
  props: {
    effect: {type: String, default: 'scale'},
    trigger: {type: String, default: 'hover'}
  }
}
