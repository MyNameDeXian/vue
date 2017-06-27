<template>
	<div v-show="show" class="loading flex-col-center p-f-t">
		<div class="animate-load flex-col-aic p-r" >
			<img @click="test" src="../../../img/loading/loading_fly.png" alt="">
			<p>正在加载中...</p>
		</div>
		<shade @touchendFn="touchendFn"></shade>
	</div>
</template>

<script>
	import shade from '../shade';
	export default {
		components:{
			shade
		},
		data(){
			return {
				show: true
			}
		},
		methods:{
			touchendFn(){
				this.show = false;
			},
			test(){
				this.rotate = 'rotate';
				console.log(123)
			}
		}
	}
</script>