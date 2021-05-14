<template>
 <div>
   <nav_bar>
     <div slot="center" class="center"><span>分类</span></div>
   </nav_bar>
 </div>
</template>

<script>
import nav_bar from "components/common/nav_bar/nav_bar.vue"
export default {
  name: 'category_nav_bar',
  props: {},
  components: {
    nav_bar
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script> 

<style scoped>

</style>
