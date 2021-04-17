<template>
 <div class="detail">
  <detail_nav_bar></detail_nav_bar>
  <universal_swiper :banners="swiperImages"></universal_swiper>

 </div>
</template>

<script>
import {detailData} from 'network/detail'
import detail_nav_bar from './detail_components/detail_nav_bar'
import universal_swiper from 'components/common/Swiper/universal_swiper'

export default {
  name: 'detail',
  props: {},
  components: {
    universal_swiper,
    detail_nav_bar
  },
  data () {
    return {
      iid:null,
      swiperImages:[],
    }
  },
  created(){
    this.iid = this.$route.params.iid
    console.log(this.iid)
    detailData(this.iid).then((res) => {
      this.swiperImages = res.result.itemInfo.topImages
      console.log(this.swiperImages)
      
      

    })
    
  },
  computed: {},
  watch: {},
  methods: {
   
  }
}
</script> 

<style scoped>


</style>
