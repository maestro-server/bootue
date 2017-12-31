
export default {
  props: {
    total_pages: {type: Number, default: 0},
    current_page: {type: Number, default: 1},
    size: {type: String, default: null},
    only_number: {type: Boolean, default: false}
  },

  watch: {
    current_page (val) {
      this.curr = val
    }
  },

  data () {
    return {
      curr: this.current_page
    }
  },

  methods: {
    emit (e) {
      this.$emit(e.type, e)
    },

    changePage (n) {
      this.$emit('changePage', n)
      this.curr = n
    }
  }
}
