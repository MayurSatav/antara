import {ADD_TO_CART, DELETE_FROM_CART, FETCH_CART_REQUEST,
    FETCH_CART_SUCCESS,
    FETCH_CART_FAILURE} from './action-types/Cart-actions'
export const addToCart=(id)=>{
  
  return async (dispatch) => {
    dispatch(fetchCartRequest())
    try{
      const response = await fetch("http://localhost:5000/api/songs/cart/u1/s1", 
      {method: 'POST',
       headers: {
       'Content-Type' : 'application/json'
      },
      body:JSON.stringify({
        songid:id,
        userid:'5ff9b0c99189ae146cb32401'
      })
    })
  
      //alert("op"+response.json());
      // alert(cartList)
      //  console.log(cartList)
        alert("Added to the Cart!!");
        dispatch({ type:ADD_TO_CART,payload:response.json})
  
  } catch (err){
    alert(err)
      console.log(err);
     dispatch(fetchCartFailure(err.message))
  }
    
  }
 
}
export const deleteFromCart=(id)=>{
  return async (dispatch) => {
    dispatch(fetchCartRequest())
    try{
      const response = await fetch("http://localhost:5000/api/songs/cart/u1/s1", 
      {method: 'DELETE',
       headers: {
       'Content-Type' : 'application/json'
      },
      body:JSON.stringify({
        songid:id,
        userid:'5ff9b0c99189ae146cb32401'
      })
    })
  
     // alert("op"+response.json());
       alert("Deleted from cart!!");
      //  console.log(cartList)
      //  alert("ok")
        dispatch({ type:DELETE_FROM_CART,id})
  
  } catch (err){
    alert(err)
      console.log(err);
     dispatch(fetchCartFailure(err.message))
  }
    
  }
 
}

 
  const fetchCartRequest = () => {
    return {
      type: FETCH_CART_REQUEST
    }
  }
  
  const fetchCartSuccess = cartList => {
    return {
      type: FETCH_CART_SUCCESS,
      payload: cartList
    }
  }
  
  const fetchCartFailure = error => {
    return {
      type: FETCH_CART_FAILURE,
      payload: error
    }
  }
  
  export const fetchCart =  () => {
  return async (dispatch) => {
    dispatch(fetchCartRequest())
    try{
      const response = await fetch("http://localhost:5000/api/songs/cart/5ff9b0c99189ae146cb32401", 
      {method: 'GET',
       headers: {
       'Content-Type' : 'application/json'
      }})
  
      const cartList = await response.json()
      // alert(cartList)
        console.log(cartList)
      //  alert("ok")
        dispatch(fetchCartSuccess(await cartList))
  
  } catch (err){
    alert(err)
      console.log(err);
     dispatch(fetchCartFailure(err.message))
  }
    
  }
  }