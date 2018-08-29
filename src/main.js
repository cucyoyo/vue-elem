import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router/index.js';
import axios from './axios';

import 'common/stylus/index.styl';

Vue.use(VueResource);
// Vue.use(axios);

// 跳过eslint对new对象必须赋给一个值的校验
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  render: h => h(App)
});
