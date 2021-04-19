<template>
 <nav_bar class="nav-bar">
    <div class="nav-bar-left" slot="left" @click="navBarLeftClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div class="nav-bar-center" slot="center">
      <span v-for="(item,index) in navBarArray" :key="index"  :class="{active:index === countisaction}"
      @click="navBarCenterClick(index)">{{item}}</span>
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
    return {
      navBarArray:["商品","参数","评论","推荐"],
      countisaction:0
    }
  },
  computed: {},
  watch: {},
  methods: {
    navBarLeftClick(){
      this.$router.go(-1)
    },
    navBarCenterClick(index){
      this.countisaction = index
      this.$emit('navBarCenterClick',index)
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
.active{
  color:#ff5777;
}
</style>

