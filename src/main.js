import 'element-ui/lib/theme-chalk/index.css';

import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';

import App from './App.vue'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
