import {
    FETCH_WISHLIST_REQUEST,
      FETCH_WISHLIST_SUCCESS,
      FETCH_WISHLIST_FAILURE
      } from './action-types/wishlist-actions';
    
    const fetchWishlistRequest = () => {
      return {
        type: FETCH_WISHLIST_REQUEST
      }
    }
    
    const fetchWishlistSuccess = wishlistList => {
      return {
        type: FETCH_WISHLIST_SUCCESS,
        payload: wishlistList
      }
    }
    
    const fetchWishlistFailure = error => {
      return {
        type: FETCH_WISHLIST_FAILURE,
        payload: error
      }
    }
    export const addToWishlist=()=>{
      
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
    
        const wishlistList = await response.json()
        alert(wishlistList)
          console.log(wishlistList)
          alert("ok")
          dispatch(fetchWishlistSuccess(await wishlistList))
    
    } catch (err){
      alert(err)
        console.log(err);
       dispatch(fetchWishlistFailure(err.message))
    }
      
    }
    }