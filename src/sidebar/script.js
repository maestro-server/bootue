import getScrollBarWidth from '../_core/_utils/getScrollBarWidth.js'

export default {
  props: {
    header: {type: String},
    placement: {type: String, default: 'right'},
    show: {type: Boolean, required: true},
    width: {type: Number, default: 320}
  },
  watch: {
    show (val) {
      this.$emit('input', val)
      this.$emit(this.show ? 'open' : 'close')
      const body = document.body
      const scrollBarWidth = getScrollBarWidth()
      if (val) {
        if (!this._backdrop) {
          this._backdrop = document.createElement('div')
        }
        this._backdrop.className = 'aside-backdrop'
        body.appendChild(this._backdrop)
        body.classList.add('modal-open')
        if (scrollBarWidth !== 0) {
          body.style.paddingRight = scrollBarWidth + 'px'
        }
        this._backdrop.classList.add('in')
        this._backdrop.addEventListener('click', () => this.trigger_close(), false)
      } else {
        this._backdrop.addEventListener('transitionend', () => {
          try {
            body.classList.remove('modal-open')
            body.style.paddingRight = '0'
            body.removeChild(this._backdrop)
            this._backdrop = null
          } catch (e) {
            console.log(e)
          }
        }, false)
        this._backdrop.className = 'aside-backdrop'
      }
    }
  },
  methods: {
    trigger () {
      return {
        close: () => this.trigger_close(),
        open: () => this.trigger_open()
      }
    },
    trigger_close () {
      this.$emit('close')
    },
    trigger_open () {
      this.$emit('open')
    }
  },
  mounted () {
    this.$emit('trigger', () => this.trigger)
  }
}
