module.exports = function (obj) {
  // null and undefined are "empty"
  if (obj === null) return true

  // Assume if it has a length property with a non-zero value
  // that that property is correct.
  if (obj.length > 0) return false
  if (obj.length === 0) return true

  // Otherwise, does it have any properties of its own?
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return false
  }

  return true
}
