import bus from '../bus'

module.exports = function () {
  let event = 'vue-tables'
  if (this.name) event += '.' + this.name

  this.opts.customFilters.forEach(function (filter) {
    bus.$off(`${event}.filter::${filter}`)
    bus.$on(`${event}.filter::${filter}`, function (value) {
      this.customQueries[filter] = value
      this.updateState('customQueries', this.customQueries)
      this.refresh()
    }.bind(this))
  }.bind(this))
}
