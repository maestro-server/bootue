import PopoverMixin from '../../utils/popoverMixins.js'

export default {
  mixins: [PopoverMixin],
  props: {
    trigger: {type: String, default: 'click'}
  }
}
