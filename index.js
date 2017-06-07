import Components from './src/index'
import Addons from './addons/index'

function plugin (Vue, options = {}) {
  if (plugin.installed) return

  const enable = options.hasOwnProperty("addons") ? options.addons : []

  for (let key in Addons) {
    if (key.indexOf(enable)) {
      Vue.component(key, Addons[key])
    }
  }

  for (let key in Components) {
    Vue.component(key, Components[key])
  }
}

export default plugin
