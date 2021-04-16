<template>
 <div class="wrapper" ref="wrapper">
   <div class="content">
     <slot></slot>
   </div>
 </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'scroll',
  props: {},
  components: {},
  data () {
    return {}
  },
  mounted(){
      this.scroll = new Bscroll(this.$refs.wrapper, {
        observeDOM:true,
        observeImage:true,
        click:true,
        probeType:3,
        pullUpLoad:true
        })
      this.scroll.on("scroll",(position) => {
        this.$emit("probeType",position)
      }),
      this.scroll.on("pullingUp",() => {
        this.$emit("pullingUp")
        
      })
    
  },
  computed: {
    
  },
  watch: {},
  methods: {
    refresh(){
      this.scroll && this.scroll.refresh()
      
    },
  }
}
</script> 

<style scoped>

</style>
