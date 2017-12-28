module.exports = function (column) {

  let c = this.sortable(column) ? 'VueTables__sortable ' : ''

  c += this.columnClass(column)

  return c
}
