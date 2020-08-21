<template>
    <div id="detail" ref="scroll">
        <detail-nav-bar class="detail-bar"></detail-nav-bar>
         <scroll class="content" ref="scroll">
            <detail-swiper :topImages="topImages"></detail-swiper>
            <detail-goods :goods="goods" ></detail-goods>
            <detail-shop :shop="shop"></detail-shop>
            <detail-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-info>  
            <detail-param-info :paramInfo="GoodsParam"></detail-param-info>
            <detail-comment :commentInfo="CommentInfo"></detail-comment>
            <goods-list :list="recommend"></goods-list>
        </scroll>            
    </div>
</template>

<script>
import {debounce} from 'components/common/utils.js'
import GoodsList from 'components/content/goods/GoodsList.vue'
import DetailComment from './childComponents/DetailComment'
import DetailGoods from "./childComponents/DetailGoods"
import DetailSwiper from "./childComponents/DetailSwiper"
import DetailShop from "./childComponents/DetailShop"
import {getDetailData,getDataRecommend,Shop,Goods,GoodsParam} from "network/detail"
import DetailNavBar from './childComponents/DetailNavBar'
import DetailInfo from "./childComponents/DetailInfo"
import DetailParamInfo from "./childComponents/DetailParamInfo"
import Scroll from "components/common/scroll/Scroll"
export default {
    data() {
        return {
            iid:null,
            topImages:[],
            shop:{},
            goods:{},
            detailInfo:{},
            GoodsParam:{},
            CommentInfo:[],
            recommend:[],
            itemImgListener:null
            }
    },
    created() {
        this.iid=this.$route.params.iid
        getDetailData(this.iid).then(res=>{
            console.log(res.result.shopInfo)
            this.topImages=res.result.itemInfo.topImages
            this.shop =new Shop(res.result.shopInfo)
            this.goods=new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo)
            this.detailInfo=res.result.detailInfo
            this.GoodsParam=new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)
            if(res.result.rate.cRate!==0){
                this.CommentInfo=res.result.rate.list
            }
            })

        getDataRecommend().then(res=>{
            console.log(res.data)
            this.recommend=res.data.list
        })
    },
    
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailGoods,
        DetailShop,Scroll,
        DetailInfo,
        DetailParamInfo,
        DetailComment,
        GoodsList
    },
    methods:{
        imageLoad(){
            this.$refs.scroll.refresh()
        }
    },
    mounted(){
        const refresh =debounce(this.$refs.scroll.refresh,500)
        this.itemImgListener=()=>{
            refresh()
        }
        this.$bus.$on("itemImgLoad",this.itemImgListener)
    },
    deactivated() {
        console.log("xxxx")
    },
    destroyed() {
        console.log("XXXxxxxxxx")
        this.$bus.$off("itemImgLoad",this.itemImgListener)

    },
}
</script>

<style scoped> 
#detail{
    background:#fff;
    position: relative;
    z-index: 99999;
    height: 100vh;
}
.content{
    position: absolute;
    top: 44px;
    bottom: 0px;
    left: 0px;
    right: 0px
}
.detail-bar{
    position: relative;
    background: #fff;
    z-index: 99;
}
</style>