<template>
 <div class="shopcart_bottom_bar">
   <check_button class="check_button" :isActive="getActive"  @click.native="checkBtnClick"></check_button>
   <span>全选</span>
   <div class="price">合计:¥{{getPrice}}元</div>
   <div class="calculate" @click="calculateClick">去结算({{getCount}})</div> 
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
    return {}
  },
  computed: {
    ...mapGetters(['cartList']),
    getPrice(){
      return this.cartList.filter( item => item.checked)
      .reduce((pre,item) => pre +  item.count * item.realPrice,0).toFixed()
    },
    getCount(){
       return this.cartList.filter( item => item.checked)
       .reduce((pre,item) => pre + item.count,0)
    },
    getActive(){
      if(this.cartList.length === 0){
        console.log("ds")
        return false
      }else{
        console.log('wo')
        return this.cartList.filter( item => item.checked).length === this.cartList.length 
      }
      
      
      
      
    }
  },
  watch: {},
  methods:{
    checkBtnClick(){
      console.log(this.cartList.filter( item => item.checked).length === this.cartList.length )
      console.log(this.cartList.length)
      console.log(this.getActive)
      if(this.getActive){
        return this.cartList.forEach(item => item.checked = false)
         
      }else if(!this.getActive){
        return this.cartList.forEach(item => item.checked = true)
         
      }
      
    },
    calculateClick(){
      if(this.cartList.filter( item => item.checked).length === 0) this.$toast('未选择商品')
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
