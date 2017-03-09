import Components from '../components/bootue/index'

function plugin (Vue) {
  if (plugin.installed) return

  for (let key in Components) {
    Vue.component(key, Components[key])
  }
}

export default plugin
