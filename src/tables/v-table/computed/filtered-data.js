// let search = require('../methods/client-search')
let clone = require('clone')

module.exports = function () {

  let data = clone(this.tableData)

  let column = this.orderBy.column

  if (column) {
    // dummy let to force compilation
    if (this.time) this.time = this.time

    data.sort(this.getSortFn(column))
  }

  data = this.search(data)

  if (this.vuex) {
    if (this.count !== data.length)
      this.commit('SET_COUNT', data.length, true)
  } else {
    this.count = data.length
  }

  let offset = (this.page - 1) * this.limit

  data = data.splice(offset, this.limit)

  return this.applyFilters(data)
}


