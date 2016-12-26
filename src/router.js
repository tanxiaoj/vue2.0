import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = {
	template : `
	<div>
		<h2>Home</h2>
		<p>this is Home --{{$route.query.a}}</p>
	</div>
	`
}

const page404 = {
	template : `
	<div>
		<h2>error 404</h2>
	</div>
	`,
	beforeRouteEnter:(to,from,next)=>{
		console.log(to)
		console.log(from)
		next();//继续执行 next(false)不继续
	},
	beforeRouteLeave:(to,from,next)=>{
		console.log(to)
		console.log(from)
		next();//继续执行 next(false)不继续
	}
}

const Parent = {
	template : `
	<div>
		<h2>Parent</h2>
		<p>this is Parent</p>
	</div>
	`
}

const router = new VueRouter({
	mode :'history',
	base :__dirname,
	routes :[
		{path:'',component:Home},
		{path:'/Parent',component:Parent,
			beforeEnter:(to,from,next)=>{
				console.log(to)
				console.log(from)
				next();//继续执行 next(false)不继续
				//next({path:'/ssasks'})
			}
		},
		{path:'*',component:page404}
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
		<button @click="houtui">后退</button>
		<button @click="qianjin">前进</button>
		<button @click="home">返回首页</button>
		<button @click="query">query</button>
		<h1>this is Transition</h1>
		<ul>
			<li><router-link to="/">/</router-link></li>
			<li><router-link to="/Parent">Parent</router-link><li>
			<li><router-link to="/sfsag">where not here</router-link><li>
		</ul>
		<transition :name="aaa" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
	`,
	methods:{
		houtui:function(){
			router.go(-1);
		},
		qianjin:function(){
			router.go(1);
		},
		home :function(){
			router.push("/");
		},
		query:function(){
			router.push({path:'/',query:{a:1,b:1}})
		}
	},
	watch : {
		'$route' (to,from){
			if(from.path == '/Parent'){
				this.aaa = 'fade1'
			}else{
				this.aaa = 'fade2'
			}
		}
	}
}).$mount('#app')