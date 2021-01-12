import React, { Component } from 'react'

export class Category extends Component {
    render() {
        return (
            <div>
            <section class="playlist-section spad">
                <div class="container-fluid">
                    
                    <div class="container text-center"  >
                        <ul class="playlist-filter controls">
                            <li class="control" data-filter=".artists">Latest</li>
                            <li class="control" data-filter=".genres">Genres</li>
                            <li class="control" data-filter=".artists">Artists</li>
                            <li class="control" data-filter=".movies">Regional</li>
                            <li class="control" data-filter=".labels">All Songs</li>
                        </ul>
                        
                    </div>                                              
                    <div class="clearfix"></div>
                    <div class="row playlist-area">
                        <div class="mix col-lg-2 col-md-4 col-sm-6">
                            <div class="playlist-item">
                                <img src="./img/lenka.jpg" alt=""/>
                                <h5>Live Concerts</h5>
                            </div>
                        </div>
                        <div class="mix col-lg-2 col-md-4 col-sm-6">
                            <div class="playlist-item">
                                <img src="./img/lenka.jpg" alt=""/>
                                <h5>Dj Sets</h5>
                            </div>
                        </div>
                        <div class="mix col-lg-2 col-md-4 col-sm-6">
                            <div class="playlist-item">
                                <img src="./img/lenka.jpg" alt=""/>
                                <h5>Recorded Live</h5>
                            </div>
                        </div>
                        <div class="mix col-lg-2 col-md-4 col-sm-6">
                            <div class="playlist-item">
                                <img src="./img/lenka.jpg" alt=""/>
                                <h5>Oldies</h5>
                            </div>
                        </div>
                        <div class="mix col-lg-2 col-md-4 col-sm-6">
                            <div class="playlist-item">
                                <img src="./img/lenka.jpg" alt=""/>
                                <h5>Rock & Roll</h5>
                            </div>
                        </div>
                        <div class="mix col-lg-2 col-md-4 col-sm-6">
                            <div class="playlist-item">
                                <img src="./img/lenka.jpg" alt=""/>
                                <h5>Classic Music</h5>
                            </div>
                        </div>
                        <div class="mix col-lg-2 col-md-4 col-sm-6">
                            <div class="playlist-item">
                                <img src="./img/lenka.jpg" alt=""/>
                                <h5>Rock</h5>
                            </div>
                        </div>
                        <div class="mix col-lg-2 col-md-4 col-sm-6">
                            <div class="playlist-item">
                                <img src="./img/lenka.jpg" alt=""/>
                                <h5>Alternative</h5>
                            </div>
                        </div>
                        <div class="mix col-lg-2 col-md-4 col-sm-6">
                            <div class="playlist-item">
                                <img src="./img/lenka.jpg" alt=""/>
                                <h5>Country</h5>
                            </div>
                        </div>
                        <div class="mix col-lg-2 col-md-4 col-sm-6 artists">
                            <div class="playlist-item">
                                <img src="./img/lenka.jpg" alt=""/>
                                <h5>EDM</h5>
                            </div>
                        </div>
                        <div class="mix col-lg-2 col-md-4 col-sm-6 movies">
                            <div class="playlist-item">
                                <img src="./img/lenka.jpg" alt=""/>
                                <h5>Pop Culture</h5>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            </div>
        )
    }
}

export default Category
