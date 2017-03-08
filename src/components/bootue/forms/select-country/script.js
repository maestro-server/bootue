import bsSelect from '../select/Select.vue'
import bsoption from '../option/Option.vue'
import {country, states} from './countries'
import finderK from '../../../utils/finderKeyByValue'


export default {
  props: {
    baseclass: {
      type: String
    }
  },

  data () {
    return {
      options: {
        country,
        state: []
      },
      vcountry: null,
      vstates: null
    }
  },

  methods: {
    selectCountryChange (index) {
      let key = finderK(country, index)
      this.vstates = null

      this.options.state = states[key+1].split("|")

      this.$emit('input', {country: index})
    },

    selectStateChange (index) {

      this.$emit('input', {country: this.vcountry, state: index})
    }
  },

  mounted () {

  },

  components: {
    bsSelect,
    bsoption
  }
}
