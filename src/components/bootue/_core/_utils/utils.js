// coerce convert som types of data into another type
export const coerce = {
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

export function getJSON (url) {
  let request = new window.XMLHttpRequest()
  let data = {}
  // p (-simulated- promise)
  let p = {
    then (fn1, fn2) {
      return p.done(fn1).fail(fn2)
    },
    catch (fn) {
      return p.fail(fn)
    },
    always (fn) {
      return p.done(fn).fail(fn)
    }
  };
  ['done', 'fail'].forEach(name => {
    data[name] = []
    p[name] = (fn) => {
      if (fn instanceof Function) data[name].push(fn)
      return p
    }
  })
  p.done(JSON.parse)
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      let e = {status: request.status}
      if (request.status === 200) {
        try {
          let response = request.responseText
          for (let i in data.done) {
            let value = data.done[i](response)
            if (value !== undefined) {
              response = value
            }
          }
        } catch (err) {
          data.fail.forEach(fail => fail(err))
        }
      } else {
        data.fail.forEach(fail => fail(e))
      }
    }
  }
  request.open('GET', url)
  request.setRequestHeader('Accept', 'application/json')
  request.send()
  return p
}

export function getScrollBarWidth () {
  if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
    return 0
  }
  let inner = document.createElement('p')
  inner.style.width = '100%'
  inner.style.height = '200px'

  let outer = document.createElement('div')
  outer.style.position = 'absolute'
  outer.style.top = '0px'
  outer.style.left = '0px'
  outer.style.visibility = 'hidden'
  outer.style.width = '200px'
  outer.style.height = '150px'
  outer.style.overflow = 'hidden'
  outer.appendChild(inner)

  document.body.appendChild(outer)
  let w1 = inner.offsetWidth
  outer.style.overflow = 'scroll'
  let w2 = inner.offsetWidth
  if (w1 === w2) w2 = outer.clientWidth

  document.body.removeChild(outer)

  return (w1 - w2)
}

// return all the translations or the default language (english)
export function translations (lang = 'en') {
  let text = {
    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    limit: 'Limit reached ({{limit}} items max).',
    loading: 'Loading...',
    minLength: 'Min. Length',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    notSelected: 'Nothing Selected',
    required: 'Required',
    search: 'Search'
  }
  return window.VueStrapLang ? window.VueStrapLang(lang) : text
}

// delayer: set a function that execute after a delay
// @params (function, delay_prop or value, default_value)
export function delayer (fn, varTimer, ifNaN = 100) {
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
