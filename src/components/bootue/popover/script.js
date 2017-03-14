import PopoverMixin from '../_core/_utils/popoverMixins.js'

export default {
  mixins: [PopoverMixin],
  props: {
    trigger: {type: String, default: 'click'}
  }
}
