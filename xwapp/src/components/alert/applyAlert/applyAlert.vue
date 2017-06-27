<template>
	<transition name="slide">
		<div v-if="showApplyAlert" class="applyAlertBox p-a">
			<client v-show="nowPage=='client'"></client>
			<apply v-show="nowPage=='apply'"></apply>
			<shade @touchendFn="touchendFn"></shade>
		</div>
	</transition>
</template>

<script>
	import shade from '../shade';
	import client from './client';
	import apply from './apply';

	export default {
		components:{
			shade,
			client,
			apply,
		},
		methods:{
			touchendFn(){
				this.$emit('touchendFn');
			},
			topClick(){
				if(this.nowPage ==='client'){
					this.client = 'top';
				}else if(this.nowPage === 'apply'){
					this.apply = 'top';
				}
			},
			btmClick(){
				if(this.nowPage ==='client'){
					this.client = 'btm';
				}else if(this.nowPage === 'apply'){
					this.apply = 'btm';
				}
			}
		},
		props:["showApplyAlert","nowPage"],
	}
</script>

<style>
	
	.slide-enter-active {
	  animation: slide-in .3s;
	}
	.slide-leave-active {
	  animation: slide-out .3s;
	}
	@keyframes slide-in {
	  0% {
	    top: -100%;
	    right: -100%
	  }
	  100% {
	    top: 0px;
	    right: 0px;
	  }
	}
	@keyframes slide-out {
	  0% {
	    right: 0px;
	  }
	  100% {
	    right: -100%;
	  }
	}
</style>