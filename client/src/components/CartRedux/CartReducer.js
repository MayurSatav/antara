
import { ADD_TO_CART,DELETE_FROM_CART,ADD_PL_TO_CART,DELETE_PL_FROM_CART, FETCH_CART_REQUEST,FETCH_CART_SUCCESS,FETCH_CART_FAILURE} from './actions/action-types/Cart-actions'
const initState = {
    loading: false,
    cartList : [],
    error: '',
    total:0
}

const CartReducer = (state = initState, action) => {
    switch (action.type) {
      case FETCH_CART_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_CART_SUCCESS:{
        let list=action.payload;
        let newtotal=0;
        list.map(song=>{
          newtotal+=song.Price;
        })
        return {
          loading: false,
          cartList: action.payload,
          error: '',
          total:newtotal
        }
      }
      case FETCH_CART_FAILURE:
        return {
          loading: false,
          cartList: [],
          error: action.payload
        }
      case ADD_TO_CART:{
        return{
          ...state,
          cartList: [action.payload, ...state.cartList],
        }
      }
      case DELETE_FROM_CART:{
        return{
          ...state,
          cartList: state.cartList.filter((song) => song.SongId !== action.id),
      }
      }
      default: return state
    }
  }

export default CartReducer
