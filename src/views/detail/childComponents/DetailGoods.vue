<template>
    <div class="detail-goods" v-if="Object.keys(goods).length !== 0">
        <p class="goods-title">{{goods.title}}</p>
        <div class="price">
            <span class="highNowPrice">￥{{goods.lowNowPrice}} </span>
            <span class="highPrice">￥{{goods.oldPrice}}</span>
            <span class="discountDesc">{{goods.discountDesc}}</span>
        </div>
        <div class="other-info">
			<div>{{goods.columns[0]}}</div>
			<div>{{goods.columns[1]}}</div>			
			<div>{{goods.services[goods.services.length-1].name}}</div>
		</div> 
     <div class="serves-wrap">
			<div v-for="index in goods.services.length-1" :key="index"> 
				<img :src="goods.services[index-1].icon" alt=""> 
				{{goods.services[index-1].name}}
			</div>
		</div>
	</div>
    </div>
</template>

<script>
export default {
    props:{
        goods:{
            type:Object,
        }
    }
}
</script>

<style>
.goods-title{
    padding: 10px 2px;
    font-size:14px ;


}
.highNowPrice{
    
    font-size: 20px;
    color: palevioletred;
}
.highPrice{
    font-size:14px ;
    display: inline-block;
    text-decoration: line-through;
}
.discountDesc{
    display: inline-block;
    /* box-shadow: aquamarine 3px ; */
    /* width: 100px; */
    height: 15px;
    line-height: 15px;
    font-size: 12px;
    /* bordpxr: 1px solid; */
    border-radius: 8px;
    background:palevioletred ;
    margin-left:20px ;
    padding: 2px 4px;  
}
.other-info{
    color: grey;
    margin-top:10px;
    display:flex;
    height: 18px;
    padding-bottom: 10px;
    border-bottom: 2px solid #ededed;	

    /* box-shadow:0px 3px 3px 3px rgb(26, 20, 1) ; */
}
.other-info div,.service div{
    flex: 1;
    display: block;
    padding: 0 10px;
}
.other-info :nth-last-child(1){
    float: right;
    text-align: right;
}
.other-info:first-child{
    float: left;
    text-align: left;
}
.other-info:nth-child(2){
    text-align: center;
}

.serves-wrap {
		display: flex;
		font-size: 12px;
		color: #333;
		padding: 10px 4px;
		justify-content: space-between;
		border-bottom: 4px solid #ededed;	
	}
.serves-wrap img{
    		width: 12px;
			height: 12px;
			vertical-align: middle;
		
}


</style>