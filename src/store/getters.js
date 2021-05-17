export default {
  getLength(state){
    return state.cartList.length

  },
  getList(state){
    return state.cartList

  },
  getPrice(state){
    const newPrice = state.cartList.filter( item => item.checked)
    .reduce((pre,item) => pre +  item.count * item.realPrice,0).toFixed()
    return newPrice
  },
  getCount(state){
    const selectLength = state.cartList.filter( item => item.checked)
     .reduce((pre,item) => pre + item.count,0)
     return selectLength
  },
  getActive(state){
    if(state.cartList.length === 0){
      return false
    }else{
      return state.cartList.filter( item => item.checked === true).length === state.cartList.length 
    }
  },
  getCalculateNow(state){
    return state.cartList.filter( item => item.checked === true).length === 0
  }
}