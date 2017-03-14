import $ from '../_core/_utils/NodeList.js'
import ClickOutside from '../_core/_directives/ClickOutside.js'

export default {
  directives: {
    ClickOutside
  },
  props: {
    disabled: {type: Boolean, default: false},
    size: {type: String, default: null},
    text: {type: String, default: null},
    type: {type: String, default: 'default'},
    value: {type: Boolean, default: false}
  },
  data () {
    let show = this.value
    return {show}
  },
  watch: {
    show (val) { this.$emit('input', val) },
    value (val) { this.show = val }
  },
  computed: {
    buttonSize () { return ~['lg', 'sm', 'xs'].indexOf(this.size) ? 'btn-' + this.size : '' },
    inInput () { return this.$parent._input },
    isLi () { return this.$parent._isTabs || this.$parent._navbar || this.$parent.menu },
    menu () { return !this.$parent || this.$parent.navbar },
    slots () { return this._slotContents },
    submenu () { return this.$parent && (this.$parent.menu || this.$parent.submenu) }
  },
  methods: {
    blur () { this.show = false },
    toggle () {
      if (!this.disabled) { this.show = !this.show }
    }
  },
  mounted () {
    $('ul', this.$el).on('click', 'li>a', e => { this.show = false })
  },
  beforeDestroy () {
    $('ul', this.$el).off()
  }
}
