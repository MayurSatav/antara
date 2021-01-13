
import { ADD_TO_WISHLIST,DELETE_FROM_WISHLIST, FETCH_WISHLIST_REQUEST,FETCH_WISHLIST_SUCCESS,FETCH_WISHLIST_FAILURE} from './actions/action-types/wishlist-actions';
const initState = {
    loading: false,
    wishlist : [],
    error: ''
}

const WishlistReducer = (state = initState, action) => {
    switch (action.type) {
      case FETCH_WISHLIST_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_WISHLIST_SUCCESS:{
        console.log("in success "+action.payload)
        return {
          loading: false,
          wishlist: action.payload,
          error: ''
        }
      }
      case FETCH_WISHLIST_FAILURE:
        return {
          loading: false,
          wishlist: [],
          error: action.payload
        }
      case ADD_TO_WISHLIST:{
        return{
          ...state,
          wishlist: [action.payload, ...state.wishlist],
        }
      }
      case DELETE_FROM_WISHLIST:{
        return{
          ...state,
          wishlist: state.wishlist.filter((song) => song.SongId !== action.id),
      }
      }
      default: return state
    }
  }

export default WishlistReducer




