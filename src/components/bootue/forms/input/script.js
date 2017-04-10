

import '../Forms.vue'


export default {
  props: {
    clearButton: {type: Boolean, default: false},
    cols: {type: Number, default: null},
    datalist: {type: Array, default: null},
    disabled: {type: Boolean, default: false},
    error: {type: String, default: null},
    help: {type: String, default: null},
    hideHelp: {type: Boolean, default: true},
    icon: {type: Boolean, default: false},
    label: {type: String, default: null},
    name: {type: String, default: null},
    placeholder: {type: String, default: null},
    readonly: {type: Boolean, default: false},
    rows: {type: Number, default: 3},
    step: {type: Number, default: null},
    type: {type: String, default: 'text'},
    value: {default: null}
  },
  data () {
    let val = this.value
    return {
      options: this.datalist,
      val,
      isGroup: false
    }
  },
  computed: {
    errorText () {
      let value = this.value
      let error = [this.error]
      if (!value && this.required) error.push('(' + this.text.required.toLowerCase() + ')')
      if (value && (value.length < this.minlength)) error.push('(' + this.text.minLength.toLowerCase() + ': ' + this.minlength + ')')
      return error.join(' ')
    },
    id_datalist () {
      if (this.type !== 'textarea' && this.datalist instanceof Array) {
        if (!this._id_datalist) {
          if (!this.$root.id_datalist) { this.$root.id_datalist = 0 }
          this._id_datalist = 'input-datalist' + this.$root.id_datalist++
        }
        return this._id_datalist
      }
      return null
    },
    input () { return this.$refs.input },
    showError () { return this.error && this.valid === false },
    showHelp () { return this.help && (!this.showError || !this.hideHelp) },
    showIcon () {},
    title () { return this.errorText || this.help || '' }
  },
  watch: {
    datalist (val, old) {
      if (val !== old && val instanceof Array) { this.options = val }
    },
    match () { this.eval() },
    options (val, old) {
      if (val !== old) this.$emit('options', val)
    },
    url () {
      this._url()
    },
    val (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    attr (value) {
      return ~['', null, undefined].indexOf(value) || value instanceof Function ? null : value
    },
    emit (e) {
      this.$emit(e.type, e.type == 'input' ? e.target.value : e)
    },
    focus () { this.input.focus() },
    reset() {
      this.value = ''
      this.valid = null
      if (this._timeout.mask) clearTimeout(this._timeout.mask)
      if (this._timeout.eval) clearTimeout(this._timeout.eval)
    }
  },
  created () {
    this._input = true
  },
  mounted () {
    this.isGroup = typeof this.$slots.before === "object" || typeof this.$slots.after === "object"
  },
  beforeDestroy () {
    if (this._parent) {
      let index = this._parent.children.indexOf(this)
      this._parent.children.splice(index, 1)
    }
  }
}
