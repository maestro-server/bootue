import Components from './src/index'
import { ServerTable, ClientTable } from 'maestro-vue-tables-2'
import VueNotifications from 'vue-notifications'
import iziToast from 'izitoast'


function callerComp (Vue, Comps) {
  for (let key in Comps) {
    Vue.component(key, Comps[key])
  }

  Vue.use(ServerTable, {})
  Vue.use(ClientTable, {})

  const toast = ({title, message, type, timeout, position = 'topRight'}) => iziToast[type]({title, message, timeout, position})
  const options = {
    success: toast,
    error: toast,
    info: toast,
    warning: toast
  }
  Vue.use(VueNotifications, options)
}

function plugin (Vue) {
  if (plugin.installed) return
  callerComp(Vue, Components)
}

export default plugin
