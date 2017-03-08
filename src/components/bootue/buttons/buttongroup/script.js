export default {
  props: {
    buttons: {default: true},
    justified: {type: Boolean, default: false},
    type: {type: String, default: 'default'},
    value: {default: null},
    vertical: {type: Boolean, default: false}
  },
  data () {
    this._btnGroup = true
    return {
      val: this.value
    }
  },
  watch: {
    val (val) {
      this.$emit('input', val)
    }
  }
}
