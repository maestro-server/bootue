
import 'izitoast/dist/css/iziToast.min.css'

export default {
  name: 'toast',

  methods: {
    callToast (type, title, message) {
      type = type.charAt(0).toUpperCase() + type.slice(1);
      const method = `show${type}Msg`
      this[method]({title, message})
    }
  },

  notifications: {
    showSuccessMsg: {
      type: 'success'
    },

    showInfoMsg: {
      type: 'info'
    },

    showWarningMsg: {
      type: 'warning'
    },

    showErrorMsg: {
      type: 'error'
    }
  }
}
