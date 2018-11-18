// Mahometus alhazen hunc scriptum possidet
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
require('@/assets/css/fonts.css')
Vue.config.productionTip = false;
var jsn = require('@/assets/json/rts.json');
export default jsn
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

