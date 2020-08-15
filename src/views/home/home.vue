<template>
   <div id="home">
       <nav-bar class="nav-home">
           <span slot="middle">蘑菇街</span>
       </nav-bar>
       <home-swiper :banners="banners"></home-swiper>
       <home-recommend :recommend="recommend"></home-recommend>
   </div>
</template>

<script>
import {getHomedata} from 'network/home.js'
import HomeRecommend from './childcompoents/HomeRecommend'
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childcompoents/HomeSwiper'
export default {
    name:'home',
    data() {
        return {
            banners:[],
            recommend:[]
        }
    },
    components:{
        NavBar,
        HomeSwiper,
        HomeRecommend
    },
    created() {
         this.getHomedata()
    },
    methods:{
        getHomedata(){
            getHomedata().then(res=>{
                console.log(res)
                this.banners=res.data.banner.list
                this.recommend=res.data.recommend.list
                
            })
        }
    }
}
</script>

<style>
.nav-home{
    background-color: rgb(189, 138, 163);
}
</style>