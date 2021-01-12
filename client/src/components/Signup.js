import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TopNavWL from './TopNavWL';
import Footer from './Footer';

export class Singup extends Component {
   constructor(){
       
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    let errors=this.state.errors;
    input[event.target.name] = event.target.value;
    if(!input[event.target.name]){
      errors[event.target.name] = "Please enter your "+ event.target.name;
    }
    this.setState({
      input
    });
  }
  // handleChange(event) {
  //   let input = this.state.input;
  //   input[event.target.name] = event.target.value;
  
  //   this.setState({
  //     input
  //   });
  // }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["name"] = "";
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
  
        alert('Demo Form is submited');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["name"]) {
        isValid = false;
        errors["name"] = "Please enter your name.";
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] != input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      } 
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (

      <div class="card" style={{margin: "0 auto",float: "none",marginTop: "5%",width:"30%"}}>
            <h1 class="text-center" style={{fontSize: "80px",color:"#FC0254"}}><span>An♪ara</span> </h1>
            <div class="card-body">
             <h5 class="text-center">SignUp</h5><hr></hr>
            <form onSubmit={this.handleSubmit}>
  
            <div class="form-group">
              <label for="name">Name:</label>
              <input 
                type="text" 
                name="name" 
                value={this.state.input.name}
                onChange={this.handleChange}
                class="form-control" 
                placeholder="Enter name" 
                id="name" />

                <div className="text-danger">{this.state.errors.name}</div>
            </div>

            <div class="form-group">
              <label for="email">Email Address:</label>
              <input 
                type="text" 
                name="email" 
                value={this.state.input.email}
                onChange={this.handleChange}
                class="form-control" 
                placeholder="Enter email" 
                id="email" />

                <div className="text-danger">{this.state.errors.email}</div>
            </div>

            <div class="form-group">
              <label for="password">Password:</label>
              <input 
                type="password" 
                name="password" 
                value={this.state.input.password}
                onChange={this.handleChange}
                class="form-control" 
                placeholder="Enter password" 
                id="password" />

                <div className="text-danger">{this.state.errors.password}</div>
            </div>

            <div class="form-group">
              <label for="password">Confirm Password:</label>
              <input 
                type="password" 
                name="confirm_password" 
                value={this.state.input.confirm_password}
                onChange={this.handleChange}
                class="form-control" 
                placeholder="Enter confirm password" 
                id="confirm_password" />

                <div className="text-danger">{this.state.errors.confirm_password}</div>
            </div>
               
            <input type="submit" value="Submit" class="btn btn-primary btnClass" style={{backgroundColor:"#FC0254",border:"none"}}/>
            
          </form>

          <div className="col-sm-12">
                     <p class="text-center">Already have an account? <Link to="./login" style={{color:"red"}}>Login</Link>.</p>
            </div>
        
            </div>
      </div>

    )
   }}
export default Singup
