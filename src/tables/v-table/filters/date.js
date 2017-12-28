let isValidMomentObject = require('../helpers/is-valid-moment-object')

module.exports = function (property) {

  if (isValidMomentObject(property)) {
    return property.format(this.opts.dateFormat)
  }

  return property
}

