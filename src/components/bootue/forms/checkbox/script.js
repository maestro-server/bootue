import '../Forms.vue'

export default {
  props: {
    button: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    falseValue: {default: false},
    name: {type: String, default: null},
    readonly: {type: Boolean, default: false},
    trueValue: {default: true},
    type: {type: String, default: null},
    value: {default: false}
  },
  data () {
    return {
      checked: (this.value === this.trueValue)
    }
  },
  computed: {
    isButton () { return this.button || (this._inGroup && this.$parent.buttons) },
    isFalse () { return this.value === this.falseValue },
    isTrue () { return this.value === this.trueValue },
    parentValue () { return this._ingroup && this.$parent.val },
    typeColor () { return (this.type || (this.$parent && this.$parent.type)) || 'default' }
  },
  watch: {
    checked (val) {
      let value = val ? this.trueValue : this.falseValue
      this.$emit('checked', val)
      this.$emit('input', value)
      this.eval()
    },
    parentValue (val) {
      let checked = val === this.trueValue
      if (this.checked !== checked) {
        this.checked = checked
      }
    },
    value (val) {
      let checked = val === this.trueValue
      if (this.checked !== checked) {
        this.checked = checked
      }
    }
  },
  created () {
    const parent = this.$parent
    if (parent && parent._btnGroup && !parent._radioGroup) {
      this._inGroup = true
      parent._checkboxGroup = true
      if (!(parent.val instanceof Array)) { parent.val = [] }
      this.eval()
    }
  },
  mounted () {
    if (!this.$parent._checkboxGroup || typeof this.value === 'boolean') { return }
    if (this.$parent.val.length) {
      // this.checked = ~this.$parent.val.indexOf(this.value)
      this.$emit('checked', ~this.$parent.val.indexOf(this.value))
    } else if (this.checked) {
      this.$parent.val.push(this.value)
    }
  },
  methods: {
    eval () {
      if (this._inGroup) {
        let value = this.checked ? this.isTrue : this.isFalse
        let index = this.$parent.val.indexOf(value)
        if (this.checked && !~index) this.$parent.val.push(value)
        if (!this.checked && ~index) this.$parent.val.splice(index, 1)
      }
    },
    toggle () {
      if (this.disabled || this.readonly) { return }
      this.checked = !this.checked
    }
  }
}
