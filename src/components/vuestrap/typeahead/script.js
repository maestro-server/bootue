import {delayer, getJSON} from '../../utils/utils.js'
let DELAY = 300

export default {
  props: {
    async: {type: String},
    data: {type: Array},
    delay: {type: Number, default: DELAY},
    asyncKey: {type: String, default: null},
    limit: {type: Number, default: 8},
    matchCase: {type: Boolean, default: false},
    matchStart: {type: Boolean, default: false},
    onHit: {
      type: Function,
      default (item) { return item }
    },
    placeholder: {type: String},
    template: {type: String},
    type: {type: String, default: 'text'},
    value: {type: String, default: ''}
  },
  data () {
    return {
      asign: '',
      showDropdown: false,
      noResults: true,
      current: 0,
      items: [],
      val: this.value
    }
  },
  computed: {
    templateComp () {
      return {
        template: typeof this.template === 'string' ? '<span>' + this.template + '</span>' : '<strong v-html="item"></strong>',
        props: { item: {default: null} }
      }
    }
  },
  watch: {
    val (val, old) {
      this.$emit('input', val)
      if (val !== old && val !== this.asign) this.__update()
    },
    value (val) {
      if (this.val !== val) { this.val = val }
    }
  },
  methods: {
    setItems (data) {
      if (this.async) {
        this.items = this.asyncKey ? data[this.asyncKey] : data
        this.items = this.items.slice(0, this.limit)
      } else {
        this.items = (data || []).filter(value => {
          if (typeof value === 'object') { return true }
          value = this.matchCase ? value : value.toLowerCase()
          let query = this.matchCase ? this.val : this.val.toLowerCase()
          return this.matchStart ? value.indexOf(query) === 0 : value.indexOf(query) !== -1
        }).slice(0, this.limit)
      }
      this.showDropdown = this.items.length > 0
    },
    setValue (value) {
      this.asign = value
      this.val = value
      this.items = []
      this.loading = false
      this.showDropdown = false
    },
    reset () { this.setValue(null) },
    setActive (index) { this.current = index },
    isActive (index) { return this.current === index },
    hit (e) {
      e.preventDefault()
      this.setValue(this.onHit(this.items[this.current], this))
    },
    up () {
      if (this.current > 0) { this.current-- }
      else { this.current = this.items.length - 1 }
    },
    down () {
      if (this.current < this.items.length - 1) { this.current++ }
      else { this.current = 0 }
    }
  },
  created () {
    this.__update = delayer(function () {
      if (!this.val) {
        this.reset()
        return
      }
      this.asign = ''
      if (this.async) {
        getJSON(this.async + this.val).then(data => {
          this.setItems(data)
        })
      } else if (this.data) {
        this.setItems(this.data)
      }
    }, 'delay', DELAY)
    this.__update()
  }
}
