import '../Forms.vue'

let timeout = {}
export default {
  props: {
    clearButton: {type: Boolean, default: false},
    closeOnSelect: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    label: {type: String, default: null},
    limit: {type: Number, default: 1024},
    help: {type: String, default: null},
    error: {type: String, default: null},
    minSearch: {type: Number, default: 0},
    state: {type: String, default: null},
    multiple: {type: Boolean, default: false},
    name: {type: String, default: null},
    options: {type: Array, default: () => []},
    optionsLabel: {type: String, default: 'label'},
    optionsValue: {type: String, default: 'value'},
    parent: {default: true},
    placeholder: {type: String, default: 'Nothing Selected'},
    readonly: {type: Boolean, default: null},
    required: {type: Boolean, default: null},
    search: {type: Boolean, default: false},
    searchText: {type: String, default: 'Search'},
    value: null,
    formType: {type: String, default: null},
    horizontalWrapper: {type: String, default: 'col-sm-9'},
    horizontalLabelWrapper: {type: String, default: 'col-sm-3'}
  },
  data () {
    return {
      list: [],
      loading: null,
      searchValue: null,
      inState: this.state,
      show: false,
      notify: false,
      val: null,
      constants: {
        SUCCESS: {name: 'success', icon: 'check'},
        WARNING: {name: 'warning', icon: 'exclamation'},
        ERROR: {name: 'error', icon: 'times'}
      }
    }
  },
  computed: {
    showError () {return this.error},
    showHelp () {return this.help && (!this.showError)},
    showState () {return this.inState ? `has-${this.inState}` : ''},
    canSearch () {
      return this.minSearch ? this.list.length >= this.minSearch : this.search
    },
    classes () {
      const groupBtn = this.inInput ? 'input-group-btn' : 'btn-group'
      const classLi = this.isLi ? 'dropdown' : groupBtn
      const options = {
        open: this.show,
        disabled: this.disabled
      }
      return [options, this.class, classLi]
    },
    filteredOptions () {
      let search = (this.searchValue || '').toLowerCase()
      return !search ? this.list : this.list.filter(el => {
        return ~el[this.optionsLabel].toLowerCase().search(search)
      })
    },
    hasParent () {
      return this.parent instanceof Array ? this.parent.length : this.parent
    },
    inInput () {
      return this.$parent._input
    },
    isLi () {
      return this.$parent._navbar || this.$parent.menu || this.$parent._tabset
    },
    selected () {
      if (this.list.length === 0) {
        return ''
      }
      let sel = this.values.map(val => (this.list.find(o => o[this.optionsValue] === val) || {})[this.optionsLabel]).filter(val => val !== undefined)
      this.$emit('selected', sel)
      return sel.join(', ')
    },
    showPlaceholder () {
      const place = this.placeholder || this.options[0][this.optionsLabel]
      const fallback = (place || this.text.notSelected)
      const int = this.values.length === 0 || !this.hasParent

      return int ? fallback : null
    },
    values () {
      const fallback = ~[null, undefined].indexOf(this.val) ? [] : [this.val]
      return this.val instanceof Array ? this.val : fallback
    },
    valOptions () {
      return this.list.map(el => el[this.optionsValue])
    }
  },
  watch: {
    error (val) {
      this.setState(val)
    },
    options (options) {
      if (options instanceof Array) {
        this.setOptions(options)
      }
    },
    show (val) {
      if (val) {
        this.$refs.search ? this.$refs.search.focus() : this.$refs.btn.focus()
      }
      this.eventClickOutside(val)
    },
    value (val, old) {
      if (val !== old) {
        this.val = val
      }
    },
    val (val, old) {
      if (val === undefined) {
        this.val = val = null
      }
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
    }
  },
  methods: {
    setState (val) {
      this.inState = val ? this.constants.ERROR.name : this.constants.SUCCESS.name
    },
    close () {
      this.show = false
    },
    checkData () {
      if (this.multiple) {
        if (this.limit < 1) {
          this.limit = 1
        }
        if (!(this.val instanceof Array)) {
          this.val = (this.val === null || this.val === undefined) ? [] : [this.val]
        }
        let values = this.valOptions
        this.val = this.val.filter(el => ~values.indexOf(el))
        if (this.values.length > this.limit) {
          this.val = this.val.slice(0, this.limit)
        }
      } else {
        if (!~this.valOptions.indexOf(this.val)) {
          this.val = null
        }
      }
    },
    clear () {
      if (this.disabled || this.readonly) {
        return
      }
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
        let newVal = this.val.slice(0)
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
        if (el instanceof Object) {
          return el
        }
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
    clickOutside (e) {
      if (!this.$el.contains(e.target)) {
        this.close()
      }
    },
    eventClickOutside (val) {
      if (val) {
        document.addEventListener('click', this.clickOutside, false)
        return
      }

      document.removeEventListener('click', this.clickOutside, false)
    },
    wrapperClass () {
      let wClass

      switch (this.formType) {
        case 'inline':
          wClass = 'relative inline'
        break;
        case 'horizontal':
          wClass = this.horizontalWrapper
        break;
        default:
          wClass = 'relative'
      }

      return wClass
    },
    labelClass () {
      return this.formType == "horizontal" ? this.horizontalLabelWrapper : null;
    }
  },
  created () {
    this.setOptions(this.options)
    this.val = this.value
    this._select = true
    if (this.val === undefined || !this.parent) {
      this.val = null
    }
    if (!this.multiple && this.val instanceof Array) {
      this.val = this.val[0]
    }
    this.checkData()
  },
  mounted () {
    if (this._parent) this._parent.children.push(this)
    this.setOptions(this.options)
    this.val = this.value
    this.checkData()

    if(this.error) {
      this.setState(this.error)
    }
  },
  beforeDestroy () {
    if (this._parent) {
      let index = this._parent.children.indexOf(this)
      this._parent.children.splice(index, 1)
    }
  }
}
