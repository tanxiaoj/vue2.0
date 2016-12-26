import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const first = {template:'<div>first 内容</div>'}
const second = {template:'<div>Second 内容</div>'}
const Home = {template:'<div>Home 内容</div>'}

const firstFirst = {template:'<div>{{ $route.name }}firstFirst 内容{{$route.params.id}}</div>'}
const firstSecond = {template:'<div>firstSecond 内容{{$route.params.id}}</div>'}

const child = {
	template : `
		<div class="ssas">
			<h1>组件</h1>
			<router-view class="view"></router-view>
		</div>
	`
}


const router = new VueRouter({
	mode : 'history',
	base : __dirname,
	routes : [
		{path:'/',name:'Home',component:Home},
		{path:'/first',component:child,
			children : [
				{path : '/',name:'Home-first',component:first},
				{path : 'first',name:"Home-First-First",component:firstFirst},
				{path : 'second',name:"Home-Second-Second",component:firstSecond}
			]
		},
		{path:'/second',name:'Home-second',component:second}
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
					<li><router-link :to="{name:'Home-First-First',params:{id:123}}">first</router-link></li>
					<li><router-link :to="{name:'Home-Second-Second',params:{id:321}}">second</router-link></li>
				</ol>
				<li><router-link to="/second">second</router-link></li>
			<ol>
			<router-view class="view"></router-view>
		</div>
		`
}).$mount('#app')