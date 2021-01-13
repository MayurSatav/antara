import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {fetchCart,deleteFromCart} from './CartRedux/actions/CartActions'
import Payment from './Payment';

export class Cart extends React.Component{
      totalAmount=this.props.cartState.total+10;
    handleDelete=(id)=>{
        this.props.deleteFromCart(id);
    } 
    // handleDeletePl=(id)=>{
    //     this.props.deleteFromPlaylistCart(id);
    // }
    componentDidMount(){
        this.props.fetchCart()
    }
      render(){ 
      const cartLists = this.props.cartState.cartList.length ?
         ( 
            this.props.cartState.cartList.map(song=>{
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
                                    {/* <tr>
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
                                    </tr> */}
                                    {/* <tr>
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
                                </tr> */}
                                {/* {cartPlayList} */}
                                {cartLists}
                                    
                                </tbody>
                                    
                                    </table>
                                </div>
                                {/* <!-- End --> */}
                                </div>
                            </div>

                            <div class="row py-5 p-4 bg-white rounded shadow-sm">
                                <div class="col-lg-6">
                                <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
                                <div class="p-4">
                                    <p class="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
                                    <div class="input-group mb-4 border rounded-pill p-2">
                                    <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" class="form-control border-0"/>
                                    <div class="input-group-append border-0">
                                        <button id="button-addon3" type="button" class="btn btn-warning px-4 rounded-pill"><i class="fa fa-gift mr-2"></i>Apply coupon</button>
                                    </div>
                                    </div>
                                </div>
                                <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
                                <div class="p-4">
                                    <p class="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
                                    <textarea name="" cols="30" rows="2" class="form-control"></textarea>
                                </div>
                                </div>
                                <div class="col-lg-6">
                                <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                                <div class="p-4">
                                    <p class="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                                    <ul class="list-unstyled mb-4">
                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Order Subtotal </strong><strong>₹{this.props.cartState.total}</strong></li>
                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Shipping and handling</strong><strong>₹0.00</strong></li>
                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Tax</strong><strong>₹0.00</strong></li>
                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                                        <h5 class="font-weight-bold">₹{this.props.cartState.total}</h5>
                                    </li>
                                    <li class=" py-3 border-bottom">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="digital"/>
                                            <label class="form-check-label" for="inlineRadio1">Digital</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="cd"/>
                                            <label class="form-check-label" for="inlineRadio2">Optical Drive</label>
                                        </div>
                                    </li>
                                    </ul>
                                   
                                    <button type="button" class="btn btn-dark rounded-pill py-2 btn-block border-0" style={{backgroundColor:"#FC0254"}} data-toggle="modal" data-target=".bd-example-modal-lg">Order Now</button>

                                        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <Payment></Payment>
                                            </div>
                                        </div>
                                        </div>
                                    <br></br>
                                    
                                </div>
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
        cartState : state.cart
    }
}
// const mapDispatchToProps= (dispatch)=>{
//     return{
//     //    deleteFromCart: (id)=>{dispatch(deleteFromCart(id))},
//     //    deleteFromPlaylistCart:(id)=>{dispatch(deleteFromPlaylistCart(id))},
//     fetchCart: () => dispatch()
//          }
//     }
export default connect(mapStateToProps,{fetchCart,deleteFromCart})(Cart)