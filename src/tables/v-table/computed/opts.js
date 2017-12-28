module.exports = function () {
  let defaults = require('../config/defaults')()
  return this.initOptions(defaults, this.globalOptions, this.options)
}
