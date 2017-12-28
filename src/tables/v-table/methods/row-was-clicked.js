module.exports = function (row, event) {

  let data
  let id = this.opts.uniqueKey

  if (this.source === 'client' && typeof row[id] !== 'undefined') {
    data = this.tableData.filter(function (r) {
      return row[id] === r[id]
    })[0]
  } else {
    data = row
  }

  this.dispatch('row-click', {row: data, event})

}
