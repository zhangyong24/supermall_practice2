import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import FastClick from 'fastclick'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'vant/lib/index.less';



FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.prototype.$bus = new Vue()
Vue.use(Vant)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
