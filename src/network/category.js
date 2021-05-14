import request from "./request.js"
export function getCategoryData(){
  return request({
    url:'/category'
   
  })
} 
export function getSubCategoryData(maitKey){
  return request({
    url:'/subcategory',
    params:{
        maitKey
    }
   
  })
} 

