<template>
 <div >
  <category_nav_bar class="nav-bar"></category_nav_bar>
  <scroll class="scroll">
    <van-tree-select height="100%" :items="categoryItems"
     :main-active-index.sync="active">
       <template #content >
         <div class="sub-category" v-for="(item,index) in subCategoryList" :key="index" @change="changeActive(active)">
           <category_item :cateItem='item'></category_item>
         </div>
       </template>
     </van-tree-select>
  </scroll>
 </div>
</template>

<script>
import {getCategoryData,getSubCategoryData} from "network/category"
import scroll from "components/common/scroll/scroll"
import category_nav_bar from "./category_components/category_nav_bar"
import category_item from "./category_components/category_item"
export default {
  name: 'category',
  props: {},
  components: {
    scroll,
    category_nav_bar,
    category_item
  },
  created(){
    this._getCategoryData()
   
    
    
  
  },
  data () {
    return {
      active: 0,
      categoryItems: [],
      categoryList:{},
      categoryMaitKey:[],
      subCategoryList:{}
    }
  },
  computed: {},
  watch: {},
  methods: {
    _getCategoryData(){
      getCategoryData().then((res) => {
      res.data.category.list.forEach(item => {
        let categoryTitle = {text : item.title}
        this.categoryItems.push(categoryTitle)
        this.categoryMaitKey.push(item.maitKey)
      })
      this.categoryList = res.data.category.list
      getSubCategoryData(this.categoryMaitKey[0]).then((res) => {
      this.subCategoryList = res.data.list
      
      })
     
      })
    }
  },
  changeActive(index){
    console.log(index)
  }
  
}
</script> 

<style scoped>
.van-sidebar-item--select::before {
  background-color:#ff5777;
  height: 100%;
  width: 3px;
}
.van-sidebar-item--select{
  font-size: 14px;
  font-weight: 700;
  color: #ff5777;
}

.scroll{
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
  
}
.nav-bar{
  background-color: #ff8198;
  box-shadow:0px 1px 2px 1px rgba(0, 0, 0, 0.2);
  line-height: 44px;
  height: 44px;
  text-align: center;
  display: flex;
  justify-content: center;
  color:#fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
}
.sub-category{
  display: flex;
  width: 33%;
}
</style>
