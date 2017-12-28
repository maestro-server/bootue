let debounce = require('debounce')

module.exports = function (h, that) {

  let search = that.source === 'client' ? that.search.bind(that, that.data) : that.serverSearch.bind(that)

  return function (column) {
    return <input
      on-keyup={debounce(search, that.opts.debounce)}
      class="form-control"
      name={'vf__' + column}
      type="text"
      placeholder={that.display('filterBy', {column: that.getHeading(column)})}
      value={that.query[column]}
    />
  }
}

