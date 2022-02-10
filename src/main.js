import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// FontAwesome start
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas);

Vue.component('font-awesome-icon', FontAwesomeIcon)
// FontAwesome end

require('./assets/scss/style.scss')
require('./assets/scss/dark-mode.scss')

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
