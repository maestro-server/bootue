export default {
  props: {
    button: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    falseValue: {default: false},
    name: {type: String, default: null},
    readonly: {type: Boolean, default: false},
    trueValue: {default: true},
    type: {type: String, default: "primary"},
    value: {default: false}
  },
  data () {
    return {
      checked: (this.value === this.trueValue)
    }
  },
  computed: {
    inGroup () { return this.$parent && this.$parent.btnGroup && !this.$parent._radioGroup },
    isButton () { return this.button || (this.$parent && this.$parent.btnGroup && this.$parent.buttons) },
    isFalse () { return this.value === this.falseValue },
    isTrue () { return this.value === this.trueValue },
    parentValue () { return this.$parent.val },
    typeColor () { return (this.type || (this.$parent && this.$parent.type)) || 'default' }
  },
  watch: {
    checked (val) {
      let value = val ? this.trueValue : this.falseValue
      this.$emit('checked', val)
      this.$emit('input', value);
      this.updateParent()
    },
    parentValue () {
      this.updateFromParent();
    },
    value (val) {
      let checked = val === this.trueValue
      if (this.checked !== checked) {
        this.checked = checked
      }
    }
  },
  created () {
    if (this.inGroup) {
      const parent = this.$parent
      parent._checkboxGroup = true
      if (!(parent.val instanceof Array)) { parent.val = [] }
    }
  },
  mounted () {
    this.updateFromParent();
  },
  methods: {
    // called @ mounted(), or whenever $parent.val changes
    // sync our state with the $parent.val
    updateFromParent() {
      if (this.inGroup) {
        let index = this.$parent.val.indexOf(this.trueValue)
        this.checked = ~index
      }
    },
    // called when our checked state changes
    updateParent() {
      if (this.inGroup) {
        let index = this.$parent.val.indexOf(this.trueValue)
        if (this.checked && !~index) this.$parent.val.push(this.trueValue)
        if (!this.checked && ~index) this.$parent.val.splice(index, 1)
      }
    },
    toggle () {
      if (this.disabled || this.readonly) { return }
      this.checked = !this.checked
    }
  }
}
