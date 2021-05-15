<template>
 <div class="category-item">
  <div>
    <a :href="cateItem.link">
      <img :src="cateItem.image" alt="">
    </a>
  </div>
    <span>{{cateItem.title}}</span>
 </div>
</template>

<script>
export default {
  name: 'category_item',
  props: {
    cateItem:{
      type:Object,
      default(){
        return {}
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
.category-item img{
  width: 70px;
}
.category-item {
  text-align: center;
  
}
.category-item span{
  font-size: 12px;
  

}
</style>
