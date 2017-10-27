// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/semantic.min.js'
import VueResource from 'vue-resource/dist/vue-resource.min.js'
import lodash from 'lodash'

Vue.config.productionTip = false
Vue.use(VueResource, lodash)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
