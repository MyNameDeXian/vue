<template>
	<div class="userBtn">
		<img @click="userClick" src="../../img/tab/img_customer_default-avatar.png" alt="">
	</div>
</template>

<script>
	export default {
		computed:{
			
		},
		methods: {
			userClick(){
				this.$emit('userClick');
			}
		}
	}
</script>


