<template>
 <div>
  <nav_bar class="nav-bar">
    <div class="nav-bar-left" slot="left"></div>
    <div class="nav-bar-center" slot="center">购物街</div>
    <div class="nav-bar-right" slot="right"></div>
  </nav_bar>
  <home_swiper :banners="banners" class="home-swiper"></home_swiper>
  <recommend_view :recommends='recommends'></recommend_view>
  <featrue_view></featrue_view>
  <tab_control @tabControl="tabControl" :titles='["流行","新款","精选"]'></tab_control>
  <goods :good="goods[goodsInit].list"></goods> 
 </div>
</template>

<script>
import nav_bar from 'components/common/nav_bar/nav_bar'
import home_swiper from 'components/common/Swiper/home_swiper'
import tab_control from 'components/content/tab_control/tab_control'
import goods from 'components/content/goods/goods'
import featrue_view from './home_components/featrue_view'
import recommend_view from './home_components/recommend_view'
import {getHomeMultidata,getHomeData} from 'network/home'
export default {
  name: 'home',
  props: {},
  components: {
    nav_bar,
    home_swiper,
    featrue_view,
    recommend_view,
    tab_control,
    goods
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
      goodsInit:"pop"
    }
  },
  created(){
    this.getHomeMultidata()
    this.getHomeData("pop")
    this.getHomeData("new")
    this.getHomeData("sell")
    
  },
  computed: {},
  watch: {},
  methods: {
    getHomeMultidata(){
      getHomeMultidata().then((res) =>{
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
      } )
    },
    getHomeData(type){
      const page = this.goods[type].page + 1
      getHomeData(type,page).then((res) => {
        console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      }

      )
    },
    tabControl(index){
      if(index === 0){
        this.goodsInit = "pop"
      }else if(index === 1){
        this.goodsInit = "new"
      }else if(index === 2){
        this.goodsInit = "sell"
      }
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

</style>
