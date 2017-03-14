import {coerce} from '../_core/_utils/utils.js'
import dropdown from '../dropdown/Dropdown.vue'

export default {
  components: {
    dropdown
  },
  props: {
    // effect: {type: String, default: 'fadein'},
    justified: false,
    navStyle: {type: String, default: null},
    value: {type: Number, default: 0}
  },
  data () {
    let index = this.value || 0
    return {
      index,
      headers: [],
      tabs: []
    }
  },
  watch: {
    index (val) {
      this.$emit('active', val)
      this.$emit('input', val)
    },
    value (val) {
      this.index = val
    }
  },
  computed: {
    navStyleClass () {
      return [
        'nav',
        ~['pills', 'stacked'].indexOf(this.navStyle) ? 'nav-' + this.navStyle : 'nav-tabs',
        {
          'nav-justified': coerce.boolean(this.justified),
          'nav-pills': this.navStyle === 'stacked'
        }
      ]
    },
    show () { return this.tabs[this.index] || this.tabs[0] }
  },
  methods: {
    select (tab) {
      if (!tab.disabled) {
        this.index = this.tabs.indexOf(tab)
      }
    }
  },
  created () {
    this._isTabs = true
  }
}
