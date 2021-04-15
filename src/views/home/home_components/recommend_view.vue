<template>
 <div class="recommend-view">
   <a :href="item.link" v-for="(item,index) in recommends" :key="index">
     <img :src="item.image" alt="">
     <div class="text">{{item.title}}</div>
   </a>
 </div>
</template>

<script>
export default {
  name: 'recommend_view',
  props: {
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script> 

<style scoped>
.recommend-view{
  display: flex;
  padding-bottom: 15px;
  border-bottom: 8px solid  #e4e4e4;
}
.recommend-view a{
  flex: 1;
  text-align: center;
  font-size: 14px;
  margin-top: 5px;
}
.recommend-view a img{
  width: 75%;
  margin-bottom: 3px;
}

</style>
