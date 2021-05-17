<template>
 <div class="shopcart_bottom_bar">
   <check_button class="check_button" :isActive="nowActive"  @click.native="checkBtnClick"></check_button>
   <span>全选</span>
   <div class="price">合计:¥{{newPrice}}元</div>
   <div class="calculate" @click="calculateClick">去结算({{newCount}})</div> 
 </div>
</template>

<script>
import {mapGetters} from "vuex"
import check_button from "components/content/check_button/check_button.vue"
export default {
  name: 'shopcart_bottom_bar',
  props: {},
  components: {
    check_button
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['getList','getPrice','getCount','getActive','getCalculateNow']),
    newPrice(){
      return this.getPrice
    },
    newCount(){
      return this.getCount
      
    },
    nowActive(){
      return this.getActive
    }
  },
  watch: {
   
  },
  methods:{
    checkBtnClick(){
      if(this.nowActive){
        return this.$store.commit("selectActive")
      }else{
        return this.$store.commit("allSelectActive")
      }
      
    },
    calculateClick(){
    if(this.getCalculateNow){
     this.$toast('未选择商品')
    }
  }
  }
}
</script> 

<style scoped>
.shopcart_bottom_bar{
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 49px;
  right: 0;
  left: 0;
  display: flex;
  font-weight: 700;
  

}
.check_button{
  width: 30px;
  margin-left: 10px;
  margin-top: 3px;
}
.price{
  flex: 1;
  padding-right: 85px;
}
.calculate{
  width: 90px;
  background:var(--color-high-text);
  color: #fff;
}
</style>
