<template>
	<div class='listCtr' :style="'height:'+ listHeight + 'px'">
		<div class="listRow flex-row-aic" v-for="item in data">
			<div class="flex-1">{{ item[ firstKey ] }}</div>
			<div :style=" 'width:' + listWidth_2">{{ item[ secondKey ] }}</div>
			<div :style=" 'width:' + listWidth_3" v-if="thirdKey">{{ item[ thirdKey ] }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			listHeight(){
				var pageHeight = window.innerHeight;
				var height = pageHeight - 118.4 -48 ;
				this.tabbar !== 'none' && (height += 57.6);
				this.scrollBtn == 'none' && (height +=48);
				return height ;
			}
		},
		props: {
			'data' 		: Array,
			'firstKey' 	: String,
			'secondKey' : String,
			'thirdKey' 	: String,
			'listWidth_2' 	: String,
			'listWidth_3' 	: String,
			'tabbar' 	: String,
			'scrollBtn' : String
		}
	}
</script>