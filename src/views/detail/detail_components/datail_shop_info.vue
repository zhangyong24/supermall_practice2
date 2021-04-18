<template>
 <div class="shopInfo-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shopInfo-top">
      <img :src="shopInfo.shopLogo" alt="">
      <span class="title">{{shopInfo.shopName}}</span>
    </div>
    <div class="shopInfo-middle">
      <div class="shopInfo-middle-item shopInfo-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shopInfo.shopSells | sellCountFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shopInfo.shopGoodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shopInfo-midlle-item shopInfo-midlle-right">
        <table>
          <tr v-for="(item,index) in shopInfo.shopScore" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">
              {{item.score}}
            </td>
            <td class="better" :class="{'better-more': item.isBetter}">
              <span>{{item.isBetter ? '高' : '低'}}</span>
            </td>
          </tr>
        </table>
        
      </div>
    </div>
    <div class="shopInfo-bottom">
      <div class="enter-shopInfo">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'datail_shopInfo_info',
  props: {
    shopInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  filters:{
    sellCountFilter(value) {
      if (value < 10000) return value
      return (value / 10000).toFixed(1) + "万"
    }
  }
}
</script> 

<style scoped>
  .shopInfo-info {
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }

  .shopInfo-top {
    line-height: 45px;
    display: flex;
    align-items: center;
  }

  .shopInfo-top img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }

  .shopInfo-top .title {
    margin-left: 10px;
    vertical-align: center;
  }

  .shopInfo-middle {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }

  .shopInfo-middle-item {
    flex: 1;
  }

  .shopInfo-middle-left {
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
  }

  .sells-count, .goods-count {
    font-size: 18px;
  }

  .sells-text, .goods-text {
    margin-top: 10px;
    font-size: 12px;
  }

  .shopInfo-midlle-right {
    font-size: 13px;
    color: #333;
  }
  .shopInfo-midlle-right table {
    width: 120px;
    margin-left: 30px;
  }
  .shopInfo-midlle-right table td {
    padding: 5px 0;
  }

  .shopInfo-midlle-right .score{
    color: #5ea732;
  }

  .shopInfo-midlle-right .score-better {
    color: #f13e3a;
  }

  .shopInfo-midlle-right .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }

  .shopInfo-midlle-right .better-more span {
    background-color: #f13e3a;
  }

  .shopInfo-bottom {
    text-align: center;
    margin-top: 10px;
  }

  .enter-shopInfo {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>
