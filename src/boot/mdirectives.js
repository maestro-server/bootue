import Directives from '../components/directives/index'

function plugin (Vue) {
  if (plugin.installed) return

  for (let key in Directives) {
    Vue.directive(key, Directives[key])
  }
}

export default plugin
