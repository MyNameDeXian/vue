<template>
	<div :class="drawerTrans + ' homePage flex-col p-f h-100'" :style="'transform:translateX('+ transX +'px)'">
		<!-- alert & drawer -->
		<drawer @drawerItemClick="drawerItemClick"></drawer>
		<shade
			@touchstartFn = "touchstartFn"
			@touchmoveFn = "touchmoveFn"
			@touchendFn = "touchendFn"
			v-if="showDrawer"></shade>
		<apply-alert 
			@touchendFn="applyTouchend"
			:nowPage="nowPage"
			:showApplyAlert="showApplyAlert"></apply-alert>
		<!-- header -->
		<headbar>
			<user-btn @userClick="userClick" slot="leftBtn"></user-btn>
			{{ title }}
			<apply-btn 
				@applyClick="applyClick" 
				v-show="showApplyBtn" slot="rightBtn"></apply-btn>
		</headbar>
		<!-- content -->
			<div class="flex-1 hidden">
				<c-client></c-client>
			</div>
		<!-- footer -->
		<tabbar @tabbarClick="tabbarClick"></tabbar>
	</div>
</template>

<script>
	import headbar from '../components/bar/head/headbar';
	import userBtn from '../components/bar/head/userBtn';
	import applyBtn from '../components/bar/head/applyBtn';
	import tabbar from '../components/bar/tab/tabbar';
	import drawer from '../components/alert/drawer';
	import shade from '../components/alert/shade';
	import applyAlert from '../components/alert/applyAlert/applyAlert';
	import CClient from '../pages/client/CClient';

	export default{
		components:{
			headbar,
			userBtn,
			applyBtn,
			tabbar,
			drawer,
			shade,
			applyAlert,
			CClient,
		},
		data(){
			return {
				title: '我的客户',
				width: window.innerWidth,
				transX: 0,
				startX: 0,
				moveTo: 0,
				drawerTrans: 'drawerTrans',
				showApplyBtn: true,
				showDrawer: false,
				showApplyAlert: false,
				nowPage: 'client'
			}
		},
		methods:{
			tabbarClick(page){
				this.nowPage = page;
				if(page === 'task'){
					this.showApplyBtn = false;
				}else{
					this.showApplyBtn = true;
				}
			},
			userClick(){
				this.transX = this.width * .8;
				this.showDrawer = true;
			},
			drawerItemClick(){
				this.transX = 0;
				this.showDrawer = false;
			},
			applyClick(){
				this.showApplyAlert = !this.showApplyAlert;
				console.log(this.showApplyAlert);
			},
			applyTouchend(){
				this.showApplyAlert = false;
			},
			touchstartFn(){
				this.startX = event.targetTouches[0].pageX;
				this.drawerTrans = '';
			},
			touchmoveFn(){
				var moveX = event.targetTouches[0].pageX;
				var transX = moveX - this.startX + this.transX;
				if(0 < transX && transX < this.width * .8){
					this.transX = transX
				}
				this.moveTo = moveX - this.startX;
				this.startX = moveX;
			},
			touchendFn(){
				this.drawerTrans = 'drawerTrans';
				this.startX = 0;
				this.moveTo = 0;
				if(this.moveTo <= 0){
					this.transX = 0;
					this.showDrawer = false;
				}else{
					this.transX = this.width * .8;
				}
			}
		}
	}
</script>

<style>
	.homePage{
		width: 100%;
		background: #e7e7ea;
	}
	.drawerTrans{
		transition: transform .3s;
	}
</style>