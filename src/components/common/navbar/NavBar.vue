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
    line-height: 44px;
    height: 44px;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 9999;

}
.left,.right{
    width: 60px;
}
.center{
    flex: 1;
    text-align: center;
}
</style>