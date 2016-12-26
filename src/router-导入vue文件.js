import Vue from 'vue'
import VueRouter from 'vue-router'
import Parent from './transition.vue'

Vue.use(VueRouter)

const Home = {
	template : `
	<div>
		<h2>Home</h2>
		<p>this is Home</p>
	</div>
	`
}


const router = new VueRouter({
	mode :'history',
	base :__dirname,
	routes :[
		{path:'',component:Home},
		{path:'/Parent',component:Parent}
	]
})


new Vue({
	router,
	data(){
		return {
			aaa : 'fade'
		}
	},
	template:`
	<div id="app">
		<h1>this is Transition</h1>
		<ul>
			<li><router-link to="/">/</router-link></li>
			<li><router-link to="/Parent">Parent</router-link><li>
		</ul>
		<transition :name="aaa" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
	`
}).$mount('#app')