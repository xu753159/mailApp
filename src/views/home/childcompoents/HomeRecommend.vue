<template>
    <div>
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
.home-recommend{
    padding: 10px 0;
    display: flex;
    height: 100px;
    list-style: none;
    box-shadow: 0px 5px 3px 3px rgb(223, 221, 214);
}
.home-recommend img{
    width: 100%;;
}
.home-recommend a{
    margin: 0 5px;
    display: block;
    flex: 1;
    text-decoration: none ;
    color: rgb(223, 153, 153);
    text-align: center ;
    
}

</style>