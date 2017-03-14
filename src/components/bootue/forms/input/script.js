import {coerce, delayer, translations} from '../../_core/_utils/utils.js'
import $ from '../../_core/_utils/NodeList.js'
import core from '../Forms.vue'

let DELAY = 300

export default {
  props: {
    clearButton: {type: Boolean, default: false},
    cols: {type: Number, default: null},
    datalist: {type: Array, default: null},
    disabled: {type: Boolean, default: false},
    enterSubmit: {type: Boolean, default: false},
    error: {type: String, default: null},
    help: {type: String, default: null},
    hideHelp: {type: Boolean, default: true},
    icon: {type: Boolean, default: false},
    label: {type: String, default: null},
    lang: {type: String, default: navigator.language},
    mask: null,
    maskDelay: {type: Number, default: 100},
    match: {type: String, default: null},
    max: {type: String, default: null},
    maxlength: {type: Number, default: null},
    min: {type: String, default: null},
    minlength: {type: Number, default: 0},
    name: {type: String, default: null},
    pattern: {default: null},
    placeholder: {type: String, default: null},
    readonly: {type: Boolean, default: false},
    required: {type: Boolean, default: false},
    rows: {type: Number, default: 3},
    step: {type: Number, default: null},
    type: {type: String, default: 'text'},
    url: {type: String, default: null},
    urlMap: {type: Function, default: null},
    validationDelay: {type: Number, default: 250},
    value: {default: null}
  },
  data () {
    let val = this.value
    return {
      options: this.datalist,
      val,
      valid: null,
      timeout: null
    }
  },
  computed: {
    canValidate () { return !this.disabled && !this.readonly && (this.required || this.regex || this.nativeValidate || this.match !== null) },
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
    nativeValidate () { return (this.input || {}).checkValidity && (~['url', 'email'].indexOf(this.type.toLowerCase()) || this.min || this.max) },
    regex () { return coerce.pattern(this.pattern) },
    showError () { return this.error && this.valid === false },
    showHelp () { return this.help && (!this.showError || !this.hideHelp) },
    text () { return translations(this.lang) },
    title () { return this.errorText || this.help || '' }
  },
  watch: {
    datalist (val, old) {
      if (val !== old && val instanceof Array) { this.options = val }
    },
    match (val) { this.eval() },
    options (val, old) {
      if (val !== old) this.$emit('options', val)
    },
    url (val) {
      this._url()
    },
    val (val, old) {
      this.$emit('input', val)
      if (val !== old) {
        if (this.mask instanceof Function) {
          val = this.mask(val || '')
          if (this.val !== val) {
            if (this._timeout.mask) clearTimeout(this._timeout.mask)
            this._timeout.mask = setTimeout(() => {
              this.val = val
            }, isNaN(this.maskDelay) ? 0 : this.maskDelay)
          }
        }
        this.eval()
      }
    },
    valid (val, old) {
      this.$emit('isvalid', val)
      this.$emit(!val ? 'invalid' : 'valid')
      if (this._parent) this._parent.validate()
    },
    value (val) {
      if (this.val !== val) { this.val = val }
    }
  },
  methods: {
    attr (value) {
      return ~['', null, undefined].indexOf(value) || value instanceof Function ? null : value
    },
    emit (e) {
      this.$emit(e.type, e.type == 'input' ? e.target.value : e)
      if (e.type === 'blur' && this.canValidate) { this.valid = this.validate() }
    },
    eval () {
      if (this._timeout.eval) clearTimeout(this._timeout.eval)
      if (!this.canValidate) {
        this.valid = true
      } else {
        this._timeout.eval = setTimeout(() => {
          this.valid = this.validate()
          this._timeout.eval = null
        }, this.validationDelay)
      }
    },
    focus () { this.input.focus() },
    submit () {
      if (this.$parent._formValidator) {
        return this.$parent.validate()
      }
      if (this.input.form) {
        const invalids = $('.form-group.validate:not(.has-success)', this.input.form)
        if (invalids.length) {
          invalids.find('input,textarea,select')[0].focus()
        } else {
          this.input.form.submit()
        }
      }
    },
    validate () {
      if (!this.canValidate) { return true }
      let value = (this.val || '').trim()
      if (!value) { return !this.required }
      if (this.match !== null) { return this.match === value }
      if (value.length < this.minlength) { return false }
      if (this.nativeValidate && !this.input.checkValidity()) { return false }
      if (this.regex) {
        if (!(this.regex instanceof Function ? this.regex(this.value) : this.regex.test(this.value))) { return false }
      }
      return true
    },
    reset() {
      this.value = ''
      this.valid = null
      if (this._timeout.mask) clearTimeout(this._timeout.mask)
      if (this._timeout.eval) clearTimeout(this._timeout.eval)
    }
  },
  created () {
    this._input = true
    this._timeout = {}
    let parent = this.$parent
    while (parent && !parent._formValidator) { parent = parent.$parent }
    if (parent && parent._formValidator) {
      parent.children.push(this)
      this._parent = parent
    }
    this._url = delayer(function () {
      if (!this.url || !this.$http || this._loading) { return }
      this._loading = true
      this.$http.get(this.url).then(response => {
        let data = response.data instanceof Array ? response.data : []
        try { data = JSON.parse(data) } catch (e) {}
        if (this.urlMap) { data = data.map(this.urlMap) }
        this.options = data
        this.loading = false
      }, response => {
        this.loading = false
      })
    }, DELAY)
    if (this.url) this._url()
  },
  mounted () {
    // $(this.input).on('focus', e => { this.$emit('focus', e) }).on('blur', e => {
    //   if (this.canValidate) { this.valid = this.validate() }
    //   this.$emit('blur', e)
    // })
  },
  beforeDestroy () {
    // $(this.input).off()
    if (this._parent) {
      let index = this._parent.children.indexOf(this)
      this._parent.children.splice(index, 1)
    }
  }
}
