module.exports = function (column, ascending, multiIndex = -1) {

  let sort = this.defaultSort
  let multiSort = this.userMultiSorting[this.currentlySorting.column] ? this.userMultiSorting[this.currentlySorting.column] : this.opts.multiSorting[this.currentlySorting.column]
  let asc = this.currentlySorting.ascending

  return function (a, b) {

    let aVal = a[column]
    let bVal = b[column]
    let dir = ascending ? 1 : -1
    let secondaryAsc

    if (typeof aVal === 'string') aVal = aVal.toLowerCase()
    if (typeof bVal === 'string') bVal = bVal.toLowerCase()

    if (aVal === bVal && multiSort && multiSort[multiIndex + 1]) {
      let sortData = multiSort[multiIndex + 1]
      if (typeof sortData.ascending !== 'undefined') {
        secondaryAsc = sortData.ascending
      } else {
        secondaryAsc = sortData.matchDir ? asc : !asc
      }

      return sort(sortData.column, secondaryAsc, multiIndex + 1)(a, b)
    }

    return aVal > bVal ? dir : -dir

  }

}

