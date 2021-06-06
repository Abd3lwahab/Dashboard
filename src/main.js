/* Core */
import Vue from 'vue'
import Buefy from 'buefy'

/* Vue. Main component */
import App from './App.vue'

/* Router & Store */
import router from './router'
import store from './store'

/* Styles */
import '@/scss/main.scss'

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
