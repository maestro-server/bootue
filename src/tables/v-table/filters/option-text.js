module.exports = function (value, column) {

  let list = this.listColumnsObject[column]
  if (typeof list[value] === 'undefined') {
    return value
  }

  return list[value]
}
