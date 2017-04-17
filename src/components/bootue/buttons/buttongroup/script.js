export default {
  props: {
    buttons: {type: Boolean, default: true},
    disabled: {type: Boolean, default: false},
    justified: {type: Boolean, default: false},
    type: {type: String, default: 'default'},
    value: {default: null},
    vertical: {type: Boolean, default: false}
  },
  computed: {
    btnGroup: function () { return !this.disabled }
  },
  data () {
    return {
      val: this.value
    }
  },
  watch: {
    // this will update EXTERNAL v-model when our val changes
    val (val) {
      this.$emit('input', val)
    },
    // this will update our INTERNAL val, when something external changes our v-model
    value (val) {
      this.val = val
    }
  }
}
