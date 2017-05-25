export default {
  props: {
    size: {type: String}
  },
  computed: {
    sizeClass () {
      return `well-${this.size}`
    }
  }
}
