let objectFilledKeysCount = require('../helpers/object-filled-keys-count')
let isValidMomentObject = require('../helpers/is-valid-moment-object')
let filterByCustomFilters = require('../filters/custom-filters')

module.exports = function (data, e) {

  if (e) {

    let query = this.query

    this.setPage(1, true)

    let name = this.getName(e.target.name)
    let value = typeof e.target.value === 'object' ? e.target.value : '' + e.target.value

    if (name) {
      query[name] = value
    } else {
      query = value
    }

    this.vuex ? this.commit('SET_FILTER', query) : this.query = query

    this.updateState('query', query)

  }

  let query = this.query

  let totalQueries = !query ? 0 : 1

  if (!this.opts) return data

  if (this.opts.filterByColumn) {
    totalQueries = objectFilledKeysCount(query)
  }

  let value
  let found
  let currentQuery
  let dateFormat = this.opts.dateFormat
  let filterByDate
  let isListFilter

  data = filterByCustomFilters(data, this.opts.customFilters, this.customQueries)

  if (!totalQueries) return data

  return data.filter(function (row) {

    found = 0

    this.Columns.forEach(function (column) {

      filterByDate = this.opts.dateColumns.indexOf(column) > -1 && this.opts.filterByColumn
      isListFilter = this.isListFilter(column) && this.opts.filterByColumn

      value = getValue(row[column], filterByDate, dateFormat)

      currentQuery = this.opts.filterByColumn ? query[column] : query

      currentQuery = setCurrentQuery(currentQuery)

      if (currentQuery && foundMatch(currentQuery, value, isListFilter)) found++

    }.bind(this))

    return found >= totalQueries

  }.bind(this))
}

function setCurrentQuery (query) {

  if (!query) return ''

  if (typeof query === 'string')
    return query.toLowerCase()

  // Date Range

  return query
}

function foundMatch (query, value, isListFilter) {

  // List Filter
  if (isListFilter)
    return value === query

  if (typeof value === 'string')
    return value.indexOf(query) > -1

  // Date range
  let start = moment(query.start, 'YYYY-MM-DD')
  let end = moment(query.end, 'YYYY-MM-DD')

  return (value >= start && value <= end)
}

function getValue (val, filterByDate, dateFormat) {

  if (isValidMomentObject(val)) {

    if (filterByDate) return val
    return val.format(dateFormat)
  }

  return String(val).toLowerCase()
}
