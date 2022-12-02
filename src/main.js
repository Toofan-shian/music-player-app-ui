import Vue from 'vue'
import App from './Player.vue'
import vuetify from './plugins/vuetify'
import {Howl, Howler} from 'howler'

Vue.config.productionTip = false

Vue.filter('numbers', value => {
  ++value
  if (value < 10) {
    return '0' + value;
  }
  return value;
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
