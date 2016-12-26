// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
import router from './router'
import store from './store'
import vuex from './vuex.vue'
/*import transition from './transition.vue'

new Vue({
	el : '#demo',
	render:xx=>xx(transition)
})
*/

new Vue({
	el:'#app',
	store,
	render:xx=>xx(vuex)
})


















/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
*/
/*new Vue({
  el: '#app',
  render :h=>h(App)
})*/
