<template>
	<div class="drawer flex-col p-a-t">
		<header class="drawer-head flex-row-aic">
			<img src="../../img/aside/head.png" alt="">
			<div>
				<p class="name">{{ userName }}</p>
				<p  class="id">{{ userId }}</p>
			</div>
		</header>
		<section class="flex-1 drawer-content flex-col-aic">
			<div @click="productClick" class="product">
				<img src="../../img/aside/icon_product.png" alt="">
				<p>产品</p>
			</div>
			<div @click="calcClick" class="calc">
				<img src="../../img/aside/icon_the-calculator.png" alt="">
				<p>计算器</p>
			</div>
			<div @click="chatClick" class="chart">
				<img src="../../img/aside/chat.png" alt="">
				<p>统计查询</p>
			</div>
		</section>
		<footer class="drawer-foot flex-row-center">
			<img src="../../img/aside/icon_exit.png" alt="">
			<p>退出</p>
		</footer>
	</div>
</template>

<script>
	export default {
		computed: {
			userName(){
				return '章三' //'this.$store.state';
			},
			userId(){
				return '00480' //'this.$store.state';
			}
		},
		methods:{
			productClick(){
				this.$emit('drawerItemClick');	
			},
			calcClick(){
				this.$emit('drawerItemClick');	
			},
			chatClick(){
				this.$emit('drawerItemClick');	
			}
		}
	}
</script>

