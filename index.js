import Components from './src/index'
import Addons from './addons/index'

function callerComp (Vue, Comps, enable = false) {
  for (let key in Comps) {
    if (key.indexOf(enable) || !enable) {
      Vue.component(key, Comps[key])
    }
  }
}

function plugin (Vue, options = {}) {
  if (plugin.installed) return

  const enable = options.hasOwnProperty("addons") ? options.addons : []

  callerComp(Vue, Components)
  callerComp(Vue, Addons, enable)
}



export default plugin
