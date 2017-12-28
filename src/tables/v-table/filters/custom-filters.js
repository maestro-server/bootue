module.exports = function (data, customFilters, customQueries) {

  let passing

  return data.filter(function (row) {

    passing = true

    customFilters.forEach(function (filter) {
      let value = customQueries[filter.name]
      if (value && !filter.callback(row, value))
        passing = false
    })

    return passing

  })
}
