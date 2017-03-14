import Components from '../components/bootue/index'
import Directives from '../components/bootue/_core/_directives/index'

function plugin (Vue) {
  if (plugin.installed) return

  //components
  for (let key in Components) {
    Vue.component(key, Components[key])
  }

  // directive
  for (let key in Directives) {
    Vue.directive(key, Directives[key])
  }
}

export default plugin
