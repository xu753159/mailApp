<template>
    <div class="goods-items" >
        <a :href="Goodlink">
            <img :src="showImg" alt="" @load="imageLoad">
            <p>{{goods.title}}</p>
            <span>￥{{goods.price}}</span>
            <span>%{{goods.cfav}}</span>
        </a>    
    </div>
</template>

<script>
export default {
    props:{
        goods:{
            type:Object,
            default(){
                return  {}
            }
        }, 
    },
    computed: {
       showImg(){
				return  this.goods.image || this.goods.show.img ;
			}
    },
    data() {
        return {
            Goodlink:'/detail/'+this.goods.iid
        }
    },
    methods:{
        imageLoad(){
            this.$bus.$emit("itemImageLoad")
        },
        DetailRequest(){
            this.$router.push()
        }
    }
}
</script>

<style>

.goods-items a{
    overflow: hidden;
    text-align: justify;
    font-size: 12px;
    /* text-align: center; */
    padding-bottom: 15px;
    width: 100%;
    display: block;
    text-decoration: none;
    color:rgb(158, 152, 152)

}
.goods-items a p{
    height: 12px;
    line-height: 12px;
    width: 100%;
    overflow: hidden;

}
.goods-items a span{
    display: block;
    width: 50%;
    float: left;
    font-size:16px;
    color: #d8add6;
    text-align: center;
}
.goods-items a :nth-child(4){
    text-align: left;
}

.goods-items a img{
    display: block;
    padding-bottom:10px ;
    width: 100%;
    border-radius: 10px;
    height: 100%;

}
</style>