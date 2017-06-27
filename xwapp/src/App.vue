<template>
  <div id="app" :style="style">

    <!-- 用于执行动画 -->
    <transition 
      @after-leave="afterLeave" 
      :name="animate">

      <!-- 路由的入口 -->
      <router-view></router-view>

    </transition>
    <loading></loading>
  </div>
</template>

<script>
import loading from './components/alert/loading/loading'
export default {
  name: 'app',
  components:{
    loading
  },
  data(){
  	return {
  		appHeight: '100%',
      style: '',
  	}
  },
  computed: {
    animate(){
      var animate = this.$store.state.animate;
      return animate === 'back' ? 'animate-back' : 'animate';
    }
  },
  methods:{
    afterLeave(){
      this.$store.dispatch("backAnimate", '');
    }
  },
  created(){
  	var height = window.innerHeight;
  	var width = window.innerWidth;
    this.style ='height:' + height + 'px;width:' + width + 'px'
    console.log(width);
  },
}
</script>

<!-- 从一开我就知道 难的不是路由，而是动画，路由你只要知道在什么时候把那个推进来就可以了 -->
<!-- 动画却是千变万化 -->
<style>
  #app{
    overflow: hidden;
  }
  .animate-enter-active {
    animation: bounce-in .3s;
  }
  .animate-leave-active {
    z-index: 100;
    animation: bounce-out .3s;
  }
  .animate-back-enter-active{
    animation: bounce-back-in .3s;
  }
  .animate-back-leave-active {
    z-index: 100;
    animation: bounce-back-out .3s;
  }
  @keyframes bounce-in {
    0% {
      left: 100%;
    }
    100% {
      left: 0px;
    }
  }
  @keyframes bounce-out {
    0% {
      left: 0px;
    }
    100% {
      left: -100%;
    }
  }
  @keyframes bounce-back-in {
    0% {
      left: -100%;
    }
    100% {
      left: 0px;
    }
  }
  @keyframes bounce-back-out {
    0% {
      left: 0px;
    }
    100% {
      left: 100%;
    }
  }
</style>



