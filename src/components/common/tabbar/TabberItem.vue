<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props:{
      path:String,
      
  },
  
  computed: {
      isActive(){
          if(this.$route.path==this.path){
              return true
          }
      }
  },
  methods: {
      itemClick(){
          // console.log("sss")
          this.$router.replace(this.path)
          
      }
  },
};
</script>

<style>

</style>