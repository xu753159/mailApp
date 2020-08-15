<template>
  <tabbar>
    <tabber-Item path="/home">
      <img slot="item-icon-active" src="~assets/img/tabbar/home-active.png" alt />
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt />
      <span slot="item-text">首页</span>
    </tabber-Item>
    <tabber-Item path="/profile">
      <img slot="item-icon-active" src="~assets/img/tabbar/gerenzhongxin.png" alt />
      <img slot="item-icon" src="~assets/img/tabbar/gerenzhongxin(1).png" alt />
      <span slot="item-text">个人中心</span>
    </tabber-Item>
    <tabber-Item path="/cart">
      <img slot="item-icon-active" src="~assets/img/tabbar/gouwucheman.png" alt />
      <img slot="item-icon" src="~assets/img/tabbar/gouwucheman(1).png" alt />
      <span slot="item-text">购物车</span>
    </tabber-Item>
    <tabber-Item path="/category">
      <img slot="item-icon-active" src="~assets/img/tabbar/fenlei.png" alt />
      <img slot="item-icon" src="~assets/img/tabbar/fenlei(1).png" alt />
      <span slot="item-text">分类</span>
    </tabber-Item>
  </tabbar>
</template>

<script>
import tabberitem from '../../common/tabbar/TabberItem';
import tabbar from "../../common/tabbar/Tabbar";
export default {
  name: "MainTabbar",
  components: {
    tabbar: tabbar,
    tabberItem: tabberitem,
  },
};
</script>

<style>

*{
    margin: 0;
    padding: 0;
}
#tab-bar{
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(253, 243, 243);
    box-shadow: rgb(131, 51, 51) -10px 10 ;
    opacity: 0.8;
    padding-top: 10px;
}
.tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
}
.tab-bar-item img{
    width: 25px;
    height: 25px;
    vertical-align: middle;
}
.tab-bar-item span{
    display: block;
    font-size: 12px;
}
</style>