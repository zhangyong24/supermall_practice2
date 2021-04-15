<template>
 <div class="tab-control" >
   <div class="title" v-for="(item,index) in titles" :key="index"  >
     <span @click="controlClick(index)" :class="{active:controlCount === index}">{{item}}</span>
   </div>

 </div>
</template>

<script>
export default {
  name: 'tab_control',
  props: {
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {},
  data () {
    return {
     controlCount:0
    }
  },
  computed: {},
  watch: {},
  methods: {
    controlClick(index){
     this.controlCount = index
     this.$emit("tabControl",index)
      

    }
  }
}
</script> 

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  height: 44px;
  
  font-size: 14px;
  line-height: 44px;
  color: #000;
}
.title{
  flex: 1;
}
.active{
  padding: 4px;
  border-bottom: 3px solid #ff8198;

}

</style>
