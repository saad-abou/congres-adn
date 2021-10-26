import Vue from 'vue'
import App from './App.vue'
import 'babel-polyfill'
import vuetify from './plugins/vuetify';
import 'bootstrap';
import './assets/app.scss';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'font-awesome/css/font-awesome.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from "./router"
import AOS from 'aos'
import 'aos/dist/aos.css'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

import VueTyperPlugin from 'vue-typer';

AOS.init();

Vue.use(VueTyperPlugin)

 
Vue.use(PerfectScrollbar)



window.axios = require('axios');



Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//landing
Vue.component('accueil', require('./components/landing/accueil.vue').default);
Vue.component('agenda', require('./components/landing/agenda.vue').default);
Vue.component('contact', require('./components/landing/contact.vue').default);
Vue.component('inscription', require('./components/landing/inscription.vue').default);
Vue.component('propos', require('./components/landing/propos.vue').default);
Vue.component('thematique', require('./components/landing/thematique.vue').default);
Vue.component('timer', require('./components/landing/timer.vue').default);
Vue.component('speakers', require('./components/landing/speakers.vue').default);
Vue.component('axe2', require('./components/landing/axe2.vue').default);
Vue.component('sponsors', require('./components/landing/sponsors.vue').default);
Vue.component('oct15', require('./components/landing/15oct.vue').default);
Vue.component('oct16', require('./components/landing/16oct.vue').default);
Vue.component('scientifique', require('./components/landing/scientifique.vue').default);

//vod
Vue.component('accueil_vod', require('./components/vod/accueil_vod.vue').default);
Vue.component('propos_vod', require('./components/vod/propos_vod.vue').default);

//countdown
import VueCountdown from '@chenfengyuan/vue-countdown';
Vue.component(VueCountdown.name, VueCountdown);

new Vue({
  vuetify,
  router,
  icons: {
    iconfont: ['fa','mdi'],
  },
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
