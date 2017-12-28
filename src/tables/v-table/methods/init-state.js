module.exports = function () {
  let state = {
    page: 1,
    query: this.query,
    orderBy: this.orderBy,
    perPage: this.opts.perPage,
    customQueries: this.customQueries
  }

  this.storage.setItem(this.stateKey, JSON.stringify(state))

  return state

}
