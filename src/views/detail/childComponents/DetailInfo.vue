<template>
    <div class="detail-info" v-if="Object.keys(detailInfo).length!==0">
        <div class="description">
            <p>{{detailInfo.desc}}</p>
        </div>
        <div class="detail-info-img">
            <img :src="item" alt="" v-for="item in detailInfo.detailImage[0].list" @load="imgLoad">
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailInfo',
    props:{
        detailInfo:{
            type:Object,
        }
    },
    data() {
        return {
            counter:0,
            imagesLength:null
        }
    },
    methods:{
        imgLoad(){
            console.log("xx1")
            if(++this.counter==this.imagesLength){
                this.$emit("imageLoad")
            }
        }
    },
    watch:{
        detailInfo(){
            this.imagesLength=this.detailInfo.detailImage[0].list.length
        }
    }
}
</script>

<style>
.detail-info-img img{
    width: 100%;
}
</style>