<template>
	<div class="headbar flex-row-aic p-f-t">
		<!-- left -->
		<left-btn></left-btn>
		<!-- title -->
		<div class="title flex-2 flex-row-center">
			{{ title }}
		</div>
		<!-- right -->
		<right-btn></right-btn>
	</div>
</template>

<script>
	import leftBtn from './headbar/leftBtn';
	import rightBtn from './headbar/rightBtn';

	export default {
		components: {
			leftBtn,
			rightBtn
		},
		computed: {
			title(){
				return this.$route.name
			},
		}
	}
</script>