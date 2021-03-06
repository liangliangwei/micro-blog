import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
import router from './router'
import store from './store'
import Calendar from 'vue-calendar-component';

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })

Vue.prototype.$store = store;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
