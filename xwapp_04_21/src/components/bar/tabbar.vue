<template>
	<div class='p-f-b tabbar flex-row'>
		<div class='flex-1 flex-col-center' @click='clientClick'>
			<img :src="active==0 ? img_ch : img_cn" alt=""/>
			<p :class="active==0 ? 'active' :''">我的客户</p>
		</div>
		<div class='flex-1 flex-col-center' @click='applyClick'>
			<img :src="active==1 ? img_ah : img_an" alt=""/>
			<p :class="active==1 ? 'active' :''">{{ applyText }}</p>
		</div>
		<div class='flex-1 flex-col-center' @click='taskClick'>
			<img :src="active==2 ? img_th : img_tn" alt=""/>
			<p :class="active==2 ? 'active' :''">{{ taskText }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				applyText: '我的申请',
				taskText: '我的任务',
				active : 0,
				img_cn : require("../../img/tab/tab_my-client_n.png"), 
				img_ch : require("../../img/tab/tab_my-client_h.png"), 
				img_an : require("../../img/tab/tab_my-application_n.png"),
				img_ah : require("../../img/tab/tab_my-application_h.png"), 
				img_tn : require("../../img/tab/tab_-my-task_n.png"),
				img_th : require("../../img/tab/tab_-my-task_h.png"),
			}
		},
		methods: {
			clientClick(){
				if(this.active == 0) return;
				this.active = 0;
				this.$emit('tabbarClick', 0);
				// this.$router.push( 'clientContainer' );
			},
			applyClick(){
				if(this.active == 1) return;
				this.active = 1;
				this.$emit('tabbarClick','1');
				// this.$router.push( 'PApplication' );
			},
			taskClick(){
				if(this.active == 2) return;
				this.active = 2;
				this.$emit('tabbarClick','2');
				// this.$router.push( 'PTask' );
			}
		}
	}
</script>







