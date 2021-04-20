<template>
    <div class="list" >
      <shopcart_list_item v-for="(item,index) in cartList" :key="index" :itemProduct='item'></shopcart_list_item>
    </div>
</template>

<script>

import shopcart_list_item from "./shopcart_list_item.vue"
import {mapGetters} from 'vuex'

export default {
  name: 'shopcart_list',
  props: {},
  components: {
    shopcart_list_item

  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  watch: {},
  methods: {
    
  }
}
</script> 

<style scoped>
.list{
  height: 100%;
}


</style>