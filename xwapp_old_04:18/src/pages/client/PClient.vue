<template>
	<div class="flex-1">
		<!-- 标题 -->
		<list-title>
			<div class="flex-1">客户编号</div>	
			<div style='width:41%'>客户名称</div>	
		</list-title>
		<!-- 列表 -->
		<list-row
			:data = data
			firstKey = 'id'
			secondKey = 'name'
			listWidth_2 = '41%'
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
				for(var i=0; i<30; i++){
					arr.push({ id: '440835199512161472', name: 'wqdata' });
				}
				return arr;
			},
		}
	}
</script>