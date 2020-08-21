<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>      
    <div class="center"><slot name="middle"></slot></div>      
    <div class="right"><slot name="right"></slot></div>      
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-bar{
    display: flex;
    /* position: absolute; */
    line-height: 44px;
    height: 44px;
    /* position: fixed; */
    top: 0px; 
    left: 0px;
    right: 0px; 
    /* z-index: 9999; */

}
.left,.right{
    width: 60px;
}
.center{
    flex: 1;
    text-align: center;
}
.left img{
  width: 12px;
  height: 12px;
  position: absolute;
  left: 16px;
  top:16px;
}
</style>