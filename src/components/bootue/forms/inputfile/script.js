import core from '../Forms.vue'

export default {

  props: {
    name: {
      type: String
    },

    defaultLabel: {
      type: String,
      default: "Select your profile"
    },

    label: {
      type: String
    }
  },

  data () {
    return {
      filename: null
    }
  },

  methods: {
    removeFile () {

    },

    changeUploadImage (file) {

    }
  }
}
