<template>
	<div id="app">
		<h1>hello vuex</h1>
		<p>{{count}}</p>
		<p>
			<button @click="$store.commit('jia',{a:10})">+</button>
			<button @click="jian">-</button>
		</p>
	</div>
</template>

<script>
	import {mapState,mapMutations,mapGetters} from 'vuex'
	export default{
		name:'app',
		data(){
			return {
				count : 0
			}
		},
		/*computed :{
			count(){
				return this.$store.state.count
			}
		}*/
		/*computed : mapState({
			//count : state=>state.count 
			count : function(state){
				return state.count;
			}
		})*/
		/*computed : mapState([
			"count"
		]),*/
		computed : {
			...mapState([
				"count"
			]),
			/*count(){
				return this..getters.count
			}*/
			...mapGetters([
				"count"
			])
		},
		methods : mapMutations([
			'jia',
			'jian'
		])
	}
</script>