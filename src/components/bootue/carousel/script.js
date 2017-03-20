export default {
  props: {
    indicators: {
      type: Boolean,
      default: true
    },
    controls: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 5000
    }
  },
  data () {
    return {
      indicator_list: [],
      index: 0,
      isAnimating: false,
      sliders: [],
      selected: undefined
    }
  },
  watch: {
    index (newVal, oldVal) {
      this.slide(newVal > oldVal ? 'left' : 'right', newVal, oldVal)
    }
  },
  methods: {
    indicatorClick (index) {
      if (this.isAnimating || this.index === index) return false
      this.isAnimating = true
      this.index = index
    },
    slide (direction, next, prev) {
      if (!this.$el) { return }
      this.sliders = this.$el.querySelectorAll('.item')

      if (!this.sliders.length) { return }
      this.selected = this.sliders[next] || this.sliders[0]

      let cDirection = direction === 'left' ? 'next' : 'prev'
      this.selected.classList.add(cDirection)

      // request property that requires layout to force a layout
      let x = this.selected.clientHeight
      this.selected.classList.add(direction)
      this.sliders[prev].classList.add(direction)

      this.sliders[prev].addEventListener('transitionend', this.finishTransion, false)
    },
    finishTransion (obj) {
      Array.prototype.map.call(this.sliders, (el) => {
        obj.target.removeEventListener('transitionend', this.finishTransion, false)
        el.className = 'item'
      })

      this.selected.classList.add('active')
      this.isAnimating = false
    },
    getElementClassItem () {
      return this.$el.querySelectorAll('.item')
    },
    next () {
      if (!this.$el || this.isAnimating) { return false }
      this.isAnimating = true

      this.index + 1 < this.getElementClassItem().length
      ? this.index += 1
      : this.index = 0
    },
    prev () {
      if (!this.$el || this.isAnimating) { return false }
      this.isAnimating = true
      this.index === 0

      ? this.index = this.getElementClassItem().length - 1
      : this.index -= 1
    },
    toggleInterval (val) {
      if (val === undefined) { val = this._intervalID }
      if(this._intervalID) {
        clearInterval(this._intervalID)
        delete this._intervalID
      }
      if(val && this.interval > 0) {
        this._intervalID = setInterval(this.next, this.interval)
      }
    }
  },
  mounted () {
    this.toggleInterval(true)


    this.$el.addEventListener('mouseenter', () => this.toggleInterval(false), false)
    this.$el.addEventListener('mouseleave', () => this.toggleInterval(true), false)

  },
  beforeDestroy () {
    this.toggleInterval(false)

    this.$el.removeEventListener('mouseenter', () => this.toggleInterval(false), false)
    this.$el.removeEventListener('mouseleave', () => this.toggleInterval(true), false)
  }
}
