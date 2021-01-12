import React, { Component } from 'react'

export class Settings extends Component {
    render() {
        return (
            <div class="container-fluid" style={{marginTop:"5%",paddingBottom: "150px"}}>
                <div class="container">
 <div class="row">
     <div class="col-md-5">
        <div class="card">
            <div class="card-body">
            </div>
        </div>
     </div>
    <div class="col-md-7">
    	<div class="card">
            <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
               
                <button type="submit" class="btn btn-primary border-0" style={{backgroundColor:"#FC0254"}}>Save</button>
            </form>
            </div>
        </div>
            <br></br>
        <div class="card">
            <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" aria-describedby="address" placeholder="Enter address"/>
                    
                </div>
                <div class="form-group">
                    <label for="landmark">Land Mark</label>
                    <input type="text" class="form-control" id="landmark" aria-describedby="landmark" placeholder="Near by Land mark"/>
                  
                </div>
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="number" class="form-control" id="phone" aria-describedby="phone" placeholder="Enter Phone"/>
                </div>

                <div class="form-group">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="dropdown">
                                <button class="btn btn-light dropdown-toggle btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Country
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">India</a>
                                    <a class="dropdown-item" href="#">Singapore</a>
                                    <a class="dropdown-item" href="#">Japan</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="dropdown">
                                <button class="btn btn-light dropdown-toggle btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    State
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Maharshtra</a>
                                    <a class="dropdown-item" href="#">Gujrat</a>
                                    <a class="dropdown-item" href="#">Tamil Nadu</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Enter City"/>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Zip Code"/>
                        </div>
                    </div>
                </div>
                
                
                <button type="submit" class="btn btn-primary border-0" style={{backgroundColor:"#FC0254"}} >Save</button>
            </form>
            </div>
        </div>
    </div>
 </div>
</div>

            </div>
        )
    }
}

export default Settings
