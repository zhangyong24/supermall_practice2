import request from "./request.js"
export function detailData(iid){
  return request({
    url:'/detail/',
    params:{
      iid
    }
  })
}  