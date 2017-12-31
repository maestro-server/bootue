import getScrollBarWidth from '../_core/_utils/getScrollBarWidth.js'

export default {
  props: {
    backdrop: {type: Boolean, default: true},
    callback: {type: Function, default: null},
    cancelText: {type: String, default: 'Close'},
    effect: {type: String, default: null},
    large: {type: Boolean, default: false},
    okText: {type: String, default: 'Save changes'},
    small: {type: Boolean, default: false},
    title: {type: String, default: ''},
    value: {type: Boolean, required: true},
    width: {default: null},
    subModal: {type: Boolean, default: false}
  },
  data () {
    return {
      transition: false,
      val: null
    }
  },
  computed: {
    optionalWidth () {
      if (this.width === null) {
        return null
      } else if (Number.isInteger(this.width)) {
        return this.width + 'px'
      }
      return this.width
    }
  },
  watch: {
    transition (val, old) {
      if (val === old) { return }
      const el = this.$el
      const body = document.body
      if (val) {
        if (this.val) {
          el.querySelector('.modal-content').focus()
          el.style.display = 'block'
          setTimeout(() => el.classList.add('in'), 0)
          body.classList.add('modal-open')
          if (getScrollBarWidth() !== 0) {
            body.style.paddingRight = getScrollBarWidth() + 'px'
          }
        } else {
          el.classList.remove('in')
        }
      } else {
        this.$emit(this.val ? 'opened' : 'closed')
        if (!this.val) {
          el.style.display = 'none'
          body.style.paddingRight = null
          if (!this.subModal) {
            body.classList.remove('modal-open')
          }
        }
      }
    },
    val (val, old) {
      this.$emit('input', val)
      if (old === null ? val === true : val !== old) this.transition = true
    },
    value (val, old) {
      if (val !== old) this.val = val
    }
  },
  methods: {
    action (val, p) {
      if (val === null) { return }
      if (val && this.callback instanceof Function) this.callback()
      this.$emit(val ? 'ok' : 'cancel', p)
      this.val = val || false
    }
  },
  mounted () {
    this.val = this.value
  }
}
