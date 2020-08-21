import {request} from './request'
export function getDetailData(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}
export function getDataRecommend(){
    return request({
        url:'/recommend'
    })
}
export class Goods{
    constructor(itemInfo, columns, shopInfo){
        this.title = itemInfo.title;
		this.price = itemInfo.price;
		this.oldPrice = itemInfo.oldPrice;
		this.lowNowPrice = itemInfo.lowNowPrice;
		this.discountDesc = itemInfo.discountDesc;
		this.columns = columns;
		this.services = shopInfo.services;
    }
}
export class Shop{
    constructor(shopInfo){
        this.logo=shopInfo.shopLogo
        this.name=shopInfo.name
        this.fans=shopInfo.cFans
        this.cSells=shopInfo.cSells
        this.score=shopInfo.score
        this.cGoods=shopInfo.cGoods
    }
}

export class GoodsParam{
    constructor(info,rule){
        this.image =info.image?info.image[0]:','
        this.infos=info.set
        this.rule=rule.tables
    }
}