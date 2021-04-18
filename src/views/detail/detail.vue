<template>
 <div class="detail">
  <detail_nav_bar class="detail-nav-bar"></detail_nav_bar>
  <scroll ref="scroll" class="content" @probeType="probeType">
    <universal_swiper class="swiper" :banners="swiperImages"></universal_swiper>
    <datail_base_info :detailInfo="detailInfo" ></datail_base_info>
    <datail_shop_info :shopInfo="shopInfo" ></datail_shop_info>
    <datail_goods_info :goodsInfo="goodsInfo" @infoLoad="infoLoad"></datail_goods_info>
    <datail_Params_info :itemParams="itemParams" ref="Params"></datail_Params_info>
    <datail_comment_info :commentInfo="commentInfo" ref="comment"></datail_comment_info>
    <goods :good="recommends"></goods>
  </scroll>
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
    goods
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
      recommends:[]
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
       console.log(this.recommends)
    })
    
  },
  computed: {},
  watch: {},
  methods: {
   infoLoad(){

   },
   probeType(){

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
  bottom: 93px;
  right: 0;
  left: 0;
}


</style>
