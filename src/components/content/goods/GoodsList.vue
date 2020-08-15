<template>
    <div class="goods">
        <goods-item :goods="item" v-for="item in list" class="goods-control-item"></goods-item>
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
        }
    }
}
</script>

<style>
.goods{
    overflow: hidden;
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
   
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