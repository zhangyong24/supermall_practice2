
export default {
  AaddCart(context,product){
    return new Promise(function(resolve){
      const oldCount = context.state.cartList.find( item => item.iid === product.iid)
      if(oldCount){
        context.commit("countAdd",oldCount)
        resolve('商品+1')
      }else{
        context.commit("newPush",product)
        resolve('添加新商品')
      }


    })
   
    
  }
}
