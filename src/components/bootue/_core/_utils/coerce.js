// coerce convert som types of data into another type

export default {
  // Convert a string to booleam. Otherwise, return the value without modification, so if is not boolean, Vue throw a warning.
  boolean: val => {
    if (typeof val === 'string') {
      if (val === '' || val === 'true') {
        return true
      }

      if (val === 'false' || val === 'null' || val === 'undefined') {
        return false
      }

      return val
    }
  },
  number: (val, alt = null) => {
    if (typeof val === 'number') {
      return val
    }

    if (val === undefined || val === null || isNaN(Number(val))) {
      return alt
    }

    return Number(val)
  },
  string: val => {
    if (val === undefined || val === null) {
      return ''
    }

    return val + ''
  },
  pattern: val => {
    if (val instanceof Function || val instanceof RegExp) {
      return val
    }

    if (typeof val === 'string') {
      return new RegExp(val)
    }

    return null
  }
}
