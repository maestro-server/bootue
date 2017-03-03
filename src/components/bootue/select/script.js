import {translations} from '../../utils/utils.js'
import ClickOutside from '../../directives/ClickOutside.js'

var timeout = {}
export default {
  directives: {
    ClickOutside
  },
  props: {
    clearButton: {type: Boolean, default: false},
    closeOnSelect: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    lang: {type: String, default: navigator.language},
    limit: {type: Number, default: 1024},
    minSearch: {type: Number, default: 0},
    multiple: {type: Boolean, default: false},
    name: {type: String, default: null},
    options: {type: Array, default () { return [] }},
    optionsLabel: {type: String, default: 'label'},
    optionsValue: {type: String, default: 'value'},
    parent: {default: true},
    placeholder: {type: String, default: null},
    readonly: {type: Boolean, default: null},
    required: {type: Boolean, default: null},
    search: {type: Boolean, default: false},
    searchText: {type: String, default: null},
    url: {type: String, default: null},
    value: null
  },
  data () {
    return {
      list: [],
      loading: null,
      searchValue: null,
      show: false,
      notify: false,
      val: null,
      valid: null
    }
  },
  computed: {
    canSearch () { return this.minSearch ? this.list.length >= this.minSearch : this.search },
    classes () { return [{open: this.show, disabled: this.disabled}, this.class, this.isLi ? 'dropdown' : this.inInput ? 'input-group-btn' : 'btn-group'] },
    filteredOptions () {
      var search = (this.searchValue || '').toLowerCase()
      return !search ? this.list : this.list.filter(el => {
        return ~el[this.optionsLabel].toLowerCase().search(search)
      })
    },
    hasParent () { return this.parent instanceof Array ? this.parent.length : this.parent },
    inInput () { return this.$parent._input },
    isLi () { return this.$parent._navbar || this.$parent.menu || this.$parent._tabset },
    limitText () { return this.text.limit.replace('{{limit}}', this.limit) },
    selected () {
      if (this.list.length === 0) { return '' }
      var sel = this.values.map(val => (this.list.find(o => o[this.optionsValue] === val) || {})[this.optionsLabel]).filter(val => val !== undefined)
      this.$emit('selected', sel)
      return sel.join(', ')
    },
    showPlaceholder () { return (this.values.length === 0 || !this.hasParent) ? (this.placeholder || this.text.notSelected) : null },
    text () { return translations(this.lang) },
    values () { return this.val instanceof Array ? this.val : ~[null, undefined].indexOf(this.val) ? [] : [this.val] },
    valOptions () { return this.list.map(el => el[this.optionsValue]) }
  },
  watch: {
    options (options) {
      if (options instanceof Array) this.setOptions(options)
    },
    show (val) {
      if (val) {
        this.$refs.search ? this.$refs.search.focus() : this.$refs.btn.focus()
        // onBlur(this.$refs.select, e => { this.show = false })
      } else {
        // offBlur(this.$refs.select)
      }
    },
    url () {
      this.urlChanged()
    },
    valid (val, old) {
      this.$emit('isvalid', val)
      this.$emit(!val ? 'invalid' : 'valid')
      if (val !== old && this._parent) this._parent.validate()
    },
    value (val, old) {
      if (val !== old) { this.val = val }
    },
    val (val, old) {
      if (val === undefined) { this.val = val = null }
      if (val !== old) {
        this.$emit('change', val)
        this.$emit('input', val)
      }
      if (val instanceof Array && val.length > this.limit) {
        this.val = val.slice(0, this.limit)
        this.notify = true
        if (timeout.limit) clearTimeout(timeout.limit)
        timeout.limit = setTimeout(() => {
          timeout.limit = false
          this.notify = false
        }, 1500)
      }
      this.valid = this.validate()
    }
  },
  methods: {
    close () {
      this.show = false
    },
    checkData () {
      if (this.multiple) {
        if (this.limit < 1) { this.limit = 1 }
        if (!(this.val instanceof Array)) {
          this.val = (this.val === null || this.val === undefined) ? [] : [this.val]
        }
        var values = this.valOptions
        this.val = this.val.filter(el => ~values.indexOf(el))
        if (this.values.length > this.limit) {
          this.val = this.val.slice(0, this.limit)
        }
      } else {
        if (!~this.valOptions.indexOf(this.val)) { this.val = null }
      }
    },
    clear () {
      if (this.disabled || this.readonly) { return }
      this.val = this.val instanceof Array ? [] : null
      this.toggle()
    },
    clearSearch () {
      this.searchValue = ''
      this.$refs.search.focus()
    },
    isSelected (v) {
      return this.values.indexOf(v) > -1
    },
    select (v) {
      if (this.val instanceof Array) {
        var newVal = this.val.slice(0)
        if (~newVal.indexOf(v)) {
          newVal.splice(newVal.indexOf(v), 1)
        } else {
          newVal.push(v)
        }
        this.val = newVal
        if (this.closeOnSelect) {
          this.toggle()
        }
      } else {
        this.val = v
        this.toggle()
      }
    },
    setOptions (options) {
      this.list = options.map(el => {
        if (el instanceof Object) { return el }
        let obj = {}
        obj[this.optionsLabel] = el
        obj[this.optionsValue] = el
        return obj
      })
      this.$emit('options', this.list)
    },
    toggle () {
      this.show = !this.show
      if (!this.show) this.$refs.btn.focus()
    },
    urlChanged () {
      if (!this.url || !this.$http) { return }
      this.loading = true
      this.$http.get(this.url).then(response => {
        var data = response.data instanceof Array ? response.data : []
        try { data = JSON.parse(data) } catch (e) {}
        this.setOptions(data)
        this.loading = false
        this.checkData()
      }, response => {
        this.loading = false
      })
    },
    validate () {
      return !this.required ? true : this.val instanceof Array ? this.val.length > 0 : this.val !== null
    }
  },
  created () {
    this.setOptions(this.options)
    this.val = this.value
    this._select = true
    if (this.val === undefined || !this.parent) { this.val = null }
    if (!this.multiple && this.val instanceof Array) {
      this.val = this.val[0]
    }
    this.checkData()
    if (this.url) this.urlChanged()
    let parent = this.$parent
    while (parent && !parent._formValidator) { parent = parent.$parent }
    if (parent && parent._formValidator) {
      parent.children.push(this)
      this._parent = parent
    }
  },
  mounted () {
    if (this._parent) this._parent.children.push(this)
    this.setOptions(this.options)
    this.val = this.value
    this.checkData()
  },
  beforeDestroy () {
    if (this._parent) {
      var index = this._parent.children.indexOf(this)
      this._parent.children.splice(index, 1)
    }
  }
}
