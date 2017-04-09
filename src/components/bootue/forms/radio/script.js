import '../Forms.vue'

export default {
  props: {
    button: {type: Boolean, default: false},
    checkedValue: {default: true},
    disabled: {type: Boolean, default: false},
    name: {type: String, default: null},
    readonly: {type: Boolean, default: false},
    type: {type: String, default: null},
    value: {default: false}
  },
  data () {
    return {
      check: this.value
    }
  },
  computed: {
    active () { return this.check === this.checkedValue },
    parentValue () { return this._inGroup ? this.$parent.val === this.value : null },
    buttonStyle () { return this.button || (this._inGroup && this.$parent.buttons) },
    typeColor () { return (this.type || (this.$parent && this.$parent.type)) || 'default' }
  },
  watch: {
    check (val) {
      if (this.checkedValue === val) {
        this.$emit('input', val)
        this.$emit('checked', true)
        if (this._inGroup) { this.$parent.val = val }
      }
    },
    parentValue (val) {
      if (this.check !== val && this.checkedValue === val) { this.check = val }
    },
    value (val) {
      this.check = this.checkedValue === val ? val : null
    }
  },
  created () {
    let parent = this.$parent
    if (parent && parent._btnGroup && !parent._checkboxGroup) {
      this._inGroup = true
      parent._radioGroup = true
    }
    if (this.$parent._radioGroup) {
      if (this.$parent.val) {
        this.check = (this.$parent.val === this.checkedValue)
      } else if (this.check) {
        this.$parent.val = this.checkedValue
      }
    }
  },
  methods: {
    focus () {
      this.$refs.input.focus()
    },
    toggle () {
      if (this.disabled) { return }
      this.focus()
      if (this.readonly) { return }
      this.check = this.checkedValue
      if (this._inGroup) {
        this.$parent.val = this.checkedValue
      }
    }
  }
}
