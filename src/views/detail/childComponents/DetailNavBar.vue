<template>
    <div id="detail-nav-bar">
        <nav-bar>
            <div slot="left" @click="backClick" >
                <img src="~assets/img/detail/back.png" alt="">
                <!-- <img src="~assets/img/detail/back(1).png" alt="" v-show="false"> -->
                </div>
            <div slot="middle" class="detail-control-bar">
                <span v-for="(item,index) in titles" @click="ItemClick(index)" :class="{ItemActive:index==currentIndex}">{{item}}</span>
            </div>
        </nav-bar>
    </div>
</template>

<script>
import Tabcontrol from 'components/content/tabControl/TabControl.vue'
import NavBar from "components/common/navbar/NavBar.vue"
export default {
    components:{
        NavBar,
        Tabcontrol
    },
    data() {
        return {
            titles:["商品","参数","名称","推荐"],
            currentIndex:0
        }
    },
    methods: {
        ItemClick(index){
            this.currentIndex=index
        },
        backClick(){
            this.$router.back()
        }
    },
}
</script>

<style>
.detail-control-bar{
    display: flex;
    
}
.detail-control-bar span{
    flex: 1;
    font-size: 12px;
}
.ItemActive{
    color: palevioletred;
    border-bottom:3px solid palevioletred;
}

</style>