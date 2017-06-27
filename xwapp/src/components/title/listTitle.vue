<template>
	<div class="listTitle flex-row-aic">
		<slot></slot>
	</div>
</template>

<style>
	.listTitle{
		width: 100%;
		color: #383c44;
		font-size: .18rem;
		padding-top: .12rem;
	}
	.listTitle>div{
		height: .56rem;
		background: #c0e2fa;
	}
</style>