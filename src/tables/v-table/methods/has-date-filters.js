let intersection = require('array-intersection')

module.exports = function () {

  let opts = this.opts

  return opts.dateColumns.length &&
    opts.filterByColumn &&
    ((typeof opts.filterable === 'boolean' && opts.filterable) || intersection(opts.filterable, opts.dateColumns).length)
}
