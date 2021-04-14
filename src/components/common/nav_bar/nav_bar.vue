<template>
 <div class="nav-bar">
   <slot name="left"></slot>
   <slot name="center"></slot>
   <slot name="right"></slot>
 </div>
</template>

<script>
export default {
  name: 'nav_bar',
  props: {},
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
  .nav-bar{
    height: 44px;
    display: flex;
  }
  

</style>
