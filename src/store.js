import Vue from 'vue'
import Vuex from 'vuex' 
Vue.use(Vuex)

const state = {
	count : 44
}

const mutations = {
	jia(state,n){
		state.count+=n.a
	},
	jian(state){
		state.count--
	}
}

const getters = {
	count:function(state){
		return state.count+=99
	}
}
export default new Vuex.Store({
	state,
	mutations,
	getters
})