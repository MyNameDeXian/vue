<template>
	<div class="backBtn">
		<img @click="backClick" src="../../img/tab/icon-fanhu.png" alt="">
	</div>
</template>

<script>
	export default {
		methods:{
			backClick(){
				this.$router.go(-1);
			}
		}
	}
</script>