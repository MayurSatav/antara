
import {  DELETE_FROM_WISHLIST,ADD_TO_WISHLIST, FETCH_WISHLIST_REQUEST,
    FETCH_WISHLIST_SUCCESS,
    FETCH_WISHLIST_FAILURE} from './actions/action-types/wishlist-actions'
const initState = {
    loading: false,
    wish : [],
    error: ''
}

const Wishlistreducer = (state = initState, action) => {
    switch (action.type) {
      case FETCH_WISHLIST_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_WISHLIST_SUCCESS:
        return {
          loading: false,
          wish: action.payload,
          error: ''
        }
      case FETCH_WISHLIST_FAILURE:
        return {
          loading: false,
          wish: [],
          error: action.payload
        }
        case ADD_TO_WISHLIST:{
          return{
            ...state,
            wish: [action.payload, ...state.wish],
          }
        }
        case DELETE_FROM_WISHLIST:{
          return{
            ...state,
            wish: state.wish.filter((song) => song.SongId !== action.id),
        }
      }
        default: return state
    }
  }


  
export default Wishlistreducer;


//const Wishlistreducer=(state=initState,action)=>{
//     if(action.type === ADD_TO_CART){
//         let SongToBeAdded = state.songs.find(song=> song.id === action.id)
//         //check if the action id exists in the addedItems
//        let existed_song= state.SongList.find(song=> action.id === song.id)
//        if(!existed_song)
//        {
//         let newTotal = state.total + SongToBeAdded.price ;
//         alert ("Song Added to cart ");
//         return{
//             ...state,
//             SongList: [...state.SongList, SongToBeAdded],
//             total : newTotal
//         }
//       }
//     //    else{
//     //  //   alert("in cardReducer else");
//     //     SongToBeAdded.quantity = 1;
//     //       //calculating the total
//     //       let newTotal = state.total + SongToBeAdded.price 
//     //       alert ("Song Added to cart");
//     //       return{
//     //           ...state,
//     //           SongList: [...state.SongList, SongToBeAdded],
//     //           total : newTotal
//     //       }
          
//     //   }
//   }
//   else if(action.type === DELETE_FROM_CART){
//     let itemToRemove= state.SongList.find(item=> action.id === item.id)
//     let new_items = state.SongList.filter(item=> action.id !== item.id)
    
//     //calculating the total
//     let newTotal = state.total - itemToRemove.price 
//     console.log(itemToRemove)
//     alert ("Song removed from cart");
//     return{
//         ...state,
//         SongList: new_items,
//         total: newTotal
//     }
// }else if(action.type===ADD_PL_TO_CART){
//     let playlistToBeAdded= state.playlist.find(pl=> pl.id === action.id)
//         let existed_pl= state.PlayListCart.find(pl=> action.id === pl.id)
//        if(!existed_pl){

//          let newTotal = state.total + playlistToBeAdded.price ;
//           alert ("Playlist Added to cart ");
//           return{
//               ...state,
//               PlayListCart: [...state.PlayListCart, playlistToBeAdded],
//               total : newTotal
//           }
          
//       }
//       else{
//           alert("Already in cart")
//           return state
//       }
// }
// else if(action.type === DELETE_PL_FROM_CART){
//     let playlistToRemove= state.PlayListCart.find(pl=> action.id === pl.id)
//     let new_items = state.PlayListCart.filter(pl=> action.id !== pl.id)
    
//     //calculating the total
//     let newTotal = state.total - playlistToRemove.price 
//     //console.log(itemToRemove)
//     alert ("PlayList removed from cart"+newTotal);
//     return{
//         ...state,
//         PlayListCart: new_items,
//         total: newTotal
//     }
// }else
//   if(action.type === ADD_TO_WISHLIST){
//     let SongToBeAdded = state.songs.find(song=> song.id === action.id)
//     //check if the action id exists in the addedItems
//    let existed_song= state.WishList.find(song=> action.id === song.id)
//    if(!existed_song)
//    {
    
//     alert ("Song Added to Wishlist ");
//     return{
//         ...state,
//         WishList: [...state.WishList, SongToBeAdded],
//     }
//   }
// }
// else if(action.type === DELETE_FROM_WISHLIST){
//     let itemToRemove= state.WishList.find(item=> action.id === item.id)
//     let new_items = state.WishList.filter(item=> action.id !== item.id)
   
//     console.log(itemToRemove)
//     alert ("Song removed from Wishlist");
//     return{
//         ...state,
//         WishList: new_items
//     }
// }
//   else{
//       return state
//   }
// }












/*
//SongsInCart-------whole list of songs in cart for user
let cartList = this.props.SongsInCart.length ?
(  
    
    this.props.SongsInCart.map(song=>{
        return(
            <tr>
            <th scope="row" class="border-0">
            <div class="p-2">
                {song.img}
                <div class="ml-3 d-inline-block align-middle">
                <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">{song.title}</a></h5><span class="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
                </div>
            </div>
            </th>
            <td class="border-0 align-middle"><strong>{song.price}</strong></td>
            <td class="border-0 align-middle"><strong>{song.playlist}</strong></td>
            <td class="border-0 align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a></td>
        </tr>
                                     
        )
    })
):

 (
    <p>Nothing.</p>
 )*/