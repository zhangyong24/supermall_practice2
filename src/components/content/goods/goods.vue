<template>
 <div class="goods">
     <goods_item v-for="(item,index) in good" :key='index' :listData="item">
     </goods_item>
 </div>
</template>

<script>
import goods_item from './goods_item'
export default {
  name: 'goods',
  props: {
    good:{
      type:Array,
      default(){
        return {}
      }
    }
  },
  created(){
    console.log(this.good)
  },
  components: {
    goods_item
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script> 

<style scoped>
.goods{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

</style>
