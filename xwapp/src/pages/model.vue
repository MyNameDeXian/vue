<template>
	<div class="model flex-col p-f">
		<slot name='header'></slot>
		<div class="content flex-1">
			<slot></slot>
		</div>
		<slot name='footer'></slot>
	</div>
</template>

<style>
	.model{
		width: 100%;
		height: 100%;
		background: #e7e7ea;
	}
	.model .content{
		overflow: auto;
	}
</style>