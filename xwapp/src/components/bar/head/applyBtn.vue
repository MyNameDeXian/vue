<template>
	<img 
		@click = "applyClick"
		class = "applyBtn" 
		src = "../../../img/bar/icon_customer_add.png" alt="">
</template>

<script>
	export default{
		methods:{
			applyClick(){
				// this.$router.push('pApplication');
				this.$emit("applyClick");
			}
		}
	}
</script>

<style>
	.applyBtn{
		width: .19rem;
		height: .19rem;
		margin-right: .1rem;
		padding: 0 .06rem;
	}
</style>