<template>
 <div class="shopcart">
   <shopcart_nav_bar class="nav-bar"></shopcart_nav_bar>
    <scroll class="content">
      <shopcart_list></shopcart_list>
    </scroll>
    <shopcart_bottom_bar></shopcart_bottom_bar>
 </div>
</template>

<script>
import scroll from "components/common/scroll/scroll"
import shopcart_nav_bar from "./shopcart_components/shopcart_nav_bar"
import shopcart_list from "./shopcart_components/shopcart_list"
import shopcart_bottom_bar from "./shopcart_components/shopcart_bottom_bar"
export default {
  name: 'shopcart',
  props: {},
  components: {
    shopcart_nav_bar,
    scroll,
    shopcart_bottom_bar,
    shopcart_list

  },
  data () {
    return {}
  },
  computed: {
  },
  watch: {},
  methods: {}
}
</script> 

<style scoped>
.shopcart{
  height: 100vh;
}
.nav-bar{
  background-color: #ff8198;
  box-shadow:0px 1px 2px 1px rgba(0, 0, 0, 0.2);
  line-height: 44px;
  height: 44px;
  text-align: center;
  display: flex;
  justify-content: center;
  color:#fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
}
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 89px;
  right: 0;
  left: 0;
}

</style>
