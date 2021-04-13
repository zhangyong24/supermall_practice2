<template>
 <div class="tab-bar-item" @click="barClick">
    <div v-if="!isShow"><slot name="img"></slot></div>
    <div v-else><slot name="img_active"></slot></div>
    <div :style="colorActive"><slot name="text"></slot></div>
 </div>
</template>

<script>
export default {
  name: 'tab_bar_item',
  props: {
    path:{
      type:String,
      default(){
        return ""
      }
    }
  },
  components: {},
  data () {
    return {
       color:"#ff5777"
    }
    
  },
  computed: {
    isShow(){
      return this.$route.path.includes(this.path)
    },
    colorActive(){
      return this.isShow?{color:this.color}:{}
    }
  },
  watch: {},
  methods: {
    barClick(){
      this.$router.replace(this.path)

    }
  }
}
</script> 

<style scoped>
.tab-bar-item{
  flex: 1;
  font-size: 14px;
  text-align: center;
}
.tab-bar-item img{
  width: 24px;
  margin-top:5px ;
}

</style>
