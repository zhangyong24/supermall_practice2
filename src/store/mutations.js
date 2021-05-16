export default {
  countAdd(state,payload){
    payload.count++
  },
  newPush(state,payload){
    state.cartList.push(payload)
  }
  
}