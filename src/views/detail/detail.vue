<template>
 <div class="detail">
  <detail_nav_bar class="detail-nav-bar" @navBarCenterClick='navBarCenterClick' ref="navBar"></detail_nav_bar>
  <scroll ref="scroll" class="content" @probeType="probeType">
    <universal_swiper class="swiper" :banners="swiperImages"></universal_swiper>
    <datail_base_info :detailInfo="detailInfo"  ></datail_base_info>
    <datail_shop_info :shopInfo="shopInfo"  ></datail_shop_info>
    <datail_goods_info :goodsInfo="goodsInfo" @infoLoad="infoLoad" ></datail_goods_info>
    <datail_Params_info :itemParams="itemParams" ref="ParamsInfo"></datail_Params_info>
    <datail_comment_info :commentInfo="commentInfo" ref="commentInfo"></datail_comment_info>
    <goods :good="recommends" ref="goodInfo"></goods>
  </scroll>
  <detail_bottom_bar @click.native="addCart"></detail_bottom_bar>
  <back_top class="back-top" v-show="isBackTopShow" @click.native="backTopClick"></back_top>
 </div>
</template>

<script>
import {getDetailData,getRecommend,detailData,shopData} from 'network/detail'
import scroll from 'components/common/scroll/scroll'

import detail_nav_bar from './detail_components/detail_nav_bar'
import universal_swiper from 'components/common/Swiper/universal_swiper'
import datail_base_info from './detail_components/datail_base_info'
import datail_shop_info from './detail_components/datail_shop_info'
import datail_goods_info from './detail_components/datail_goods_info'
import datail_Params_info from './detail_components/datail_Params_info'
import datail_comment_info from './detail_components/datail_comment_info'
import detail_bottom_bar from './detail_components/detail_bottom_bar'
import back_top from 'components/content/back_top/back_top'

import {debounce} from 'common/utils'
import goods from 'components/content/goods/goods'

export default {
  name: 'detail',
  props: {},
  components: {
    universal_swiper,
    detail_nav_bar,
    datail_base_info,
    datail_shop_info,
    datail_goods_info,
    datail_Params_info,
    datail_comment_info,
    scroll,
    goods,
    detail_bottom_bar,
    back_top
  },
  data () {
    return {
      iid:null,
      swiperImages:[],
      detailInfo:{},
      shopInfo:{},
      goodsInfo:{},
      itemParams:{},
      commentInfo:{},
      recommends:[],
      skipArray:[],
      isBackTopShow:false
    }
  },
  created(){
    this.iid = this.$route.params.iid
    getDetailData(this.iid).then((res) => {
      this.swiperImages = res.result.itemInfo.topImages
      let data = res.result
      this.detailInfo = new detailData(data.itemInfo,data.columns,data.shopInfo.services,)
      this.shopInfo = new shopData(data.shopInfo)
      this.goodsInfo = data.detailInfo
      this.itemParams = data.itemParams
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }
      
    })
    getRecommend().then(res => {
       this.recommends = res.data.list
    })
  },
 
  computed: {},
  watch: {},
  methods: {
   infoLoad(){
    const Refresh = debounce(this.$refs.scroll.refresh)
    Refresh()
    this.skipArray.push(0)
    this.skipArray.push(this.$refs.ParamsInfo.$el.offsetTop)
    this.skipArray.push(this.$refs.commentInfo.$el.offsetTop)
    this.skipArray.push(this.$refs.goodInfo.$el.offsetTop)
   },
   probeType(position){
    if(-position.y >= 0 && -position.y < this.skipArray[1]){
      this.$refs.navBar.countisaction = 0
    }else if(-position.y >= this.skipArray[1] && -position.y < this.skipArray[2]){
      this.$refs.navBar.countisaction = 1
    }else if(-position.y >= this.skipArray[2] && -position.y < this.skipArray[3]){
      this.$refs.navBar.countisaction = 2
    }else if(-position.y >= this.skipArray[3]){
      this.$refs.navBar.countisaction = 3
    }
    this.isBackTopShow = -position.y > 600
      

   },
   navBarCenterClick(index){
     this.$refs.scroll.scroll.scrollTo(0,-this.skipArray[index],300)
   },
   addCart(){
      const product = {};
      product.image = this.swiperImages[0];
      product.title = this.detailInfo.title;
      product.desc = this.detailInfo.desc;
      product.oldPrice = this.detailInfo.oldPrice;
      product.realPrice = this.detailInfo.newPrice
      product.iid = this.iid;
      this.$store.dispatch("AaddCart",product).then( res => this.$toast(res))
     
   },
   backTopClick(){
     this.$refs.scroll.scroll.scrollTo(0,0,300)
     
   }

  }
}
</script> 

<style scoped>
.swiper{
  height: 350px;
}
.detail-nav-bar{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
}
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
.back-top{
  position: fixed;
  bottom: 55px;
  right: 15px;
  z-index: 6;
}


</style>
