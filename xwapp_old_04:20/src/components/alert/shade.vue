<template>
	<div class="shade p-f-t-l"
		@touchend = "touchendFn"
	></div>
</template>

<script>
	export default{
		methods: {
			touchendFn(){
				this.$emit('touchend');
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
		opacity: .6;
	}
</style>