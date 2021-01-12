import React from 'react'


const ModalNew = (props) => {
    
    return (
        <div  class="modal fade bd-example-modal-lg" {...props} tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{marginTop:"10%"}}>
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="container" >
                        <div class="row">
                            <div class="col-md-5">
                                <div class="mt-3 mb-3">
                                    <img alt="Web Studio" class="img-fluid" src={props.image} />
                                </div>
                            </div>
                            <div class="col-md-7 col-lg-5  d-flex align-items-center mt-4 mt-md-0">
                                <div class="mb-2">
                                    <h3 class="display-4"><strong>{props.name}</strong></h3>
                                    <h5 > Album by {props.artist}</h5>
                                    <h5 > Playlist: {props.playlist}</h5>
                                    <h5>Genre: {props.genre}</h5>
                                    <h5>Released: {props.released}</h5>
                                    <hr/>
                                    <button type="button" class="btn " style={{backgroundColor:"#FC0254",color:"white"}}>Buy Now</button>&nbsp;
                                    <button type="button" class="btn " style={{backgroundColor:"#FC0254",color:"white"}}><i class="fas fa-shopping-cart"></i></button>&nbsp;
                                    <button type="button" class="btn " style={{backgroundColor:"#FC0254",color:"white"}}><i class="fas fa-heart"></i></button>&nbsp;
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ModalNew
