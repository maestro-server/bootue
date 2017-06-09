import '../Forms.vue'

export default {

  props: {
    clearButton: {type: Boolean, default: true},
    name: {type: String},
    placeholder: {type: String, default: 'Select your profile'},
    label: {type: String, default: null},
    disabled: {type: Boolean, default: false},
    help: {type: String, default: null},
    error: {type: String, default: null},
    multiple: {type: Boolean, default: false},
    state: {type: String, default: null},
    formType: {type: String, default: null},
    horizontalWrapper: {type: String, default: 'col-sm-9'},
    horizontalLabelWrapper: {type: String, default: 'col-sm-3'}
  },

  data () {
    return {
      val: null,
      image: '',
      text: null,
      inState: this.state,
      constants: {
        SUCCESS: {name: 'success', icon: 'check'},
        WARNING: {name: 'warning', icon: 'exclamation'},
        ERROR: {name: 'error', icon: 'times'}
      }
    }
  },

  computed: {
    textButton () { return this.text || this.placeholder },
    input () { return this.$refs.input },
    showError () { return this.error },
    showHelp () { return this.help && (!this.showError) },
    showState () { return this.inState ? `has-${this.inState}` : '' }
  },

  methods: {
    setState (val) {
      this.inState = val ? this.constants.ERROR.name : this.constants.SUCCESS.name
    },
    removeFile () {
      this.text = this.val = null
    },
    changeUploadImage (e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }

      this.val = files
      this.text = files[0].name
      this.$emit('selected', files)
    },
    wrapperClass () {
      let wClass

      switch (this.formType) {
        case 'inline':
          wClass = 'relative inline'
          break
        case 'horizontal':
          wClass = this.horizontalWrapper
          break
        default:
          wClass = 'relative'
      }

      return wClass
    },
    labelClass () {
      return this.formType === 'horizontal' ? this.horizontalLabelWrapper : null
    }
  },

  watch: {
    error (val) {
      this.setState(val)
    },
    val (val) {
      this.$emit('input', val)
    }
  },

  mounted () {
    if (this.error) {
      this.setState(this.error)
    }
  }
}
