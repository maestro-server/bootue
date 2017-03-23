
export default {
  props: {
    type: {type: String, default: 'default'},
    placement: {type: String, default: ''}
  },
  data () {
    return {
      id: 'bs-example-navbar-collapse-1',
      collapsed: true,
      styles: {},
      _navbar: true
    }
  },
  computed: {
    slots () {
      return this._slotContents
    }
  },
  methods: {
    toggleCollapse (e) {
      e && e.preventDefault()
      this.collapsed = !this.collapsed
    }
  },
  created () {
    this._navbar = true
  }
}
