<template>
	<scroll-btn
	:leftImg = "leftImg"
	:rightImg = "rightImg"
	@scrollLeftClick = "scrollLeftClick"
	@scrollRightClick = "scrollRightClick"
	@scrollPageFn = "scrollPageFn">
		<p slot='left'>个人客户</p>
		<p slot='right'>企业客户</p>
		<div slot='leftPage' class="flex-col h-100">
			<list-title>
				<div class="flex-1 flex-row-center">客户名称</div>
				<div class="flex-row-center" style="width:41%">客户编号</div>
			</list-title>
			<div class="flex-1 auto">
				<list-row v-for="(item,key) in data" :key='key'>
					<div class="flex-1 flex-row-center">{{item.name}}</div>
					<div class="flex-row-center" style="width:41%">{{item.id}}</div>
				</list-row>
			</div>
		</div>
		<div slot='rightPage' class="flex-col h-100 ">
			<list-title>
				<div class="flex-1 flex-row-center">客户名称</div>
				<div class="flex-row-center" style="width:41%">客户编号</div>
			</list-title>
			<div class="flex-1 auto">
				<list-row v-for="(item,key) in data" :key='key'>
					<div class="flex-1 flex-row-center">{{item.name}}</div>
					<div class="flex-row-center" style="width:41%">{{item.id}}</div>
				</list-row>
			</div> 
		</div>
	</scroll-btn>
</template>

<script>
	import scrollBtn from '@/components/scroll/scrollBtn';
	import listRow from '@/components/lists/listRow';
	import listTitle from '@/components/title/listTitle';

	export default {
		components:{
			scrollBtn,
			listTitle,
			listRow
		},
		data(){
			return {
				page: 'left',
				img_pn: require('../../img/client/icon_customer_personal_n.png'),
				img_ph: require('../../img/client/icon_customer_personal_h.png'),
				img_cn: require('../../img/client/icon_customer_company_n.png'),
				img_ch: require('../../img/client/icon_customer_company_h.png'),
			}
		},
		computed:{
			data(){
				var arr = [];
				for(var i=0; i<80; i++){
					var obj = {name: 'wqdata', id: '00480'}
					arr.push(obj);
				}
				return arr;
			},
			leftImg(){
				return this.page === 'left'? this.img_ph : this.img_pn;
			},
			rightImg(){
				return this.page === 'right'? this.img_ch : this.img_cn
			}
		},
		methods:{
			scrollLeftClick(){
				this.page = "left";
			},
			scrollRightClick(){
				this.page = "right";
			},
			scrollPageFn(page){
				this.page = page
			}
		}
	}
</script>