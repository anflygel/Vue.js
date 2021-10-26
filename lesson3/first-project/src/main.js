import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  el: '#app',
  template: '<App />',
  components: {
    App,
  },
  render: h => h(App)
}).$mount('#app')
