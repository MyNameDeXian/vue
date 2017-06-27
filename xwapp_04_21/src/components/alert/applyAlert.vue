<template>
	<div v-if=" show " class="p-f-t-l">
		<div class="applyAlert">
			
		</div>
		<shade
			@touchend = 'touchendFn'
		></shade>
	</div>
</template>

<script>
	import shade from './shade';
	export default {
		components: { shade },
		props: ['show'],
		methods:{
			touchendFn(){
				this.show = false;
			}
		}
	}
</script>