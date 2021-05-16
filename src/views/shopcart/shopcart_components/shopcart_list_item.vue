<template>
  <div>
    <div id="shop-item">
       <div class="item-selector">
        <check_button @click.native="checkBtnClick" :isActive="itemProduct.checked" ></check_button>
      </div>
      <div class="item-img">
        <img :src="itemProduct.image" alt="商品图片" />
      </div>
      <div class="item-info">
        <div class="item-title">{{itemProduct.title}}</div>
        <div class="item-desc">商品描述: {{itemProduct.desc}}</div>
        <div class="item-desc">商品颜色: {{itemProduct.colourSelect}}</div>
        <div class="item-desc">商品尺寸: {{itemProduct.sizeSelect}}</div>
        <div class="info-bottom">
          <div class="item-price left">¥{{itemProduct.realPrice}}</div>
          <div class="item-count right">x{{itemProduct.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import check_button from "components/content/check_button/check_button.vue"
export default {
  name: 'shopcart_list_item',
  props: {
    itemProduct:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components: {
    check_button
   
  },
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {
   checkBtnClick(){
      
        this.itemProduct.checked = !this.itemProduct.checked
        
       

      
     
   }
  }
}
</script> 

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 10px;
  color: #666;
  margin-top: 5px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
</style>
