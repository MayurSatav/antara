import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {fetchWishlist,deleteFromWishlist} from './WishlistRedux/actions/wishlistActions'


export class Wishlist extends React.Component{
    handleDelete=(id)=>{
        this.props.deleteFromWishlist(id);
    } 
  
    componentDidMount(){
        this.props.fetchWishlist()
    }
      render(){ 
      const wishlistsongs = this.props.wishlistState.wishlist.length ?
         ( 
            this.props.wishlistState.wishlist.map(song=>{
                return(
                    <tr>
                    <th scope="row" class="border-0">
                    <div class="p-2">
                    <img src={song.SongPath} alt="Song3" width="70" class="img-fluid rounded shadow-sm"/>
                        <div class="ml-3 d-inline-block align-middle">
                        <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">{song.SongName}</a></h5><span class="text-muted font-weight-normal font-italic d-block">{song.Genres}</span>
                        </div>
                    </div>
                    </th>
                    <td>
                            <audio id="player" src={song.AudioPath} controls controlsList="nodownload"></audio>
                    </td>
                    <td class="border-0 align-middle"><strong>{song.Price}</strong></td>
                    <td class="border-0 align-middle"><strong>{song.Album}</strong></td>
                    <td class="border-0 align-middle" onClick={()=>{this.handleDelete(song.SongId)}}><a href="#" class="text-dark"><i class="fa fa-trash"  ></i></a></td>
                </tr>
                                             
                )
               
            })
        ):
        
         (
            // <p>Nothing.</p>
            <p>Nothing</p>
         ); 
        return (
            <div>

                    <div class="container-fluid"> 
                        <div class="pb-5">
                            <div class="container">
                            <div class="row">
                                <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                                
                                {/* <!-- Shopping cart table --> */}
                                <div class="table-responsive">
                                    <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col" class="border-0 bg-light">
                                            <div class="p-2 px-3 text-uppercase">Songs</div>
                                        </th>
                                        <th scope="col" class="border-0 bg-light">
                                            <div class="p-2 px-3 text-uppercase">Demo</div>
                                        </th>
                                        <th scope="col" class="border-0 bg-light">
                                            <div class="py-2 text-uppercase">Price</div>
                                        </th>
                                        <th scope="col" class="border-0 bg-light">
                                            <div class="py-2 text-uppercase">Playlist</div>
                                        </th>
                                        <th scope="col" class="border-0 bg-light">
                                            <div class="py-2 text-uppercase">Remove</div>
                                        </th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        {wishlistsongs}
                                    </tbody>
                                    
                                    </table>
                                </div>
                                {/* <!-- End --> */}
                                </div>
                            </div>

                          
                                
                                   
                                    
                                </div>
                                </div>
                            </div>

                            </div>
       
            
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        // songs: state.SongList,
        // playlist:state.PlayListCart,
        // total:state.total
        wishlistState : state.wishlist
    }
}

export default connect(mapStateToProps,{fetchWishlist,deleteFromWishlist})(Wishlist)