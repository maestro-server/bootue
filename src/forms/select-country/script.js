import bsSelect from '../select/Select.vue'
import { country, states } from './countries'
import finderK from './_utils/finderKeyByValue'

export default {
  props: {
    baseclass: {
      type: String,
      default: null
    },
    name: {type: String, default: null},
    readonly: {type: Boolean, default: null},
    required: {type: Boolean, default: null},
    disabled: {type: Boolean, default: false},
    search: {type: Boolean, default: true},
    labelCountry: {type: String, default: 'Country'},
    labelState: {type: String, default: 'State/Province'},
    value: {type: Object}
  },

  data () {
    return {
      options: {
        country,
        state: []
      },
      vcountry: null,
      vstates: null,
      flagStart: false
    }
  },

  watch: {
    value (val) {
      if (val.country) {
        this.vcountry = val.country
      }

      if (val.state) {
        this.vstates = val.state
      }
    }
  },

  methods: {
    selectCountryChange (index) {
      let key = finderK(country, index)

      this.flagStart ? this.vstates = null : this.flagStart = true

      this.options.state = states[key + 1].split('|')

      this.$emit('input', {country: index})
    },

    selectStateChange (index) {

      this.$emit('input', {country: this.vcountry, state: index})
    }
  },

  components: {
    bsSelect
  }
}
