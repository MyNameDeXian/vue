<template>
	<div 
	@touchstart = "touchstartFn" 
	@touchmove = "touchmoveFn" 
	@touchend = "touchendFn"
	:style = "'transform: translateX('+ (moveTo || transX) +'px)'"
	:class = "'scrollPage flex-row ' + transition">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				transition: 'transition',
				transX: 0,
				moved: 0,
				startX: 0,
				page: 'left',
				width: window.innerWidth,
			}
		},
		computed:{
			moveTo(){
				if(this.transition == ''){
					return '';
				}
				this.page = this.active;
				var transX = this.active == 'left' ? 0 : 0-this.width;
				this.transX = transX;
				return transX;
			}
		},
		methods:{
			touchstartFn(){
				this.startX = event.changedTouches[0].pageX;
				this.transition = '';

			},
			touchmoveFn(){
				var pageX = event.changedTouches[0].pageX;
				var transX = pageX - this.startX + this.transX;
				this.moved += (pageX - this.startX);
				if(0-this.width < transX && transX < 0){
					this.transX = transX;
				}
				if(pageX > this.startX){
					this.moved < 100 || (this.page = 'left');
				}else{
					this.moved > -100 || (this.page = 'right');
				}
				this.startX = pageX;
			},
			touchendFn(){
				this.transition = 'transition';
				if(this.moved == 0) return;
				this.$emit("touchendFn", this.page);
				this.moved = 0;
				if(this.page == 'left'){
					this.transX = 0;
				}else{
					this.transX = 0 - this.width;
				}
			},
		},
		props: ["active"],
	}
</script>
