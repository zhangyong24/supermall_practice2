<template>
 <div class="check-button">
   <img src="~assets/img/cart/tick.svg" alt="" :class="{'active':isActive}">
 </div>
</template>

<script>
export default {
  name: 'check_button',
  props: {
    isActive:{
      type:Boolean,
      default(){
        return true
      }
    }
  },
  components: {},
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  methods: {
  }
}
</script> 

<style scoped>
.check-button{
  width: 100%;
  
}
.check-button img{
  
  border: 2px solid #aaa;
  border-radius: 50%;
}
.active{
  background-color: var(--color-tint);
}

</style>
