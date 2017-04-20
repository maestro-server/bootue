export default {
  props: {
    button: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    name: {type: String, default: null},
    readonly: {type: Boolean, default: false},
    selectedValue: {default: true},
    type: {type: String, default: null},
    value: {default: false}
  },
  data () {
    return {
      check: this.value
    }
  },
  computed: {
    active () { return this.check === this.selectedValue },
    inGroup () { return this.$parent && this.$parent.btnGroup && !this.$parent._checkboxGroup },
    parentValue () { return this.$parent.val },
    buttonStyle () { return this.button || (this.$parent && this.$parent.btnGroup && this.$parent.buttons) },
    typeColor () { return (this.type || (this.$parent && this.$parent.type)) || 'default' }
  },
  watch: {
    check (val) {
      if (this.selectedValue === val) {
        this.$emit('input', val)
        this.$emit('checked', true)
        this.updateParent()
      }
    },
    parentValue () {
      this.updateFromParent()
    },
    value (val) {
      if (this.selectedValue == val) {
        this.check = val
      } else {
        this.check = false
      }
    }
  },
  created () {
    if (this.inGroup) {
      const parent = this.$parent
      parent._radioGroup = true
      this.updateFromParent()
    }
  },
  methods: {
    updateFromParent() {
      if (this.inGroup) {
        if (this.selectedValue == this.$parent.val) {
          this.check = this.selectedValue
        } else {
          this.check = false
        }
      }
    },
    updateParent() {
      if (this.inGroup) {
        if (this.selectedValue === this.check) {
          this.$parent.val = this.selectedValue
        }
      }
    },
    focus () {
      this.$refs.input.focus()
    },
    toggle () {
      if (this.disabled) { return }
      this.focus()
      if (this.readonly) { return }
      this.check = this.selectedValue
    }
  }
}
