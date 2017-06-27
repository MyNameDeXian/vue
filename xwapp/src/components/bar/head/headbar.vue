<template>
	<div class="headbar flex-row-aic">
		<div class="flex-1 flex-row-aic">
			<slot name="leftBtn"></slot>
		</div>
		<div class="flex-2 flex-row-center">
			<slot></slot>
		</div>
		<div class="flex-1 flex-row-end">
			<slot name="rightBtn"></slot>
		</div>
	</div>
</template>

<!-- 准确一点说这不算一个组件，只能算一个零件 -->
<!-- 但我更喜欢造零件，然后在拼装成组件、或页面 -->
<!-- 零件坏了，你在造一个就行，组件坏了，那你就要造哪一组零件 -->
<!-- 越简单的事物，越好维护 -->