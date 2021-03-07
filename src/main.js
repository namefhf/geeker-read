import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/reset.css'
import './assets/css/main.css'
import '../src/utils/day.js'
import dayjs from 'dayjs'
console.log(process.env)
if (process.env.NODE_ENV === 'development') {
  const Vconsole = require('vconsole')
  let vConsole = new Vconsole()
  Vue.use(vConsole)
}
// import Vconsole from 'vconsole'
// let vConsole = new Vconsole()
// Vue.use(vConsole)
Vue.filter('dateFormate', date => {
  return dayjs(date).fromNow()
})
Vue.filter('bookFormat', date => {
  return dayjs(date).format('YYYY-MM-DD')
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
