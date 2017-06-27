<template>
	<div class="flex-1 flex-row-aic">
		<!-- user-btn -->
		<img 
			@click = "userClick"
			class = "userBtn" 
			v-show = " !show "
			src="../../../img/tab/img_customer_default-avatar.png" alt="">
		<!-- back-btn -->
		<img 
			@click = "backClick"
			class="backBtn"
			v-show = " show "
			src="../../../img/tab/icon-fanhu.png" alt="">
		<drawer
			:showDrawer = "showDrawer"
		></drawer>
	</div>
</template>

<script>
	import drawer from '../../alert/drawer'
	
	export default {
		components: { drawer },
		data(){
			return {
				showDrawer: 'close',
			}
		},
		computed: {
			show(){
				
			},
		},
		methods: {
			userClick(){
				this.showDrawer = 'open';
			},
			backClick(){
				this.$router.go(-1);
			}
		}
	}
</script>




