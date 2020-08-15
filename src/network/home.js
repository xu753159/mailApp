import {request} from './request'
export function getHomedata(){
    return request({
        url:'/home/multidata',
    })
}
export function getGooddata(type,page){
    return request({
        url:'/home/data',
        params:{
            type:type,
            page:page
        }
        
    })
}