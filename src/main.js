import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('./assets/scss/style.scss')
require('./assets/scss/dark-mode.scss')

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
