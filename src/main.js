import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// element
import ElementUI from 'element-ui';
import '@/assets/css/theme/index.css';
// import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, {
  size: 'small'
});

//ivew
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI, {
  size: 'small'
});

import axios from 'axios'
Vue.prototype.$http = axios

import urlConfig from "./config/url-config";
Vue.use(urlConfig);

//通用工具类
import util from './assets/js/util.js';
Vue.prototype.$util = util;

// echarts
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
