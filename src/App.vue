<template>
  <div id="app">
    <router-view></router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>
  <script>
  import MainTabbar from 'components/content/mainTabbar/MainTabbar.vue'
  export default {
    components:{
      MainTabbar
    }
  }
  </script>
<style>
#app{position: relative;
  overflow: hidden;}
@import 'assets/css/normalize.css'
</style>
