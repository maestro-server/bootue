import {coerce} from '../_core/_utils/utils.js'

export default {
  props: {
    disabled: {default: null},
    falseType: {default: null},
    name: null,
    readonly: {default: null},
    trueType: {default: 'primary'},
    value: false
  },
  data () {
    return {
      active: coerce.boolean(this.value),
      types: {
        danger: 'btn-danger',
        info: 'btn-info',
        primary: 'btn-primary',
        success: 'btn-success',
        warning: 'btn-warning'
      }
    }
  },
  watch: {
    active (val, old) {
      if (val !== old) {
        this.$emit('changed', val)
        this.$emit(val ? 'enabled' : 'disabled')
        this.$emit('input', val)
      }
    },
    value (val, old) {
      if (val !== old) {
        this.active = coerce.boolean(this.value)
      }
    }
  },
  computed: {
    boolDisabled () { return coerce.boolean(this.disabled) },
    boolReadonly () { return coerce.boolean(this.readonly) },
    type () { return this.types[this.value ? this.trueType : this.falseType] || 'btn-default' }
  },
  methods: {
    toggle () {
      if (this.boolDisabled || this.boolReadonly) { return }
      this.active = !this.active
    }
  }
}
