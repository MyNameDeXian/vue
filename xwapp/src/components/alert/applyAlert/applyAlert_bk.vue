<template>
	<transition name="slide">
		<div v-if="showApplyAlert" class="applyAlertBox p-f">
			<div v-show="showApplyAlert" class="applyAlert flex-col p-a">
				<div @click="topClick" :class="'item top border-b flex-row-aic flex-1 '+ topColor">
					<img :src="img_top" alt="">
					<p>{{text_top}}</p>
				</div>
				<div @click="btmClick" :class="'item flex-row-aic flex-1 '+ btmColor">
					<img :src="img_btm" alt="">
					<p>{{text_btm}}</p>
				</div>
			</div>
			<shade @touchendFn="touchendFn"></shade>
		</div>
	</transition>
</template>

<script>
	import shade from '../shade';
	export default {
		components:{
			shade
		},
		data(){
			return{
				single_n: require('../../../img/apply/icon_quota-application_n.png'),
				single_h: require('../../../img/apply/icon_quota-application_h.png'),
				limit_n: require('../../../img/apply/icon_single-application_n.png'),
				limit_h: require('../../../img/apply/icon_single-application_h.png'),
				pClient_n: require('../../../img/client/icon_customer_personal_n.png'),
				pClient_h: require('../../../img/client/icon_customer_personal_h.png'),
				cClient_n: require('../../../img/client/icon_customer_company_n.png'),
				cClient_h: require('../../../img/client/icon_customer_company_h.png'),
				apply: null,
				client: null,
				text_top: '个人客户',
				text_btm: '经营企业',
				topColor: '',
				btmColor: '',
			}
		},
		computed:{
			img_top(){
				if(this.nowPage === 'client'){
					if(this.client === 'top'){
						this.topColor = 'active';
						return this.pClient_h;
					}else{
						this.topColor = '';
						return this.pClient_n;
					}
				}else if(this.nowPage === 'apply'){
					if(this.apply === 'top'){
						this.topColor ='active';
						return this.single_h;
					}else{
						this.topColor = '';
						return this.single_n;
					}
				}
			},
			img_btm(){
				if(this.nowPage === 'client'){
					if(this.client === 'btm'){
						this.btmColor = 'active';
						return this.cClient_h;
					}else{
						this.btmColor = '';
						return this.cClient_n;
					}
				}else if(this.nowPage === 'apply'){
					if(this.apply === 'btm'){
						this.btmColor = 'active';
						return this.limit_h;
					}else{
						this.btmColor = '';
						return this.limit_n;
					}
				}
			}
		},
		methods:{
			touchendFn(){
				this.$emit("touchendFn");
			},
			topClick(){
				if(this.nowPage ==='client'){
					this.client = 'top';
				}else if(this.nowPage === 'apply'){
					this.apply = 'top';
				}
			},
			btmClick(){
				if(this.nowPage ==='client'){
					this.client = 'btm';
				}else if(this.nowPage === 'apply'){
					this.apply = 'btm';
				}
			}
		},
		props:["showApplyAlert", 'nowPage'],
	}
</script>

<style>
	
	.slide-enter-active {
	  animation: slide-in .3s;
	}
	.slide-leave-active {
	  animation: slide-out .3s;
	}
	@keyframes slide-in {
	  0% {
	    top: -100%;
	    right: -100%
	  }
	  100% {
	    top: 0px;
	    right: 0px;
	  }
	}
	@keyframes slide-out {
	  0% {
	    right: 0px;
	  }
	  100% {
	    right: -100%;
	  }
	}
</style>