<template>
    <div id="tab-bar">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tabbar",
};
</script>
<style>
#tab-bar {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(253, 243, 243);
  box-shadow: rgb(131, 51, 51) -10px 10;
  opacity: 0.8;
  padding-top: 10px;
}
</style>