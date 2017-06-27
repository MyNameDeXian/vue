<template>
  <div id="app" class="app" :style='appStyle'>
    <div :class="'drawerAnimat ' + trans" :style="'transform: translateX('+lateX+'px)'">
      <!-- 导航条部分 -->
      <head-bar @userClick="userClick"></head-bar>
      <!-- 抽屉遮罩 -->
      <div
        @touchend="touchendFn"
        @touchmove="touchmoveFn"
        @touchstart="touchstartFn"
        v-show=" drawerShow=='open' " 
        class="drawer-shade p-f-t"></div>
      <!-- 抽屉 -->
      <drawer @drawerItemClick="drawerItemClick"></drawer>
      <!-- 路由 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import headBar from './components/bar/headBar';
  import drawer from './components/alert/drawer';
  export default {
    name: 'app',
    components:{
    	headBar,
    	drawer
    },
    data(){
      return {
        transform: 'transform: translateX(0px)',
        drawerShow: 'close',
        coordX: 0,
        lateX: 0,
        maxLateX: 0,
        trans: 'trans',
      }
    },  
    computed: {
      appStyle(){
        var height = window.innerHeight;
        return `height: ${height}px;`;
      }
    },
    methods:{
      userClick(){
        this.drawerShow = 'open';
        this.maxLateX = this.lateX = window.innerWidth * .8;
      },
      drawerItemClick(){
        this.drawerShow = 'close';
        this.lateX = 0;
      },
      touchstartFn(event){
        this.coordX = event.targetTouches[0].pageX;
        this.trans = '';
      },
      touchmoveFn(event){
        var nowCoordX = event.changedTouches[0].pageX;
        var moveX = nowCoordX - this.coordX;
        var lateX = this.lateX + moveX;
        if(lateX < this.maxLateX){
          this.lateX = lateX;
        }
        this.coordX = nowCoordX;
      },
      touchendFn(){
        this.trans = 'trans';
        this.drawerShow = 'close';
        this.lateX = 0;
      },
    }
  }
</script>

<style>
  .app{
    width: 100%;
    background: #e7e7e7;
    overflow: hidden;
  }
  .drawerAnimat{
    padding-top: 50.4px;
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
  }
  .trans{
    transition: transform .3s;
  }
  .drawer-shade{
    width: 100%;
    height: 100%;
    background:  #e8e8e8;
    opacity: .6;
    z-index: 180;
  }
</style>
