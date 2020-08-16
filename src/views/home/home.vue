<template>
   <div id="home">
       <nav-bar class="nav-home">
           <span slot="middle">蘑菇街</span>
       </nav-bar>
       <back-top @click.native="backClick" v-show="backIsShow"></back-top>
       <!-- j监听一个组件的原生时间加上.native -->
       <scroll class="content" ref="scroll" :probeType="3" :pull-up-load="true"
        @currentPosition="currentPosition" @pullingUp="LoadMore">
           <home-swiper :banners="banners"></home-swiper>
       <home-recommend :recommend="recommend1"></home-recommend>
        <fashion-views></fashion-views>
                       <tab-control :titles="['流行','新款','热销']" class="tab-control" @tabClick="tabClick"></tab-control>
       <goods-list :list="showGoods" :LoadEnd=LoadEnd></goods-list>
       </scroll>
   </div>
</template>

<script>
import {getHomedata,getGooddata} from 'network/home.js'
import BScroll from 'better-scroll'

import NavBar from 'components/common/navbar/NavBar.vue'
import BackTop from 'components/content/backtop/BackTop.vue'

import GoodsList from 'components/content/goods/GoodsList.vue'

import Scroll from "components/common/scroll/Scroll.vue"
import TabControl from 'components/content/tabControl/TabControl'

import HomeRecommend from './childcompoents/HomeRecommend'
import HomeSwiper from './childcompoents/HomeSwiper'
import FashionViews from './childcompoents/FashionView'
export default {
    name:'home',
    data() {
        return {
            banners:[],
            recommend1:[],
            goods:{
                'pop':{page:0,list:[]},
                "new":{page:0,list:[]},
                'sell':{page:0,list:[]}  
            },
            currentType:'pop',
            backIsShow:false,
            LoadEnd:false
        }
    },
    components:{
        NavBar,
        HomeSwiper,
        HomeRecommend,
        FashionViews,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
    },
    created() {
         this.getHomedata()
         this.getGooddata('new')
         this.getGooddata('pop')
         this.getGooddata('sell')
    },
    methods:{
        getHomedata(){
            getHomedata().then(res=>{
                // console.log(res)
                this.banners=res.data.banner.list
                this.recommend1=res.data.recommend.list
                
            })
        },
        getGooddata(type){
            const page =this.goods[type].page+1
            getGooddata(type,page).then(res=>{
                 this.goods[type].list.push(...res.data.list)
                 this.goods[type].page+=1
                 this.$refs.scroll.finishPullUp()
            })
        },
        tabClick(index){
            switch (index){
                case 0:
                    this.currentType='pop'
                    break
                case 1:
                    this.currentType="new"
                    break
                case 2:
                    this.currentType="sell"
                    break
            }
        },
        backClick(){
            this.$refs.scroll.scroll.scrollTo(0,0,500)
        },
        currentPosition(position){
            // console.log(position.y)
            if(-position.y>1000){
                this.backIsShow=true
            }else{
                this.backIsShow=false
            }   
        },
        LoadMore(){
            this.getGooddata(this.currentType)
            this.$refs.scroll.scroll.refresh()
            this.LoadEnd=true
        },
        
    },
    computed:{
        showGoods(){
            return this.goods[this.currentType].list
        }
    }
}
</script>

<style scoped>
#home{
    padding-top: 44px;
    /* position: relative; */
    overflow: scroll;
    height: 100vh;
}
.nav-home{
    background-color: rgb(189, 138, 163);
}
.tab-control{
    /* position: sticky; */
    /* top: 44px;  */
}
.content{
    position: absolute;
    top: 44px;
    bottom: 59px;
    left: 0;
    right: 0;
    overflow: hidden;
    /* margin-top: 44px; */
}
</style>