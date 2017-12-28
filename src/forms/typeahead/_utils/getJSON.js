'use strict'

export default function getJSON (url, header = []) {
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
            if (value != null) {
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

  header.forEach((e) => {
    request.setRequestHeader(e.key, e.value)
  })
  request.send()
  return p
}
