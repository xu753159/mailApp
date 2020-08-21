<template>
    <div id="detail">
        <detail-nav-bar class="detail-bar" @titleClick="titleClick" ref="nav" ></detail-nav-bar>
         <scroll class="content" 
         ref="scroll"
          @currentPosition="contentScroll" 
          :probe-type="3">
            <detail-swiper :topImages="topImages"></detail-swiper>
            <detail-goods :goods="goods" ></detail-goods>
            <detail-shop :shop="shop"></detail-shop>
            <detail-info :detailInfo="detailInfo" @imageLoad="imageLoad" ref="detailInfo"></detail-info>  
            <detail-param-info :paramInfo="GoodsParam" ref="paramInfo"></detail-param-info>
            <detail-comment :commentInfo="CommentInfo" ref="commnetInfo"></detail-comment>
            <goods-list :list="recommend" ref="recommend"></goods-list>
        </scroll>     
         <back-top @click.native="backClick" v-show="backIsShow"></back-top>
        <detail-bottom-bar></detail-bottom-bar>
    </div>
</template>

<script>
import backTop from 'components/content/backtop/BackTop'
import {debounce} from 'components/common/utils.js'
import DetailBottomBar from './childComponents/DetailBottomBar'
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
            backIsShow:false,
            topImages:[],
            shop:{},
            goods:{},
            detailInfo:{},
            GoodsParam:{},
            CommentInfo:[],
            recommend:[],
            itemImgListener:null,
            themeTopY:[],
            currentIndex:0
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
            this.$nextTick(()=>{
                // this.themeTopY=[]
                // this.themeTopY.push(0)
                // this.themeTopY.push(this.$refs.paramInfo.$el.offsetTop)
                // this.themeTopY.push(this.$refs.commnetInfo.$el.offsetTop)
                // this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
                // console.log(this.themeTopY)
            })
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
        GoodsList,
        DetailBottomBar,
        backTop
    },
    methods:{
        imageLoad(){
            this.$refs.scroll.refresh()
            this.themeTopY=[]
            this.themeTopY.push(0)
            this.themeTopY.push(this.$refs.paramInfo.$el.offsetTop)
            this.themeTopY.push(this.$refs.commnetInfo.$el.offsetTop)
            this.themeTopY.push(this.$refs.recommend.$el.offsetTop)

        },
        titleClick(index){
            this.$refs.scroll.scrollTo(0,-this.themeTopY[index],100)
        },
        contentScroll(position){
            this.isShowBackTop = (-position.y) > 500;
				const positionY = -(position.y);
				let _lenth = this.themeTopY.length;
				for(let i=0; i<_lenth-1; i++){
					if(this.currentIndex !== i && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1])){
                        this.currentIndex = i;
                        console.log(i)
						this.$refs.nav.currentIndex = this.currentIndex;
					}
                }
            if(-position.y>1000){
                this.backIsShow=true
            }else{
                this.backIsShow=false
            }
        },
        backClick(){
            this.$refs.scroll.scroll.scrollTo(0,0,500)
        },
    },
    updated(){
        
    },
    mounted(){
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