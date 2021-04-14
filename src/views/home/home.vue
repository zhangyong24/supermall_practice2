<template>
 <div>
  <nav_bar class="nav-bar">
    <div class="nav-bar-left" slot="left"></div>
    <div class="nav-bar-center" slot="center">购物街</div>
    <div class="nav-bar-right" slot="right"></div>
  </nav_bar>
  <home_swiper :banners="banners"></home_swiper>
 </div>
</template>

<script>
import nav_bar from 'components/common/nav_bar/nav_bar'
import home_swiper from 'components/common/Swiper/home_swiper'
import {getHomeMultidata} from 'network/home'
export default {
  name: 'home',
  props: {},
  components: {
    nav_bar,
    home_swiper
  },
  data () {
    return {
      banners:[]
    }
  },
  created(){
    getHomeMultidata().then((res) =>{
      this.banners = res.data.banner.list
      console.log(res)
    }
    )
  },
  computed: {},
  watch: {},
  methods: {}
}
</script> 

<style scoped>
.nav-bar{
  background-color: #ff8198;
  box-shadow:0px 1px 2px 1px rgba(0, 0, 0, 0.2);
  line-height: 44px;
  text-align: center;
  display: flex;
  color:#fff;
}
.nav-bar-left,.nav-bar-right{
  width: 60px;
}
.nav-bar-center{
  flex: 1;
}

</style>
