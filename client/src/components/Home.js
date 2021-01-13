import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div class="container-fluid" style={{marginTop:"5%",paddingBottom: "150px"}}>
                    <main>
                        <div class="container-fluid">
                            {/* Top Crousel */}

                            <div id="topCarousel" class="carousel slide" data-ride="carousel" >
                                <ol class="carousel-indicators">
                                    <li data-target="#topCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#topCarousel" data-slide-to="1"></li>
                                    <li data-target="#topCarousel" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner" >
                                    <div class="carousel-item active">
                                        <div class="row"> 
                                            <div class="col-md-4" >
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./img/top/top (1).jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./img/top/top (2).jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-4 ">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./img/top/top (3).jpg"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div class="carousel-item">
                                    <div class="row"> 
                                            <div class="col-md-4" >
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./img/top/top (4).jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./img/top/top (5).jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-4 ">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./img/top/top (6).jpg"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div class="carousel-item" >
                                    <div class="row"> 
                                            <div class="col-md-4" >
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./img/top/top (7).jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./img/top/top (8).jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-4 ">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./img/top/top (9).jpg"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <a class="carousel-control-prev" href="#topCarousel" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#topCarousel" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>

                            {/* Top Carousel end */}

                            <small>Top Romantic</small>
                            <hr></hr>
                             {/* main Crousel 2 */}

                             <div id="mainCarousel1" class="carousel slide" data-ride="carousel" >
                                <ol class="carousel-indicators">
                                    <li data-target="#mainCarousel1" data-slide-to="0" class="active"></li>
                                    <li data-target="#mainCarousel1" data-slide-to="1"></li>
                                    <li data-target="#mainCarousel1" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner" >
                                    <div class="carousel-item active">
                                        <div class="row"> 
                                            <div class="col-md-2" >
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Dont_Let_Me_Fall.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="card border-0">
                                                <Link to="./songlistasjson"><img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Blue_Skies.jpg"/></Link>
                                                </div>
                                            </div>
                                            <div class="col-md-2 ">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Heal.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2" >
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Roll_With_The_Punches.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/The_Show.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2 ">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Time_of_my_Life.jpg"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div class="carousel-item">
                                    <div class="row"> 
                                            <div class="col-md-2" >
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Brothers.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Ghost.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2 ">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Raising_Heaven.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2" >
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/She_likes_the_Wind.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Time_of_my_Life.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2 ">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./img/top/top (9).jpg"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div class="carousel-item" >
                                    <div class="row"> 
                                            <div class="col-md-2" >
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./img/top/top (7).jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./img/top/top (8).jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2 ">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./img/top/top (9).jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2" >
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./img/top/top (7).jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./img/top/top (8).jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2 ">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./img/top/top (9).jpg"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <a class="carousel-control-prev" href="#mainCarousel1" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#mainCarousel1" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>

                            <small>Trending Indian</small>
                            <hr></hr>
                             {/* main Crousel 1 */}

                             <div id="mainCarousel" class="carousel slide" data-ride="carousel" >
                                <ol class="carousel-indicators">
                                    <li data-target="#mainCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#mainCarousel" data-slide-to="1"></li>
                                    <li data-target="#mainCarousel" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner" >
                                    <div class="carousel-item active">
                                        <div class="row"> 
                                            <div class="col-md-2" >
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Bandeya.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="card border-0">
                                                <Link to="./songlistasjson"><img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Chhapaak.jpg"/></Link>
                                                </div>
                                            </div>
                                            <div class="col-md-2 ">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Hardum_Humdum.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2" >
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Khairiyat.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Ve_Maahi.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2 ">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Chand_Gagani_Aala.jpg"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div class="carousel-item">
                                    <div class="row"> 
                                            <div class="col-md-2" >
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Hridayi_Preet_Jagate.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Lal_Shal_Jodi_Jarthai.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2 ">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Sadhi_Bholi_Meera.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2" >
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Tumhi_Maza_Bajirao.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/O_Saathi.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2 ">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Paniyon_Sa.jpg"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div class="carousel-item" >
                                    <div class="row"> 
                                            <div class="col-md-2" >
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Pehli_Dafa.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Tera_Hua.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2 ">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/Tere_Liye.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2" >
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/O_Saathi.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/O_Saathi.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-md-2 ">
                                                <div class="card border-0">
                                                    <img class="img-fluid" style={{borderRadius: "15px"}} src="./images/songImage/O_Saathi.jpg"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <a class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                            
                            
                            
                
                
                    </div>
                </main>
            </div>
        )
    }
}

export default Home
