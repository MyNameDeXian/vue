<template>
	<div class="shade p-f"
		@touchstart = "touchstartFn"
		@touchmove = "touchmoveFn"
		@touchend = "touchendFn"
	>
	</div>
</template>

<script>
	export default{
		methods: {
			touchstartFn(){
				this.$emit('touchstartFn');
			},
			touchmoveFn(){
				this.$emit('touchmoveFn');
			},
			touchendFn(){
				this.$emit('touchendFn');
			}
		}
	}
</script>

<style>
	.shade{
		width: 100%;
		height: 100%;
		z-index: 120;
		background: #e8e8e8;
		opacity: .3;
	}
</style>