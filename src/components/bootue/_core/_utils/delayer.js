
module.exports = function delayer (fn, varTimer, ifNaN = 100) {
  function toInt (el) {
    return /^[0-9]+$/.test(el) ? Number(el) || 1 : null
  }

  let timerId
  return function (...args) {
    if (timerId) clearTimeout(timerId)
    timerId = setTimeout(() => {
      fn.apply(this, args)
    }, toInt(varTimer) || toInt(this[varTimer]) || ifNaN)
  }
}
