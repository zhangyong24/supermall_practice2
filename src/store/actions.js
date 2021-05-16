
export default {
  AaddCart(context,payload){
    return new Promise(function(resolve){
      const oldCount = context.state.cartList.find( item => item.iid === payload.iid)
      if(oldCount){
        context.commit("countAdd",payload)
        resolve('商品+1')
      }else{
        context.commit("newPush",payload)
        resolve('添加新商品')
      }


    })
   
    
  }
}
