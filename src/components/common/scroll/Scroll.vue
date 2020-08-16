<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 1;
      },
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return { scroll: null };
  },
  mounted() {
    //1.创建Bscroll对象
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    //2.监听滚动的位置
    this.scroll.on("scroll", (position) => {
      this.$emit("currentPosition", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
    //3.监听上拉使劲按
  },
  methods:{
      finishPullUp(){
          this.scroll.finishPullUp()
      }
  }
};
</script>

<style>
</style>