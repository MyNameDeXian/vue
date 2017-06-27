<template>
	<img 
		@click = "modifyClick"
		class = "modifyBtn"
		src = "../../../img/bar/icon_modify-the.png" alt="">
</template>

<script>
	export default{
		methods:{
			modifyClick(){
				this.$emit("modifyClick");
			}
		}
	}
</script>

<style>
	.modifyBtn{
		width: .2rem;
		height: .2rem;
		padding: .06rem;
		margin-right: .1rem;
	}
</style>