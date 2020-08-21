<template>
    <div class="goods">
        <goods-item :goods="item" v-for="item in list" class="goods-control-item"></goods-item>
        <p v-show="LoadEnd">上滑加载更多</p>
    </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
    components:{
        GoodsItem
    },
    props:{
        list:{
            type:Array,
            default(){
                return []
            }
        },
        LoadEnd:{
            type:Boolean,
            default(){
                return false
            }
        }
    },
    computed: {
        
    },
}
</script>

<style>
.goods{
    overflow: scroll;
    display: flex;
    position: relative;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    /* height: 1000px; */
    /* flex: 8; */
   
    /* display: flex; */
}
.goods-control-item{
    padding-left: 3px; 
    padding-right: 3px; 
    width: 48%;
    /* width: 50%; */
    /* flex: 1; */
}
</style>