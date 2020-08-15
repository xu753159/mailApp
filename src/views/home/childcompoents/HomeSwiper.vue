<template>
    <div>
        <swiper>
            <swiper-item v-for="item in banners">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </swiper-item>
        </swiper>

    </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/content/swiper/index'
// import getHomedata from 'network/home.js'
export default {
    name:'HomeSwiper',
    components:{
        Swiper,SwiperItem
    },
    props:{
        banners:{
            type :Array,
            default() {
                return []
            }
        }
    },
    
    // methods:{
    //     imgLoad(){
    //         if(!this.isLoad){
    //             this.$emit("swiperImgLoad")
    //             this.isLoad=true
    //         }
    //     }
    // }
    
}
</script>

<style>

</style>