import React, { Component } from 'react'
import axios from 'axios'

export class Settings extends Component {

    constructor(props) {
        super(props)
        this.state = { name: '', email: null,password:null, errormessage: '' };
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert(this.state.name1 + " " + "Details Updated")
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
       

        if (nam === "name") {
            if (val == "") {
                err = <strong style={{ color: 'red'}}>Name should not be blank</strong>;
            }
        }

        this.setState({ errormessage: err });
        this.setState({ [nam]: val });
        // this.setState({name1: event.target.value});
        // this.setState({roll1:event.target.value});
    }

    render() {
        return (
            <div class="container-fluid" style={{marginTop:"5%",paddingBottom: "150px"}}>
                <div class="container">
 <div class="row">
     <div class="col-md-5">
        <div class="card">
            <div class="card-body">
                <img src="./img/profile.jpg"></img>
            </div>
            <div class="card-body">
               <h3><span style={{color:"#FC0254"}}>Hi! </span>{this.state.name}</h3>
               <h5>{this.state.email}</h5>
               <hr></hr>
               <h5>Address</h5>
               <small>{this.state.address}</small>
            </div>
        </div>
     </div>
    <div class="col-md-7">
    	<div class="card">
            <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="name" name= "name" onChange={this.myChangeHandler} class="form-control" id="exampleInputEmail1" aria-describedby="name" placeholder="Enter Name"/>
                    
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name= "email" onChange={this.myChangeHandler} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
               
                <button type="submit" class="btn btn-primary border-0" style={{backgroundColor:"#FC0254"}}>Update</button>
            </form>
            </div>
        </div>
            <br></br>
        <div class="card">
            <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" name= "address" onChange={this.myChangeHandler} class="form-control" id="address" aria-describedby="address" placeholder="Enter address"/>
                    
                </div>
                <div class="form-group">
                    <label for="landmark">Land Mark</label>
                    <input type="text"  class="form-control" id="landmark" aria-describedby="landmark" placeholder="Near by Land mark"/>
                  
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
