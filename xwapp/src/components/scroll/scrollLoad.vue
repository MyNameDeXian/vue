<template>
	<div
		@scroll = "scrollFn"
		@touchmove = "touchmoveFn"
		@touchend = "touchendFn" 
		class="scrollLoad">
		
	</div>
</template>

<script>
	export default{
		methods: {
			scrollFn(){

			},
			touchmoveFn(){

			},
			touchendFn(){

			}
		}
	}
</script>

<style>
	.scrollLoad{
		width: 100%;
		height: 100%;
		overflow: auto;
	}
</style>