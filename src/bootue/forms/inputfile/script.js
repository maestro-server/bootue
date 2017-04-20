import '../Forms.vue'

export default {

  props: {
    clearButton: {type: Boolean, default: true},
    name: {type: String},
    placeholder: {type: String, default: "Select your profile"},
    label: {type: String, default: null},
    disabled: {type: Boolean, default: false},
    help: {type: String, default: null},
    error: {type: String, default: null},
    multiple:  {type: Boolean, default: false},
    state: {type: String, default: null},
    icon: {type: Boolean, default: false}
  },

  data () {
    return {
      val:null,
      image: '',
      text: null
    }
  },

  computed: {
    textButton () {
      return this.text || this.placeholder
    },
    input () {
      return this.$refs.input
    },
    showIcon () {
      let icc;
      switch (this.state) {
        case 'success':
          icc = 'check'
          break;
        case 'error':
          icc = 'times'
          break;
        case 'warning':
          icc = 'exclamation'
          break;
      }
      return icc;
    },
    showError () {
      return this.error
    },
    showHelp () {
      return this.help && (!this.showError)
    },
    showState () {
      return this.state ? `has-${this.state}` : ''
    }
  },

  methods: {
    removeFile () {
      this.text = this.val = null
    },
    changeUploadImage (e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      this.val = files
      this.text = files[0].name
    }
  },

  watch: {
    val (val) {
      this.$emit('input', val)
    }
  }
}
