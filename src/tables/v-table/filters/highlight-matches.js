module.exports = function (value, column, h) {

  if (!this.opts.highlightMatches) return value

  let query = this.opts.filterByColumn ? this.query[column] : this.query

  if (!query) return value

  query = new RegExp('(' + escapeRegex(query) + ')', 'i')

  return h('span', {class: 'VueTables__highlight'}, matches(value, query, h))

}

function matches (value, query, h) {
  let pieces = String(value).split(query)

  return pieces.map(function (piece) {
    if (query.test(piece)) {
      return h('b', {}, piece
      )
    }

    return piece
  })
}

function escapeRegex (s) {
  return s.replace(/[-\/^$*+?.()|[\]{}]/g, '\\$&')
}
