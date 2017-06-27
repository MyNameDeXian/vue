<template>
	<img 
		@click = "userClick"
		class = "userBtn" 
		src = "../../../img/bar/img_customer_default-avatar.png" alt="">
</template>

<script>
	export default{
		methods:{
			userClick(){
				this.$emit("userClick");
			}
		}
	}
</script>

<style>
	.userBtn{
		width: .32rem;
		height: .32rem;
		padding-right: .08rem;
		margin-left: .16rem;
	}
</style>