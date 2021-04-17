<template>
 <nav_bar class="nav-bar">
    <div class="nav-bar-left" slot="left" @click="navBarLeftClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div class="nav-bar-center" slot="center">
      <span>商品</span>
      <span>参数</span>
      <span>评论</span>
      <span>推荐</span>
    </div>
    <div class="nav-bar-right" slot="right"></div>
  </nav_bar>
</template>

<script>
import nav_bar from 'components/common/nav_bar/nav_bar'
export default {
  name: 'detail_nav_bar',
  props: {},
  components: {
    nav_bar
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
     navBarLeftClick(){
      this.$router.go(-1)
    }
  }
}
</script> 

<style scoped>
.nav-bar{
  height: 44px;
  background-color: #fff;
  display: flex;
  text-align: center;
  line-height: 44px;
  color: #000;
  
}
.nav-bar-left,.nav-bar-right{
  width: 60px;
  margin-top: 8px;
}
.nav-bar-center{
  flex: 1;
  font-size: 12px;
  display: flex;
}
.nav-bar-center span{
  flex: 1;
}
</style>

