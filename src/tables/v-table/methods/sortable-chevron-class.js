module.exports = function (column) {

  let cls = this.opts.sortIcon.base + ' '

  if (!this.sortable(column))
    return

  if (this.hasMultiSort && this.orderBy.column && this.userMultiSorting[this.orderBy.column]) {
    let col = this.userMultiSorting[this.orderBy.column].filter(c => c.column === column)[0]
    if (col) cls += col.ascending ? this.opts.sortIcon.up : this.opts.sortIcon.down
  }

  if (column === this.orderBy.column) {
    cls += this.orderBy.ascending === 1 ? this.opts.sortIcon.up : this.opts.sortIcon.down
  }

  return cls
}
