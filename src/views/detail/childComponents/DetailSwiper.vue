<template>
    <div class="detail-swiper">
        <swiper class="detail-swiper-content">
            <swiper-item v-for="item in topImages" >
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/content/swiper/index'
export default {
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style  scoped>
.detail-swiper-content{
        height: 300px;
        width: 100%;
        overflow: hidden;
    }
</style>>
