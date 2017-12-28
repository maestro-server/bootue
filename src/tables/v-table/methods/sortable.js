module.exports = function (column) {

  let sortAll = typeof this.opts.sortable === 'boolean' && this.opts.sortable

  if (sortAll) return true

  return this.opts.sortable.indexOf(column) > -1

}
