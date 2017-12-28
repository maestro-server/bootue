import Components from './src/index'

function callerComp (Vue, Comps, enable = false) {
  for (let key in Comps) {
    if (key.indexOf(enable) || !enable) {
      Vue.component(key, Comps[key])
    }
  }
}

function plugin (Vue) {
  if (plugin.installed) return
  callerComp(Vue, Components)
}

export default plugin
