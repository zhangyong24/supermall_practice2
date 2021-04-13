<template>
 <div>
   <tab_bar>
     <tab_bar_item path="/home">
       <img slot="img"  src="~assets/img/tabbar/home.svg" alt="">
       <img slot="img_active" src="~assets/img/tabbar/home_active.svg" alt="">
       <div slot="text">首页</div>
     </tab_bar_item>
     <tab_bar_item path="/category">
       <img slot="img"  src="~assets/img/tabbar/category.svg" alt="">
       <img slot="img_active" src="~assets/img/tabbar/category_active.svg" alt="">
       <div slot="text">分类</div>
     </tab_bar_item>
     <tab_bar_item path="/shopcart">
       <img slot="img"  src="~assets/img/tabbar/shopcart.svg" alt="">
       <img slot="img_active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
       <div slot="text">购物车</div>
     </tab_bar_item>
     <tab_bar_item path="/profile">
       <img slot="img"  src="~assets/img/tabbar/profile.svg" alt="">
       <img slot="img_active" src="~assets/img/tabbar/profile_active.svg" alt="">
       <div slot="text">我的</div>
     </tab_bar_item>
   </tab_bar>
 </div>
</template>

<script>
import tab_bar from "components/common/tab_bar/tab_bar"
import tab_bar_item from "components/common/tab_bar/tab_bar_item"
export default {
  name: 'main_tab_bar',
  props: {},
  components: {
    tab_bar,
    tab_bar_item
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

</style>
