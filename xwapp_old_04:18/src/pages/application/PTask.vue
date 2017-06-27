<template>
	<div class="flex-1 w-100 p-f">
		<!-- 标题 -->
		<list-title>
			<div class="flex-1">客户名称</div>	
			<div style='width:50%'>业务品种</div>	
			<div style='width:28%'>金额/元</div>
		</list-title>
		<!-- 列表 -->
		<list-row
			:data = "data"
			firstKey = 'name'
			secondKey = 'type'
			thirdKey = 'amount'
			listWidth_2 = '50%'
			listWidth_3 = '28%'
			scrollBtn='none'
		>
		</list-row>
	</div>
</template>

<script>
	import listTitle from '../../components/lists/listTitle';
	import listRow from '../../components/lists/listRow';

	export default {
		components:{
			listRow,
			listTitle
		},
		computed:{
			data(){
				var arr = [];
				for(var i=0; i<10; i++){
					arr.push({ name: '微乾', amount: '55000', type: '小微企业信用经营贷款' });
				}
				return arr;
			},
		}
	}
</script>