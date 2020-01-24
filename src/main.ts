import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter, { RouteConfig } from 'vue-router';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});

const routes: RouteConfig[] = [];
const router = new VueRouter({
  routes
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
