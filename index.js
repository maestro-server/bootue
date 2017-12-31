import Components from './src/index'
import { ServerTable, ClientTable } from 'maestro-vue-tables-2'

function callerComp (Vue, Comps) {
  for (let key in Comps) {
    Vue.component(key, Comps[key])
  }

  Vue.use(ServerTable, {})
  Vue.use(ClientTable, {})
}

function plugin (Vue) {
  if (plugin.installed) return
  callerComp(Vue, Components)
}

export default plugin
