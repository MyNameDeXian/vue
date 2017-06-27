<template>
	<div class="h-100">
		<!-- scrollBtn -->
		<div slot="header" class="scrollBtn flex-row-aic">
			<div @click="leftClick" :class="left + ' flex-1 flex-row-center'">
				<img :src="leftImg" alt="">
				<slot name="left"></slot>
			</div>
			<div @click="rightClick" :class="right+ ' flex-1 flex-row-center'">
				<img :src="rightImg" alt="">
				<slot name="right"></slot>
			</div>
			<div class='footBar' :style="'left:' + barStyle"></div>
		</div>
		<!-- scrollPage -->
		<scroll-page
		:active = 'active'
		@touchendFn = "touchendFn">
			<div class='flex-1 pageItem flex-col'>
				<slot name='leftPage'></slot>
			</div>
			<div class='flex-1 pageItem'>
				<slot name='rightPage'></slot>
			</div>
		</scroll-page>
	</div>
</template>

<script>
	import scrollPage from './scrollPage';

	export default{
		components:{
			scrollPage
		},
		data(){
			return {
				active: 'left',
			}
		},
		computed:{
			left(){
				return this.active == 'left' ? 'active' : '';
			},
			right(){
				return this.active == 'right' ? 'active' : '';
			},
			barStyle(){
				return this.active == 'left' ? '0px' : '50%';
			}
		},
		methods:{
			leftClick(){
				this.active = 'left';
				this.$emit('scrollLeftClick');
			},
			rightClick(){
				this.active = 'right';
				this.$emit('scrollRightClick');
			},
			touchendFn(page){
				this.active = page;
				this.$emit('scrollPageFn', page)
			},
			scrollFn(){
				console.log(event);
			}
		},
		props:["leftImg", "rightImg"],
	}
</script>