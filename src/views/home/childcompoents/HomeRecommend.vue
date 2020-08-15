<template>
    <div class="recommend">
        <ul class="home-recommend">
            <li v-for="item in recommend">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                    {{item.title}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        recommend:{
            type:Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
.recommend{
    box-shadow: 0px 5px 3px 3px rgb(223, 221, 214);
    padding: 20px 0;
    margin-bottom: 10px;

}
.home-recommend{
    display: flex;
    height: 100px;
    list-style: none;
}
.home-recommend img{
    
    width: 100%;;
}
.home-recommend a{
    font-size: 12px;
    color: rgb(48, 46, 46);
    margin: 0 5px;
    display: block;
    flex: 1;
    text-decoration: none ;
    color: rgb(223, 153, 153);
    text-align: center ;
    
}

</style>