import React , {Component } from 'react'
import CategoryDetails from './CategoryDetails'
import ModalNew from './ModalNew'
import { addToCart} from './CartRedux/actions/CartActions'
import {addToWishlist} from './WishlistRedux/actions/wishlistActions'
import { connect } from 'react-redux'
class SongDetails extends Component {
    constructor(props) { 
        super(props);   
        this.state = {
          modalShow: false
        };
      }
    handleModal=(event)=>{
        this.setState({modalShow:false});
    }
    handleCart =(id)=>{
    //    alert("in handleclick")
    this.props.addToCart(id);
    }
    handleWishlist =(id)=>{
        this.props.addToWishlist(id);
        }
    render(){
      
    return (
        // <CategoryDetails {...props} />
        <React.Fragment>
             <table class="table table-hover">
                 <tbody>
                    <tr onClick={this.handleModal}>
                        <td >
<<<<<<< HEAD
                            <img src="./images/SongImage/Blue_Skies.jpg" style={{width:"50px"}} class="rounded-circle" alt="Avatar"/> 
=======
                            <img src="./images/Artist/Lenka.jpg" style={{width:"50px"}} class="rounded-circle" alt="Avatar"/> 
>>>>>>> c8dcfa08cf026d276a25a7fed031f282a49771fb
                            {this.props.name}
                        </td>
                        <td>
                            <audio id="player" src="horse.mp3" controls controlsList="nodownload"></audio>
                        </td>        
                        <td>
                            <div class="dropdown show">
                                <a class="btn dropdown" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" href="#"  onClick={()=>{this.handleCart('s30')}}>Add to Cart</a>
                                    <a class="dropdown-item" href="#" onClick={()=>{this.handleWishlist('s31')}}>Add to Wishlist</a>
                                    <a class="dropdown-item" href="#">Add in playlist</a>
                                    <a class="dropdown-item" href="#">Share</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <ModalNew
             name={this.props.name}
             show={this.state.modalShow}
             image={'./images/SongImage/Blue_Skies.jpg'}
             artist={'Lenka'}
             genre= {'Pop,indie pop'}
             released = {'23 September 2008'}
             playlist={'Force Of Nature'}
             onHide={this.handleModal} />
        
        </React.Fragment>
        
    );
    }
    
}
const mapStateToProps = (state)=>{
    return {
      songs: state.songs
    }
  }
  const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        addToWishlist:(id)=>{dispatch(addToWishlist(id))}
    
    }
}
    export default connect(mapStateToProps,mapDispatchToProps)(SongDetails)
