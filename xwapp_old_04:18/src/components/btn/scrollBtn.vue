<template>
	<div class="scrollCtr">
		<div class="scrollBtn p-r flex-row">
			<!-- 左 -->
			<div @click="leftBtn" class="flex-1 flex-row-center">
				<img :src="leftImg || leftImg_h" alt="">
				<p :class="LText">{{ leftText }}</p>
			</div>
			<!-- 右 -->
			<div @click="rightBtn" class="flex-1 flex-row-center">
				<img :src="rightImg || rightImg_n" alt="">
				<p :class='RText'>{{ rightText }}</p>
			</div>
			<!-- scrollBar -->
			<div class="scrollBar p-a-b" :style="barLeft"></div>
		</div>
		<div 
			@touchstart="touchstartFn"
			@touchmove="touchmoveFn"
			@touchend="touchendFn"
			:style="'transform: translateX('+lateX+'px)'"
			:class="'scrollList flex-row ' + trans">

			<slot></slot>
		</div>
	</div>

</template>

<script>
	export default {
		data(){
			return {
				barLeft: 'left: 0px',
				leftImg: '',
				rightImg: '',
				LText: 'active',
				RText: '',
				lateX: 0,   //记录translateX的坐标
				coordX: 0,	//记录手指的X坐标
				moveX: 0, 	//记录手指移动的X距离
        		moveTo: 'right',  //记录手指最后移动的方向
        		trans: 'trans',	  //是否启动tranform 过度效果
			}
		},
		computed:{
			maxLateX(){
				var width = 0 - window.innerWidth;
				return width;
			}
		},
		methods: {
			// scrollBtn左按钮 点击事件
			leftBtn(late) {
				if(this.LText == 'active') return;
				this.leftImg = this.rightImg = null;
				this.LText = 'active';
				this.RText = '';
				this.barLeft = 'left: 0px';
				late=='1' || (this.lateX = '0');
				this.$emit('scrollBtnClick', 'left');
			},
			// scrollBtn右按钮 点击事件
			rightBtn(late){
				if(this.RText == 'active') return;
				this.rightImg = this.rightImg_h;
				this.leftImg = this.leftImg_n;
				this.LText = '';
				this.RText = 'active';
				this.barLeft = 'left: 50%';
				late=='1' || (this.lateX = this.maxLateX);
				this.$emit('scrollBtnClick', 'right');
			},
			touchstartFn(){
				this.coordX = event.targetTouches[0].pageX;
				this.trans = '';
			},
			touchmoveFn(){
				var nowCoordX = event.changedTouches[0].pageX;
		        var moveX = nowCoordX - this.coordX;
		        this.moveX += moveX;
		        var lateX = this.lateX - 0 + moveX;
		        if(this.maxLateX < lateX && lateX <0 ){
		          this.lateX = lateX;
		        }
		        if(nowCoordX < this.coordX){
	        		this.moveX < -30 || (this.moveTo = 'left');
		        }else{
		        	this.moveTo = 'right';
		        }
		        this.coordX = nowCoordX;
			},
			touchendFn(){
				this.trans = 'trans';
				if(this.moveTo == 'left'){
					this.lateX = this.maxLateX;
					this.rightBtn( '1' )
				}else if(this.moveTo == 'right'){
					this.leftBtn( '1' )
					this.lateX = '0';
				}
			}
		},
		props: ['leftImg_n', 'leftImg_h', 'leftText', 'rightImg_n', 'rightImg_h', 'rightText'],
	}
</script>




