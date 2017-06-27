<template>
	<div class="home p-f-t-l">
		<headbar></headbar>
		<div>123</div>
		<tabbar></tabbar>
	</div>
</template>

<script>
	import headbar from '@/components/bar/headbar';
	import tabbar from '@/components/bar/tabbar';

	export default {
		components: {
			headbar,
			tabbar
		}
	}
	// 就这样决定了
</script>

<style>
	.home{
		width: 100%;
	}
</style>