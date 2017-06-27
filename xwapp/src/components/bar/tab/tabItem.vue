<template>
	<div class="tabItem flex-1 flex-col-center" @click="tabClick">
		<img :src="img" alt="">
		<p :class="active ? 'active' : ''">
			<slot></slot>
		</p>
	</div>
</template>

<script>
	export default{
		methods:{
			tabClick(){
				this.$emit("tabClick");
			}
		},
		props: ['img','active'],
	}
</script>
