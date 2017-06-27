<template>
	<div class="applyAlert flex-col p-a">
		<div @click="topClick" class="item top border-b flex-row-aic flex-1">
			<img :src="top ? single_h : single_n" alt="">
			<p>单笔业务</p>
		</div>
		<div @click="btmClick" class="item flex-row-aic flex-1">
			<img :src="btm ? limit_h : limit_n" alt="">
			<p>经营企业</p>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				single_n: require('../../../img/apply/icon_quota-application_n.png'),
				single_h: require('../../../img/apply/icon_quota-application_h.png'),
				limit_n: require('../../../img/apply/icon_single-application_n.png'),
				limit_h: require('../../../img/apply/icon_single-application_h.png'),
				top: '',
				btm: '',
			}
		},
		methods:{
			topClick(){
				this.$router.push('/PApplication');
			},
			btmClick(){
				this.$router.push('/PApplication');
			}
		},
		props:['showApplyAlert']
	}
</script>