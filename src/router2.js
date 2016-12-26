import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const first = {template:'<div>first 内容</div>'}
const second = {template:'<div>Second 内容</div>'}
const Home = {template:'<div>Home 内容</div>'}
const hhhh = {template:'<div>hhhh</div>'}

const router = new VueRouter({
	mode : 'history',
	base : __dirname,
	routes : [
		{path:'/',name:'Home',components:{
			default : Home,
			left : first,
			right : second
		}},
		{path:'/first',name:'first',components:{
			default : hhhh,
			left : first,
			right : second			
		}}
	]
})

new Vue({
	router ,
	template :`
		<div id="r">
			<h1>导航</h1>
			<p>{{ $route.name }}</p>
			<ol>
				<li><router-link to="/">/</router-link></li>
				<li><router-link to="/first">first</router-link></li>
			<ol>
			<router-view class="view"></router-view>
			<router-view class="view" name="left" style="float:left;width:50%;background:#ff6400;height:300px;"></router-view>
			<router-view class="view" name="right" style="float:right;width:50%;background:#af6400;height:300px;"></router-view>
		</div>
		`
}).$mount('#app')