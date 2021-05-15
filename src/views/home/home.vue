<template>
 <div class="home">
  <nav_bar class="nav-bar">
    <div class="nav-bar-left" slot="left"></div>
    <div class="nav-bar-center" slot="center">购物街</div>
    <div class="nav-bar-right" slot="right"></div>
  </nav_bar>
  <tab_control class="tab-control-show" @tabControl="tabControl" ref="tabControl1" v-show="tabControlShow"
  :titles='["流行","新款","精选"]'>
  </tab_control>
  <scroll ref="scroll" class="content" @probeType="probeType" @pullingUp="pullingUp">
    <universal_swiper :banners="banners" class="home-swiper" @swiperLoad="swiperLoad"></universal_swiper>
    <recommend_view :recommends='recommends'></recommend_view>
    <featrue_view></featrue_view>
    <tab_control @tabControl="tabControl" :titles='["流行","新款","精选"]' ref="tabControl2"></tab_control>
    <goods :good="goods[goodsInit].list" class="goods"></goods> 
  </scroll>
  <back_top v-show="backTopShow" class="back-top" @click.native="backClick"></back_top>
 </div>
</template>

<script>
import nav_bar from 'components/common/nav_bar/nav_bar'
import universal_swiper from 'components/common/Swiper/universal_swiper'
import scroll from 'components/common/scroll/scroll'
import tab_control from 'components/content/tab_control/tab_control'
import back_top from 'components/content/back_top/back_top'
import goods from 'components/content/goods/goods'
import featrue_view from './home_components/featrue_view'
import recommend_view from './home_components/recommend_view'
import {getHomeMultidata,getHomeData} from 'network/home'
import {debounce} from 'common/utils'
export default {
  name: 'home',
  props: {},
  components: {
    nav_bar,
    universal_swiper,
    featrue_view,
    recommend_view,
    tab_control,
    goods,
    scroll,
    back_top
  },
  data () {
    return {
      banners:[],
      recommends:[],
      goods:{
        "pop":{page:0,list:[]},
        "new":{page:0,list:[]},
        "sell":{page:0,list:[]}
      },
      goodsInit:"pop",
      tabControlShow:false,
      backTopShow:false,
      tabControlY:0,
      activatedControlY:null
    }
  },
  created(){
    this.getHomeMultidata()
    this.getHomeData("pop")
    this.getHomeData("new")
    this.getHomeData("sell")
    
    
  },
  mounted(){
    const Refresh = debounce(this.$refs.scroll.refresh)
    this.$bus.$on("imgLoad",() => {
      Refresh()
      
    })
  },
  deactivated(){
    
    this.activatedControlY = this.$refs.scroll.scroll.y
  },
  activated(){
    this.$refs.scroll.refresh()
    this.$refs.scroll.scroll.scrollTo(0,this.activatedControlY,0)

  },
  computed: {},
  watch: {},
  methods: {
    //事件
    tabControl(index){
      if(index === 0){
        this.goodsInit = "pop"
      }else if(index === 1){
        this.goodsInit = "new"
      }else if(index === 2){
        this.goodsInit = "sell"
      }
      this.$refs.tabControl2.controlCount = index
      this.$refs.tabControl1.controlCount = index
    },
    probeType(position){
      // if(-position.y > 650){
      //    this.backTopShow = true
      // }else if(-position.y < 650){
      //    this.backTopShow = false
      // }
      this.backTopShow = -position.y > 650
      this.tabControlShow = -position.y - 44 > this.tabControlY
      
    },
    pullingUp(){
      this.getHomeData(this.goodsInit)
    },
    backClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)

    },
    swiperLoad(){
      this.tabControlY = this.$refs.tabControl2.$el.offsetTop
    },
    //网络
    getHomeMultidata(){
      getHomeMultidata().then((res) =>{
      let bannersNew = [] 
      for (let index = 0; index < res.data.banner.list.length; index++) {
          bannersNew.push(res.data.banner.list[index])
          this.banners = bannersNew
      }
      // this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
      } )
    },
    getHomeData(type){
      const page = this.goods[type].page + 1
      getHomeData(type,page).then((res) => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.scroll.finishPullUp()
      }

      )
    }
    
  }
}
</script> 

<style scoped>
.nav-bar{
  background-color: #ff8198;
  box-shadow:0px 1px 2px 1px rgba(0, 0, 0, 0.2);
  line-height: 44px;
  text-align: center;
  display: flex;
  color:#fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
}
.home-swiper{
  margin-top: 44px;
}
.nav-bar-left,.nav-bar-right{
  width: 60px;
}
.nav-bar-center{
  flex: 1;
}
.content{
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.back-top{
  position: fixed;
  bottom: 55px;
  right: 10px;
  z-index: 5;
}
.tab-control-show{
  z-index: 6;
  position: relative;
  top: 44px;
  background-color: #fff;
}
.goods{
  width: 100%;
}

</style>
