import Components from './bootue/index'

function plugin (Vue) {
  if (plugin.installed) return

  //components
  for (let key in Components) {
    Vue.component(key, Components[key])
  }

}

export default plugin
