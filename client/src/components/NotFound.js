import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NotFound extends Component {
    render() {
        return (
            <div>
               <div class="container center">
                <div class="row">
                    <div class="col-md-12">
                        <div class="error-template" style={{ marginLeft: "25%"}}>
                            <img src="./img/4042.JPG"  style={{ width: "70%"}}></img>
                            <h1>
                                Oops!</h1>
                            <h2>
                                Page Not Found</h2>
                            
                            <div class="error-actions">
                                <Link to="/" >
                                    <span style={{color:"#FC0254"}}> <i class="fas fa-arrow-left" ></i> Home</span>
                                </Link>
                                <Link to="" class="btn btn-default "><span>Contact Support</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        )
    }
}

export default NotFound
