<template>
   <nav_bar >
     <div slot="center" class="center"><span>购物车({{cartLength}})</span></div>
   </nav_bar>
</template>

<script>
import {mapGetters}  from 'vuex'
import nav_bar from "components/common/nav_bar/nav_bar.vue"
export default {
  name: 'shopcart_nav_bar',
  props: {},
  components: {
    nav_bar
  },
  data () {
    return {}
  },
  computed: {
  ...mapGetters(["cartLength"])

  },
  watch: {},
  methods: {}
}
</script> 

<style scoped>

</style>
