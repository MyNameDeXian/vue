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
	</div>
</template>

<script>
	export default {
		computed:{
			show(){
				
			}
		},
		methods: {
			userClick(){
				this.$emit('userClick');
			},
			backClick(){
				this.$router.go(-1);
			}
		}
	}
</script>




