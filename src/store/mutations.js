export default {
  countAdd(state,payload){
    payload.count++
  },
  newPush(state,payload){
    state.cartList.push(payload)
  },
  selectActive(state){
    state.cartList.forEach(item => item.checked = false)

  },
  allSelectActive(state){
    state.cartList.forEach(item => item.checked = true)
  
  }
 
}