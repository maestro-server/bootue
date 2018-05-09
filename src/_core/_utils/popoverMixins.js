export default {
  props: {
    content: {type: String},
    effect: {type: String, default: 'fade'},
    header: {type: Boolean, default: true},
    placement: {type: String, default: 'top'},
    title: {type: String},
    trigger: {type: String}
  },
  data () {
    return {
      top: 0,
      left: 0,
      show: false
    }
  },
  computed: {
    events () { return { contextmenu: ['contextmenu'], hover: ['mouseleave', 'mouseenter'], focus: ['blur', 'focus'] }[this.trigger] || ['click'] }
  },
  methods: {
    beforeEnter () {
      this.position()
      setTimeout(() => this.position(), 5)
    },
    position () {
      let popover = this.$refs.popover
      let trigger = this.$refs.trigger.children[0]
      this.$nextTick(() => {
        if (trigger && popover) {
          switch (this.placement) {
            case 'top' :
              this.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2
              this.top = trigger.offsetTop - popover.offsetHeight
              break
            case 'left':
              this.left = trigger.offsetLeft - popover.offsetWidth
              this.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2
              break
            case 'right':
              this.left = trigger.offsetLeft + trigger.offsetWidth
              this.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2
              break
            case 'bottom':
              this.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2
              this.top = trigger.offsetTop + trigger.offsetHeight
              break
            default:
              console.warn('Wrong placement prop')
          }
          popover.style.top = this.top + 'px'
          popover.style.left = this.left + 'px'
        }
      })
    },
    toggle (e) {
      if (e && this.trigger === 'contextmenu') e.preventDefault()
      this.show = !this.show
      if (this.show) this.beforeEnter()
    }
  },
  mounted () {
    let trigger = this.$refs.trigger.children[0]
    if (!trigger) return console.error('Could not find trigger v-el in your component that uses popoverMixin.')

    if (this.trigger === 'focus' && !~trigger.tabIndex) {
      trigger = trigger.querySelectorAll('a,input,select,textarea,button')

      if (!trigger.length) { return }
    }

    this.events.forEach(event => {
      if (trigger.length == null) {
        trigger.addEventListener(event, this.toggle)
      } else {
        Array.prototype.map.call(trigger, (el) => {
          el.addEventListener(event, this.toggle)
        })
      }
    })
  }
}
