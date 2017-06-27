<template>
	<div class="applyAlert flex-col p-a">
		<div @click="topClick" class="item top border-b flex-row-aic flex-1">
			<img :src="top ? pClient_h : pClient_n" alt="">
			<p>个人客户</p>
		</div>
		<div @click="btmClick" class="item flex-row-aic flex-1">
			<img :src="btm ? cClient_h : cClient_n" alt="">
			<p>经营企业</p>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				pClient_n: require('../../../img/client/icon_customer_personal_n.png'),
				pClient_h: require('../../../img/client/icon_customer_personal_h.png'),
				cClient_n: require('../../../img/client/icon_customer_company_n.png'),
				cClient_h: require('../../../img/client/icon_customer_company_h.png'),
				top: '',
				btm: '',
			}
		},
		methods:{
			topClick(){
				this.$router.push('/PApplication');
			},
			btmClick(){
				this.$router.push('/CApplication');
			}
		},
	}
</script>