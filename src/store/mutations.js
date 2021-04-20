export default {
  countAdd(state,oldCount){
    oldCount.count = oldCount.count + 1
  },
  newPush(state,product){
    product.count = 1
    product.checked = true
    state.cartList.push(product)
  }
  
}