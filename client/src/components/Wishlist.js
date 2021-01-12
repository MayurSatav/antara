import React, { Component } from 'react'
import {fetchWishlist} from './WishlistRedux/actions/wishlistActions'
import {connect} from 'react-redux'
import { render } from '@testing-library/react';

export class Wishlist extends React.Component{
    //  totalAmount=this.props.total+10;
    // handleDelete=(id)=>{
    //     this.props.deleteFromCart(id);
    // } 
    // handleDeletePl=(id)=>{
    //     this.props.deleteFromPlaylistCart(id);
    // }
    componentDidMount(){
        this.props.fetchWishlist()
    }
      render(){ 
      const songs = this.props.State.wish.length ?
         ( 
            this.props.State.wish.map(song=>{
                return(
                    <tr>
                    <th scope="row" class="border-0">
                    <div class="p-2">
                    <img src={song.SongPath} alt="Song3" width="70" class="img-fluid rounded shadow-sm"/>
                        <div class="ml-3 d-inline-block align-middle">
                        <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">{song.SongName}</a></h5><span class="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
                        </div>
                    </div>
                    </th>
                    <td>
                            <audio id="player" src="horse.mp3" controls controlsList="nodownload"></audio>
                    </td>
                    <td class="border-0 align-middle"><strong>{song.Price}</strong></td>
                    <td class="border-0 align-middle"><strong>{song.Album}</strong></td>
                    {/* <td class="border-0 align-middle" onClick={()=>{this.handleDelete(song.SongId)}}><a href="#" class="text-dark"><i class="fa fa-trash"  ></i></a></td> */}
                </tr>
                                             
                )
            })
        ):
        
         (
            // <p>Nothing.</p>
            <p></p>
         );
        //  let cartPlayList= this.props.playlist.map(pl=>{
        //     return(
        //         <tr>
        //         <th scope="row" class="border-0">
        //         <div class="p-2">
        //             {pl.image}
        //             <div class="ml-3 d-inline-block align-middle">
        //             <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">{pl.name}</a></h5><span class="text-muted font-weight-normal font-italic d-block">{pl.category}</span>
        //             </div>
        //         </div>
        //         </th>
        //         <td class="border-0 align-middle"><strong>{pl.price}</strong></td>
        //         <td class="border-0 align-middle"><strong>{pl.language}</strong></td>
        //         <td class="border-0 align-middle"><a href="#" class="text-dark" onClick={()=>{this.handleDeletePl(pl.id)}}><i class="fa fa-trash"></i></a></td>
        //     </tr>
                                         
        //     )
        // });
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
                                    <tr>
                                        <th scope="row" class="border-0">
                                        <div class="p-2">
                                            <img src="./images/main/1.jpg" alt="" width="70" class="img-fluid rounded shadow-sm"/>
                                            <div class="ml-3 d-inline-block align-middle">
                                            <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">Song Name</a></h5><span class="text-muted font-weight-normal font-italic d-block">Category</span>
                                            </div>
                                        </div>
                                        </th>
                                        <td>
                                            <audio id="player" src="horse.mp3" controls controlsList="nodownload"></audio>
                                        </td>
                                        <td class="border-0 align-middle"><strong>₹79.00</strong></td>
                                        <td class="border-0 align-middle"><strong>playlist1</strong></td>
                                        <td class="border-0 align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a></td>
                                    </tr>
                                    <tr>
                                    <th scope="row">
                                    <div class="p-2">
                                        <img src="./images/main/2.jpg" alt="" width="70" class="img-fluid rounded shadow-sm"/>
                                        <div class="ml-3 d-inline-block align-middle">
                                        <h5 class="mb-0"><a href="#" class="text-dark d-inline-block">Song Name2</a></h5><span class="text-muted font-weight-normal font-italic">Category</span>
                                        </div>
                                    </div>
                                    </th>
                                    <td>
                                        <audio id="player" src="horse.mp3" controls controlsList="nodownload"></audio>
                                    </td>
                                    <td class="align-middle"><strong>₹79.00</strong></td>
                                    <td class="align-middle"><strong>Silent</strong></td>
                                    <td class="align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a>
                                    </td>
                                </tr>
                      
                                {songs}
                                    
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
        State : state.wishlist
    }
}
// const mapDispatchToProps= (dispatch)=>{
//     return{
//     //    deleteFromCart: (id)=>{dispatch(deleteFromCart(id))},
//     //    deleteFromPlaylistCart:(id)=>{dispatch(deleteFromPlaylistCart(id))},
//     fetchCart: () => dispatch()
//          }
//     }
export default connect(mapStateToProps,{fetchWishlist})(Wishlist)