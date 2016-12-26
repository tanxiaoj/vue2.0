<template>
	<div>
		<button v-on:click="show =! show">show/hide text</button>
		<transition name="fade">
			<p v-if="show"> hello world</p>
		</transition>	
	</div>
</template>

<script>
	export default{
		name : 'demo',
		data(){
			return {
				show : true
			}
		}
	}

</script>

<style scoped>
	.fade-enter-active,.fade-leave-active{
		transition:opcity .5s;
	}
	.fade-enter,.fade-leave-active{
		opacity: 0;
	}
</style>