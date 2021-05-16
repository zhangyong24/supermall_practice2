<template>
  <van-action-sheet
    v-model="product.showSku"
    title="商品选择"
    cancel-text="确定"
    close-on-click-action
    @cancel="onCancel"
    
    
  >
    <div class="content">
      <div class="sku-top">
        <img :src="product.image" alt="" />
        <div class="sku-top-right">
          <p class="newPrice">¥{{ product.realPrice }}</p>
          <p class="oldPrice">¥{{ product.oldPrice }}</p>
          <p class="totalStock">库存 : {{ product.totalStock }}</p>
          <p class="specification">请选择 : 分类 尺码</p>
        </div>
      </div>

      <div class="sku-bottom">
        <div class="colour">
          <p>{{product.colourLabel}}</p>
          <div class="c-button"
          >
            <span v-for="(item, index) in product.colourName"
            :key="index" @click="colourClick(index)" :class="{'isBackground-color':index===colourCount}">
            {{item}} </span>
          </div>
        </div>
        <div class="size">
          <p>{{product.sizeLabel}}</p>
          <div class="s-button">
             <span v-for="(item, index) in product.sizeName"
            :key="index" @click="sizeClick(index)" :class="{'isBackground-color':index===sizeCount}"
            >{{ item }}</span>
          </div>
        </div>
        <div class="amount">
          <p>数量</p>
          <van-stepper v-model="product.count" @plus="addPlus"  @minus="minusPlus"/>
        </div>
      </div>
    </div>
  </van-action-sheet>
</template>

<script>
export default {
  name: "detail_sku",
  props: {
    product: {
      type: Object,
      default() {
        return {
           
        };
      },
    },
  },
  components: {},
  data() {
    return {
      colourCount:0,
      sizeCount:0
    };
  },
  computed: {},
  watch: {},
  methods: {
    addPlus(){
      return this.product.count++
    },
    minusPlus(){
      return this.product.count--
    },
    colourClick(index){
      this.colourCount = index
      this.$emit("colourClick",index)
    },
    sizeClick(index){
      this.sizeCount = index
      this.$emit("sizeClick",index)
    },
    onCancel(){
      this.product.checked = true
      console.log(this.product)
      this.$store.dispatch("AaddCart",this.product).then( res => this.$toast(res))
    }
  },
};
</script>

<style scoped>
.van-action-sheet__content {
  height: 350px;
}
.van-action-sheet__content img {
  border-radius: 10px;
  height: 120px;
  margin-top: 20px;
}
.van-action-sheet__cancel {
  background-color: #ff8198;
  color: #fff;
}
.van-action-sheet__header {
  background-color: #ff8198;
  color: #fff;
}
.sku-top {
  display: flex;
  justify-content: space-around;
}

.sku-top-right {
  font-size: 20px;
  padding-right: 120px;
  margin-top: 25px;
  color: #ff8198;
}
.sku-top-right .oldPrice {
  font-size: 16px;
  text-decoration: line-through;
  margin-top: 5px;
}
.sku-top-right .totalStock,
.specification {
  font-size: 14px;
  margin-top: 5px;
  color: #000;
}
.sku-top-right .totalStock {
  margin-top: 20px;
}
.sku-bottom{
  margin-top: 15px;
}
.sku-bottom .colour .c-button{
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
}
.sku-bottom .colour p{
  margin-left: 10px;
  margin-top: 10px;
  font-size: 16px;
  color: #000;
}
.sku-bottom .colour .c-button span{
  background-color: rgb(240, 240, 240);
  border: 1px solid #ccc(233, 233, 233);
  border-radius: 5px;
  padding: 5px;
  font-size: 12px;
  
  
  margin: 5px;
  word-break:keep-all;
  word-wrap:break-word;
}
.sku-bottom .size p{
  margin-left: 10px;
  margin-top: 10px;
  font-size: 16px;
  color: #000;
}
.sku-bottom .size .s-button{
  margin: 8px 0 8px 10px;
  
 
}
.sku-bottom .size .s-button span{
  background-color: rgb(240, 240, 240);
  border: 1px solid rgb(233, 233, 233);
  border-radius: 5px;
  padding: 5px;
  font-size: 12px;
 
  
  margin: 5px;
  
  
}
.sku-bottom .amount{
  margin-top: 25px;
}
.sku-bottom .amount p{
  margin-left: 10px;
  font-size: 16px;
  color: #000;
  display: inline;
}
.van-stepper{
  height: 20px;
  display: inline;
  margin-left: 15px;

}
.van-stepper__minus,.van-stepper__plus{
  height: 4px;
  width: 4px;
}
.van-stepper__input{
   height: 4px;
  width: 4px;

}
.isBackground-color{
  background-color: #ff8198  !important;
  color: #fff;
}
</style>
