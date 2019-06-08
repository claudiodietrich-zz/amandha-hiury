import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import 'bulma-timeline/dist/css/bulma-timeline.min.css'
import 'bulma-pricingtable/dist/css/bulma-pricingtable.min.css'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(Vuelidate)

Vue.config.productionTip = false
axios.defaults.baseURL = window.location.hostname === 'localhost' ? 'http://localhost:3000/api' : '/api'

new Vue({
  render: h => h(App)
}).$mount('#app')
