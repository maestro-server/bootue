module.exports = function (e) {

  // we need to handle the store this.query to make sure we're not mutating outside of it
  let query = this.vuex ? JSON.parse(JSON.stringify(this.query)) : this.query

  // in case we pass an object manually (mostly used for init-date-filters should refactor
  if (Object.prototype.toString.call(e).slice(8, -1) === 'Object') {
    query = this.vuex ? JSON.parse(JSON.stringify(e)) : e

    if (!this.vuex) this.query = query

    this.updateState('query', query)

  } else if (e) {
    let name = this.getName(e.target.name)
    let value = e.target.value

    if (name) {
      query[name] = value
    } else {
      query = value
    }

    if (!this.vuex)
      this.query = query

    this.updateState('query', query)
  }

  return search(this, query)
}

function search (that, query) {

  if (that.vuex) {
    that.commit('SET_FILTER', query)
  } else {
    that.initPagination()

    if (that.opts.pagination.dropdown) {
      that.getData()
    }
  }

}
