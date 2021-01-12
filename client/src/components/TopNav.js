import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class TopNav extends Component {
  
    render() {
        return (
            <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">

                <Link class="navbar-brand" to="/">
                    <h3 style={{ fontFamily: 'Cambria' }}> <span style={{color:"#FC0254",fontSize:"30px"}}>♪</span> Antara</h3>
                </Link>

                <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-2 my-2 my-md-0" style={{width: "40%"}}>
                    <div class="input-group input-group-sm mb-3" style={{marginTop: "15px"}}>
                        <input class="form-control border rounded-pill-left border-right-0 " style={{ backgroundColor: "#212529",color: "white"}} type="search" placeholder="search"
                            id="example-search-input" />
                        <span class="input-group-append">
                            <button class="btn btn-outline-secondary border rounded-pill-right border-left-0" type="button">
                                <i class="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </form>

                <ul class="navbar-nav ml-auto ml-md-5" style={{fontSize:"15px"}}>
                    <Link class="nav-link " to="./Home" role="button" aria-haspopup="true" aria-expanded="false"><i
                        class="fas fa-home fa-fw"></i> Home</Link> 
                    
                    <li class="nav-item px-4 dropdown" >
                    <div class="btn-group">
                        <Link type="button" class="nav-link" to="./Category"><i
                        class="fas fa-music fa-fw"></i> Category</Link>
                        <Link type="button" class="nav-link dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="sr-only">Toggle Dropdown</span>
                        </Link>
                        
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="servicesDropdown">
                        
                        <div class="d-md-flex align-items-start justify-content-start">
                        
                            <div>   
                            <div class="dropdown-header">Artist</div>
                                <a class="dropdown-item" href="#">Shankar Mhadevan</a>
                                <a class="dropdown-item" href="#">Arjit</a>
                                <a class="dropdown-item" href="#">Lenka</a>
                                <a class="dropdown-item" href="#">Rihana</a>
                                <a class="dropdown-item" href="#">Patrick Swayze</a>
                            </div>
                            <div>
                            <div class="dropdown-header">Genres</div>
                            <a class="dropdown-item" href="#">Rock</a>
                            <a class="dropdown-item" href="#">Pop</a>
                            <a class="dropdown-item" href="#">Folk</a>
                            <a class="dropdown-item" href="#">Blues</a>
                            <a class="dropdown-item" href="#">Jazz</a>
                            </div>
                            <div>
                            <div class="dropdown-header">Regional</div>
                                <a class="dropdown-item" href="#">Marathi</a>
                                <a class="dropdown-item" href="#">Hindi</a>
                                <a class="dropdown-item" href="#">English</a>
                                <a class="dropdown-item" href="#">Tamil</a>
                                <a class="dropdown-item" href="#">Panjabi</a>
                            </div>
                            <div>
                            <div class="dropdown-header">Latest</div>
                            <a class="dropdown-item" href="#">Top Romantic</a>
                            <a class="dropdown-item" href="#">Old song covers</a>
                            <a class="dropdown-item" href="#">Instrumental</a>
                            <a class="dropdown-item" href="#">Most Listen</a>
                            <a class="dropdown-item" href="#">Devotional</a>
                            </div>
                        </div>
                        </div>
                        </div>
                    </li>
                    <li><Link class="nav-link " to="./Wishlist" role="button" aria-haspopup="true" aria-expanded="false"><i
                        class="fas fa-heart fa-fw"></i> Wishlist</Link> </li>
                    
                    <li><Link class="nav-link " to="./Cart" role="button" aria-haspopup="true" aria-expanded="false"><i
                        class="fas fa-shopping-cart fa-fw"></i> Cart</Link></li>
                    
                   

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i>Mayur</a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <Link class="dropdown-item" to="./MyAntaras"><i class="fas fa-music fa-fw"></i> My Anataras</Link>
                            <Link class="dropdown-item" to="./Orders"><i class="fas fa-box fa-fw"></i> Orders</Link>

                            <div class="dropdown-divider"></div>
                            <Link class="dropdown-item" to="./Settings"><i class="fas fa-cog fa-fw"></i> Settings</Link>
                            <a class="dropdown-item" href="login.html"><i
                                class="fas fa-sign-out-alt fa-fw"></i> Logout</a>
                        </div>
                    </li>

                    <li>
                    <Link class="nav-link " to="/Login" role="button" aria-haspopup="true" aria-expanded="false">Login | </Link>
                    </li>
                    <li>
                    <Link class="nav-link " to="/Signup" role="button" aria-haspopup="true" aria-expanded="false"
                        style={{color: "#FC0254"}}> Signup</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default TopNav
