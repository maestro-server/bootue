import Vue from 'vue'
/**
 * Scroll directive
 */
const HANDLER = '_vue_scroll_handler'
const events = ['resize', 'scroll']

function unbind (el) {
  events.forEach(function (e) { window.removeEventListener(e, el[HANDLER], false) })
  document.removeEventListener('load', el[HANDLER], false)
  delete el[HANDLER]
}

function bind (el, binding) {
  unbind(el)

  let callback = binding.value
  if (typeof callback !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      Vue.util.warn('Scroll only work with a function value, received: v-' + binding.name + '="' + binding.expression + '"')
    }
  } else {
    el[HANDLER] = function (e) { callback(e) }
    events.forEach(function (e) { window.addEventListener(e, el[HANDLER], false) })
    document.addEventListener('load', el[HANDLER], false)
    setTimeout(function () { el[HANDLER]() }, 0)
  }
}

export default {
  bind,
  unbind,
  update (el, binding) {
    if (binding.value !== binding.oldValue) bind(el, binding)
  }
}
