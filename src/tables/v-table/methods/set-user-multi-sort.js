module.exports = function (secondaryCol) {

  let primaryCol = this.orderBy.column
  let primaryAsc = this.orderBy.ascending

  if (!this.userMultiSorting[primaryCol])
    this.userMultiSorting[primaryCol] = []

  let multi = this.userMultiSorting[primaryCol]

  if (primaryCol === secondaryCol) {
    if (!multi.length || primaryAsc) { // primary is the only sorted column or is ascending
      this.orderBy.ascending = !this.orderBy.ascending
    } else { // remove primary column and make secondary primary
      this.orderBy = multi.shift()
      this.userMultiSorting = {}
      this.userMultiSorting[this.orderBy.column] = multi
    }
  } else {
    let secondary = multi.filter(col => col.column === secondaryCol)[0]

    if (secondary) {
      if (!secondary.ascending) { // remove sort
        this.userMultiSorting[primaryCol] = multi.filter(col => col.column !== secondaryCol)
        if (!this.userMultiSorting[primaryCol].length)
          this.userMultiSorting = {}
      } else { // change direction
        secondary.ascending = !secondary.ascending
      }
    } else { // add sort
      multi.push({
        column: secondaryCol,
        ascending: true
      })
    }

  }
  // force re-compilation of the filteredData computed property
  this.time = Date.now()
}
