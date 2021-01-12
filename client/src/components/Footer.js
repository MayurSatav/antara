import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="page-footer font-small blue pt-4">
                <div class="container-fluid text-center text-md-left">
                    <div class="row">
                        <div class="col-md-6 mt-md-0 mt-3">
                            <h5 style={{fontSize: "50px",color:"#FC0254"}}><span>An♪ara</span></h5>
                            <p><small>COPYRIGHT ©2021 ALL RIGHTS RESERVED</small></p>
                            <div style={{fontSize:"20px"}}>
                                <a href="#" style={{color:"#525D68"}}><i class="fab fa-google"></i></a> &nbsp;
                                <a href="#" style={{color:"#525D68"}}><i class="fab fa-facebook"></i></a> &nbsp;
                                <a href="#" style={{color:"#525D68"}}><i class="fab fa-instagram"></i></a> &nbsp;
                                <a href="#" style={{color:"#525D68"}}><i class="fab fa-twitter"></i></a> &nbsp;
                            </div>
                        </div>
        
                        <hr class="clearfix w-100 d-md-none pb-3"></hr>
                        <div class="col-md-2 mb-md-0 mb-3" >
                            <h5 class="text-uppercase">ABOUT US</h5>
                            <ul class="list-unstyled">
                                <li><a href="#" style={{color:"#56606B"}}>Our Story</a></li>
                                <li><a href="#" style={{color:"#56606B"}}>Antara Music Blog</a></li>
                                <li><a href="#" style={{color:"#56606B"}}>History</a></li>
                            </ul>
                        </div>
    
                        <div class="col-md-2 mb-md-0 mb-3">
                            <h5 class="text-uppercase">PRODUCTS</h5>
                            <ul class="list-unstyled">
                                <li><a href="#" style={{color:"#56606B"}}>Music</a> </li>
                                <li><a href="#" style={{color:"#56606B"}}>Subscription</a></li>
                                <li><a href="#" style={{color:"#56606B"}}>Custom Music</a></li>
                            </ul>
                        </div>
                        <div class="col-md-2 mb-md-0 mb-3">
                            <h5 class="text-uppercase">OTHER</h5>
                            <ul class="list-unstyled">
                                <li><a href="#" style={{color:"#56606B"}}>Newsletter</a> </li>
                                <li><a href="#" style={{color:"#56606B"}}>Careers</a></li>
                                <li><Link to="./ContactUs" style={{color:"#56606B"}}>Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
   
                <div class="footer-copyright text-center py-1">© 2020 Copyright:
<Link to="/"> Antara.in</Link>
                </div>
            </footer>
            </div>
        )
    }
}

export default Footer
