<template>
 <div class="goods-item">
     <img :src="listData.show.img" alt="">
   <div class="text">
      <p class="title">{{listData.title}}</p>
      <span class="price">{{"¥"+listData.price }}</span>
      <img src="~assets/img/common/collect.svg" alt="">
      <span class="cfav">{{listData.cfav}}</span>
    </div>
   
 </div>
</template>

<script>
export default {
  name: 'goods_item',
  props:{
    listData:{
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
  methods: {}
}
</script> 

<style scoped>
.goods-item {
  width: 45%;
  font-size: 12px;
}
.goods-item img{
  width: 100%;
  border-radius: 8px;
  margin-bottom: 3px;
}
.title{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space: nowrap;

}
.text img{
  width: 12px;
  vertical-align: middle;
}
.text{
  text-align: center;
  color: #ff5777;
  margin-right: 10px;
}
.price{
  margin-right: 6px;
}
.cfav{
  margin-left: 3px;
  

}



</style>
