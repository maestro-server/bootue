module.exports = function () {
  return displayableColumns(this.Columns, this.windowWidth, this.columnsDisplay)
}

function displayableColumns (columns, windowWidth, display) {

  if (!display) return columns

  return columns.filter(function (column) {
    if (!display[column]) return true

    let range = display[column]
    let operator = range[2]

    let inRange = (!range[0] || windowWidth >= range[0]) &&
      (!range[1] || windowWidth < range[1])

    return operator === 'not' ? !inRange : inRange
  })

}

