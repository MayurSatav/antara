import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SongDetails from './SongDetails'
import {connect} from 'react-redux'
class CategoryDetails extends Component {
    constructor(props){
        super(props);
    }
    handlePlCart =(id)=>{
      //  alert("in handle-click and id "+id);
        this.props.addToPlaylistCart(id);
        }
    render(){
        return (
            
           <div class="container-fluid" style={{marginTop:"5%",paddingBottom: "150px"}}>

                <div id="layoutSidenav_content" >
                <div className="div1"  >
                    <nav aria-label="breadcrumb" >
                        <ol class="breadcrumb" style={{backgroundColor:"white"}}>
                            <li class="breadcrumb-item" ><Link to="/Profile" style={{color:"#FC0254"}}>Home</Link></li>
                            <li class="breadcrumb-item"><a href="#" style={{color:"#FC0254"}}>Category</a></li>
                            <li class="breadcrumb-item active" aria-current="page" >Album</li>
                            <li class="breadcrumb-item"><a href="#" style={{color:"#FC0254"}}>song</a></li>
                        </ol>
                    </nav>
                </div>
            <main>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-3" >
                            <div class="container" style={{width:"300px",height:"auto"}}>
                                <img src="./images/SongImage/Blue_Skies.jpg"  class="img-thumbnail" />
                            </div>
                            <br></br>
                            <div class="container">
                                <h6> Category Name </h6>
                                <h6>Popular Hits 2020: English</h6><hr></hr>
                                <h5>Category Price </h5>
                                <h6>Rs.500</h6>
                                <button type="button" class="btn btn-secondary rounded-pill" style={{backgroundColor:"#FC0254",border:"none"}} onClick={()=>{this.handlePlCart('p1')}}>Buy Now</button>&nbsp;<hr></hr>
                                <h5>Reviews</h5>
                                {/* rating card start */}

                                
                                    <div class="card">
                                        <div class="card-body">
                                            <h1 class="rating-num text-center">4.0</h1>
                                            <div class="rating">
                                                <span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star">
                                                </span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star">
                                                </span><span class="glyphicon glyphicon-star-empty"></span>
                                            </div>
                                            <div class="text-center">
                                                <i class="fas fa-star"></i> 1,050,008 total
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-body">
                                            
                                                    <div class="row rating-desc">
                                                        <div class="col-xs-3 col-md-3 text-right">
                                                            <i class="fas fa-star"></i> 5
                                                        </div>
                                                        <div class="col-xs-8 col-md-9">
                                                            <div class="progress progress-striped" style={{height:"10px"}}>
                                                                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="20"
                                                                    aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                                                                    <span class="sr-only">80%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-xs-3 col-md-3 text-right">
                                                            <i class="fas fa-star"></i> 4
                                                        </div>
                                                        <div class="col-xs-8 col-md-9">
                                                            <div class="progress" style={{height:"10px"}}>
                                                                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="20"
                                                                    aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
                                                                    <span class="sr-only">60%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-xs-3 col-md-3 text-right">
                                                            <i class="fas fa-star"></i> 3
                                                        </div>
                                                        <div class="col-xs-8 col-md-9">
                                                            <div class="progress" style={{height:"10px"}}>
                                                                <div class="progress-bar bg-info" role="progressbar" aria-valuenow="20"
                                                                    aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}>
                                                                    <span class="sr-only">40%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-xs-3 col-md-3 text-right">
                                                            <i class="fas fa-star"></i> 2
                                                        </div>
                                                        <div class="col-xs-8 col-md-9">
                                                            <div class="progress" style={{height:"10px"}}>
                                                                <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="20"
                                                                    aria-valuemin="0" aria-valuemax="100" style={{width: "20%"}}>
                                                                    <span class="sr-only">20%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-xs-3 col-md-3 text-right">
                                                            <i class="fas fa-star"></i> 1
                                                        </div>
                                                        <div class="col-xs-8 col-md-9" >
                                                            <div class="progress" style={{height:"10px"}}>
                                                                <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="80"
                                                                    aria-valuemin="0" aria-valuemax="100" style={{width: "15%"}}>
                                                                    <span class="sr-only">15%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        
                                        </div>
                                        </div>

                                {/* ratting card end */}
                                
                                
                            </div>
                            <br></br>
                            
                        </div>`

                        <br/>
                        <div class="col-sm-8" >
                            <div class="container">
                                <h1>Popular Hits 2020: English</h1>
                                <small class="text-muted">By Antara</small><br></br>
                                <small class="text-muted">181K Followers • 50 Songs • 57 min</small><br></br><br></br>
                                <button type="button" class="btn btn-secondary rounded-pill" style={{backgroundColor:"#FC0254",border:"none"}} onClick={()=>{this.handlePlCart('p1')}}>Add to Cart</button>&nbsp;
                                
                            </div>
                            <hr />
                            <div class="container">

                              {this.props.songs.map(song => (  
                                <SongDetails
                                key={song.id}
                                id={song.id}
                                image={song.image}
                                name={song.name}
                                artist={song.artist}
                                category={song.category}
                                />
                               ))}
                       
                            </div>
                            
                        </div>
                        </div>
                    </div>

                </main>
            </div>
            </div>
    
          
        );
        }
    }


    const mapStateToProps = (state)=>{
        return {
         
        }
      }
      const mapDispatchToProps= (dispatch)=>{
        return{
     //      addToPlaylistCart: (id)=>{dispatch(addToPlaylistCart(id))}
             }
        }
        export default connect(mapStateToProps,mapDispatchToProps)(CategoryDetails)
    