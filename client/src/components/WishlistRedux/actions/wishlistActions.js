
import {ADD_TO_WISHLIST, DELETE_FROM_WISHLIST, FETCH_WISHLIST_REQUEST,FETCH_WISHLIST_SUCCESS,  FETCH_WISHLIST_FAILURE} from './action-types/wishlist-actions'
export const addToWishlist=(id)=>{

return async (dispatch) => {
  dispatch(fetchWishlistRequest())
  try{
    const response = await fetch("http://localhost:5000/api/songs/wishlist/u1/s1", 
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
      alert("Added to the Wishlist!!");
      dispatch({ type:ADD_TO_WISHLIST,payload:response.json})

} catch (err){
  alert(err)
    console.log(err);
   dispatch(fetchWishlistFailure(err.message))
}
  
}

}
export const deleteFromWishlist=(id)=>{
return async (dispatch) => {
  dispatch(fetchWishlistRequest())
  try{
    const response = await fetch("http://localhost:5000/api/songs/wishlist/u1/s1", 
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
     alert("Deleted from wishlist!!");
    //  console.log(cartList)
    //  alert("ok")
      dispatch({ type:DELETE_FROM_WISHLIST,id})

} catch (err){
  alert(err)
    console.log(err);
   dispatch(fetchWishlistFailure(err.message))
}
  
}

}

const fetchWishlistRequest = () => {
  return {
    type: FETCH_WISHLIST_REQUEST
  }
}

const fetchWishlistSuccess = wishlist => {
  return {
    type: FETCH_WISHLIST_SUCCESS,
    payload: wishlist
  }
}

const fetchWishlistFailure = error => {
  return {
    type: FETCH_WISHLIST_FAILURE,
    payload: error
  }
}

export const fetchWishlist =  () => {
return async (dispatch) => {
  dispatch(fetchWishlistRequest())
  try{
    const response = await fetch("http://localhost:5000/api/songs/wishlist/5ff9b0c99189ae146cb32401", 
    {method: 'GET',
     headers: {
     'Content-Type' : 'application/json'
    }})

    const wishlist = await response.json()
    // alert(cartList)
      console.log("in fetchwishlist"+wishlist)
    //  alert("ok")
      dispatch(fetchWishlistSuccess(await wishlist))

} catch (err){
  alert(err)
    console.log(err);
   dispatch(fetchWishlistFailure(err.message))
}
  
}
}

