module.exports = function (h, that) {
  let perpageValues = []

  that.opts.perPageValues.every(function (value) {
    let isLastEntry = value >= that.count
    let selected = that.limit === value || (isLastEntry && that.limit > value)
    perpageValues.push(<option
    value = {value}
    selected = {selected} > {value} </option>)
    return !isLastEntry
  })

  return perpageValues

}
