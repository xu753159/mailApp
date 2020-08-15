<template>
   <div id="home">
       <nav-bar class="nav-home">
           <span slot="middle">蘑菇街</span>
       </nav-bar>
       <home-swiper :banners="banners"></home-swiper>
       <home-recommend :recommend="recommend1"></home-recommend>
       <fashion-views></fashion-views>
       <tab-control :titles="['流行','新款','精选']" class="tab-control"></tab-control>
       <goods-list :list="goods['pop'].list"></goods-list>
       
   </div>
</template>

<script>
import {getHomedata,getGooddata} from 'network/home.js'

import NavBar from 'components/common/navbar/NavBar.vue'

import GoodsList from 'components/content/goods/GoodsList.vue'

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
            }
        }
    },
    components:{
        NavBar,
        HomeSwiper,
        HomeRecommend,
        FashionViews,
        TabControl,
        GoodsList
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
            })
        }
    }
}
</script>

<style>
#home{
    padding-top: 44px;
}
.nav-home{
    background-color: rgb(189, 138, 163);
}
.tab-control{
    position: sticky;
    top: 44px;
}
</style>