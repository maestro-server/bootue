import Components from './src/index'
import {ServerTable, ClientTable} from 'maestro-vue-tables-2'

function callerComp (Vue, Comps, enable = false) {
  for (let key in Comps) {
    if (key.indexOf(enable) || !enable) {
      Vue.component(key, Comps[key])
    }
  }

  Vue.use(ServerTable, {})
  Vue.use(ClientTable, {})
}

function plugin (Vue) {
  if (plugin.installed) return
  callerComp(Vue, Components)
}

export default plugin
