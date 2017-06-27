<template>
	<div class="tabbar flex-row-aic">
		<tab-item 
			v-if="show" 
			:active = "active=='1'"
			@tabClick="clientClick" 
			:img="active=='1'? img_ch : img_cn">我的客户</tab-item>
		<tab-item 
			:active = "active=='2'"
			@tabClick="applyClick" 
			:img="active=='2'? img_ah : img_an">{{ applyText }}</tab-item>
		<tab-item 
			:active = "active=='3'"
			@tabClick="taskClick" 
			:img="active=='3'? img_th : img_tn">{{ taskText }}</tab-item>
	</div>
</template>

<script>
	import tabItem from './tabItem';
	export default {
		components:{
			tabItem,
		},
		data(){
			return {
				applyText: '我的申请',
				taskText: '我的任务',
				active : '1',
				show: true,
				img_cn : require("../../../img/bar/tab_my-client_n.png"), 
				img_ch : require("../../../img/bar/tab_my-client_h.png"), 
				img_an : require("../../../img/bar/tab_my-application_n.png"),
				img_ah : require("../../../img/bar/tab_my-application_h.png"), 
				img_tn : require("../../../img/bar/tab_-my-task_n.png"),
				img_th : require("../../../img/bar/tab_-my-task_h.png"),
			}
		},
		created(){
			var user = '00480';
			if(user !== '00480'){
				this.show = false;
				this.active = '2';
				this.applyText = '当前任务';
				this.taskText = '已完成任务';
			}
		},
		methods: {
			clientClick(){
				if(this.active == '1') return;
				this.active = '1';
				this.$emit('tabbarClick', 'client');
				// this.$router.push( 'clientContainer' );
			},
			applyClick(){
				if(this.active == '2') return;
				this.active = '2';
				this.$emit('tabbarClick','apply');
				// this.$router.push( 'PApplication' );
			},
			taskClick(){
				if(this.active == '3') return;
				this.active = '3';
				this.$emit('tabbarClick','task');
				// this.$router.push( 'PTask' );
			}
		}
	}
</script>