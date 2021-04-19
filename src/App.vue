<template>
 <div class="app">
   <main_tab_bar></main_tab_bar>
   <keep-alive exclude="detail">
   <router-view></router-view>
   </keep-alive>
 </div>
</template>

<script>
import main_tab_bar from "components/content/main_tab_bar/main_tab_bar"
export default {
  name: 'App',
  props: {},
  components: {
    main_tab_bar
    
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script> 

<style >
@import url(assets/css/base.css);

</style>
