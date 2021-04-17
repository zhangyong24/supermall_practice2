<template>
  <swiper ref="mySwiper" :options="swiperOptions" >
    <swiperSlide v-for="(item,index) in banners" :key="index" class="swiper-slide">
      <img :src="item.image" alt="" @load="swiperLoad">
    </swiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
export default {
  name: 'universal_swiper',
  props: {
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data(){
    return {
      swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            
          },
          loop : true,
          loopAdditionalSlides : 3,
          // direction: 'vertical',
          autoplay: {
          disableOnInteraction: false,
          delay: 3000,
        },
      }
    }
  },
  mounted() {
      this.swiper.slideTo(0, 1000, false)
    },
  computed: {
   swiper() {
      return this.$refs.mySwiper.$swiper
     }

    
  },
  watch: {},
  methods: {
    swiperLoad(){
      this.$emit("swiperLoad")
    }
  }
}
</script> 

<style scoped>
.swiper-slide img{
  width: 100%;
}

</style>
