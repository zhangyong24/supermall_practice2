<template>
 <div class="tab-bar">
   <slot></slot>
 </div>
</template>

<script>
export default {
  name: 'tab_bar',
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
.tab-bar{
  height: 49px;
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
