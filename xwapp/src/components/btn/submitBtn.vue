<template>
	<div
	@touchstart = "touchstartFn"
	@touchend = "touchendFn"
	@click = "clickBtn"
	class="submitBtn flex-row-center">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		methods:{
			touchstartFn(){
				this.$emit('touchstartFn');
			},
			touchendFn(){
				this.$emit('touchendFn');
			},
			clickBtn(){
				this.$emit('clickBtn')
			}
		}
	}
</script>

<style>
	.submitBtn{
		margin: .22rem .64rem;
		height: .44rem;
		border-radius: .22rem;
		background: #d62823;
		font-size: .19rem;
		color: #fff;
	}
	.submitBtn.bj{
		background: #de3b36;
	}
</style>