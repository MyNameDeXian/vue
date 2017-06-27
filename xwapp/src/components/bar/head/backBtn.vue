<template>
	<img 
		@click = "backClick"
		class = "backBtn"
		src = "../../../img/bar/icon-fanhu.png" alt="">
</template>

<script>
	export default {
		methods:{
			backClick(){
				this.$store.dispatch("backAnimate", "back")
				this.$router.go(-1);
			}
		}
		
	}
</script>

<style>
	.backBtn{
		width: .1rem;
		height: .2rem;
		margin-left: .1rem;
		padding: .06rem;
	}
</style>