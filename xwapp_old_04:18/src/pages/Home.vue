<template>
	<div>
		<transition name='bounce'>
			<router-view></router-view>
		</transition>
		<!-- tabbar	 -->
		<tabbar @tabbarClick="tabbarFun"></tabbar>
	</div>
</template>

<script>
	import tabbar from '../components/bar/tabbar';

	export default { 
		components : {
			tabbar,
		},
		methods: {
			tabbarFun(tabbarBtn){
				// console.log(this.$router)
				// console.log(this.$route);
			}
		}
	}
</script>

<style>
.bounce-enter-active {
  animation: bounce-in .3s;
}
.bounce-leave-active {
  animation: bounce-out .3s;
}
@keyframes bounce-in {
  0% {
  	left: 0px;
  }
  100% {
    left: 0px;
  }
}
@keyframes bounce-out {
  0% {
  	z-index: 99;
    left: 0px;
  }
  100% {
  	z-index: 99;
    left: -100%;
  }
}

</style>




