module.exports = function (obj) {
  let keys = []
  for (let prop in obj) {
    keys.push(prop)
  }
  return keys
}
