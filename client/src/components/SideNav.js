import React, { Component } from 'react'

export class SideNav extends Component {
    render() {
        return (
        <div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div class="sb-sidenav-menu">
                    <div class="nav">
                    <table class="table table-hover table-borderless " style={{color: "white"}}>
                <thead>
                  <tr>
                    <th scope="col" class="sb-sidenav-menu-heading">
                      <button class="btn btn-link btn-sm order-1 border-lg-0"><i class="fas fa-plus fa-fw" style={{color:"#FC0254"}}></i></button> 
                      Playlist
                      </th>
                    <th scope="col">
                      <div class="dropdown show">
                        <a class="btn dropdown" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false">
                          <i class="fas fa-ellipsis-v" style={{color: "white"}}></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a class="dropdown-item" href="#">Share Playlist</a>
                          <a class="dropdown-item" href="#">Delete playlist</a>
                          <a class="dropdown-item" href="#">My Playlists</a>
                        </div>
                      </div>
                    </th>
                  </tr>
              </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="https://st2.depositphotos.com/3534893/10380/v/950/depositphotos_103806490-stock-illustration-vector-square-mandala-pattern-as.jpg"
                        style={{width:"30px"}} class="rounded-circle" alt="Avatar" />
                      <span style={{fontSize: "15px"}}> Everything</span>

                    </td>

                    <td>
                      <div class="dropdown show">
                        <a class="btn dropdown" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false">
                          <i class="fas fa-ellipsis-v" style={{color: "white"}}></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a class="dropdown-item" href="#">PlayNext</a>
                          <a class="dropdown-item" href="#">Share</a>
                          <a class="dropdown-item" href="#">Remove from playlist</a>
                          
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://st2.depositphotos.com/3534893/10380/v/950/depositphotos_103806490-stock-illustration-vector-square-mandala-pattern-as.jpg"
                        style={{width:"30px"}} class="rounded-circle" alt="Avatar" />
                      <span style={{fontSize: "15px"}}> Everything</span>
                    </td>

                    <td>
                      <div class="dropdown show">
                        <a class="btn dropdown" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false">
                          <i class="fas fa-ellipsis-v" style={{color: "white"}}></i>
                        </a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">PlayNext</a>
                          <a class="dropdown-item" href="#">Share</a>
                          <a class="dropdown-item" href="#">Remove from playlist</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

                    </div>
                </div>    
            </nav>
        </div>
        )
    }
}

export default SideNav
