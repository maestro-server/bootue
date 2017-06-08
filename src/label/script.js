export default {
  props: {
    type: {type: String, default: "primary"}
  },

  methods: {
    sizeClass () {
      return `label-${this.type}`
    }
  }
}
