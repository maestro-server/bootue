import Vue from 'vue'

/**
 * Click outside directive
 */
let binded = []

function handler (e) { binded.forEach(el => { if (!el.node.contains(e.target)) el.callback(e) }) }

function addListener (node, callback) {
  if (!binded.length) document.addEventListener('click', handler, false)
  binded.push({node, callback})
}

function removeListener (node, callback) {
  binded = binded.filter(el => {
    if (el.node !== node) {
      return true
    }
    if (!callback) {
      return false
    } else {
      return el.callback !== callback
    }
  })
  if (!binded.length) document.removeEventListener('click', handler, false)
}

export default {
  bind (el, binding) {
    removeListener(el, binding.value)
    
    if (typeof binding.value !== 'function') {
      if (process.env.NODE_ENV !== 'production') {
        Vue.util.warn('ClickOutside only work with a function, received: v-' + binding.name + '="' + binding.expression + '"')
      }
    } else {
      addListener(el, binding.value)
    }
  },
  update (el, binding) {
    if (binding.value !== binding.oldValue) {
      removeListener(el, binding.oldValue)
      addListener(el, binding.value)
    }
  },
  unbind (el, binding) {
    removeListener(el, binding.value)
  }
}
