<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" @click="changeActive(index)" class="tab-control-item">
            <span :class="{tabactive:index===currentIndex}">{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'tabcontrol',
    data() {
        return {
            currentIndex:0
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        changeActive(index){
            this.currentIndex=index
            this.$emit("tabClick",index)
        }
    }
}
</script>

<style>
.tab-control{
    position: relative;
    display: flex;
    font-size: 14px;
    background-color: #fff;
    

}
.tab-control-item{
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
}
.tabactive{
    color: palevioletred;
    border-bottom:3px solid palevioletred;
}
</style>