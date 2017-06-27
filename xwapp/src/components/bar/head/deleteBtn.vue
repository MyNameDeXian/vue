<template>
	<img 
		@click = "deleteClick"
		class = "deleteBtn"
		src = "../../../img/bar/icon_delete.png" alt="">
</template>

<script>
	export default{
		methods:{
			deleteClick(){
				this.$emit("deleteClick");
			}
		}
	}
</script>

<style>
	.deleteBtn{
		width: .16rem;
		height: .2rem;
		padding: .06rem;
		margin-right: .1rem;
	}
</style>