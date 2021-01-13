import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TopNavWL from './TopNavWL';
import Footer from './Footer';

export class LoginN extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            errusername:'',
            errpwd:''
        };
    }
    submitchange= async (event)=>{
        event.preventDefault();
        // if(this.validate()){
        //     console.log(this.state);
        //     this.setState({username:''});
        //     this.setState({password:''});
        //     //alert('Logged in!!!');
  
        // }

        try{
            const response = await fetch("http://localhost:5000/api/users/login", 
            {method: 'POST',
         headers: {
             'Content-Type' : 'application/json'
         },
        body : JSON.stringify({
                email: event.target.email.value,
                password : event.target.password.value
            })
        })
        const responseData = await response.json()
        //alert(responseData)
        alert("Logged in")
        console.log(responseData)
        } catch (err){
            alert(err);
        }
       
        
    }
    // validate(){
    //     let flag=true;
    //     let err1="";
    //     let err2="";
    //     if(this.state.username.length<1){
    //         err1=<p>Username can't be empty</p>
    //         flag=false;
    //     }
    //     if(this.state.password.length<1){
    //         err2=<p>Password can't be empty</p>
    //         flag=false;
    //     }
    //     this.setState({errusername:err1});
    //     this.setState({errpwd:err2});
    //     return flag;
    // }
    // eventHandler=(event)=>{
    //     let nam=event.target.name;
    //     let val=event.target.value;
    //     let err1='';
    //     let err2='';
    //     if(nam==="email"){
    //         if(val.length<1){
    //             err1=<p>Username can't be empty</p>
    //         }
    //     }
    //     if(nam==="password"){
    //         if(val.length<1 ){
    //             err2=<p>Password can't be empty</p>
    //         }
    //         else if(val.length<=10){
    //             err2=<p>Length of Password should be greater than 10</p>
    //         }
    //     }
    //     this.setState({errusername:err1});
    //     this.setState({errpwd:err2});
    //     this.setState({[nam]:val});
    // }
    render() {
        return (

     
        
        <div class="card" style={{margin: "0 auto",float: "none",marginTop: "5%",marginBottom:"2%",width:"30%"}}>
            
            <h1 class="text-center" style={{fontSize: "80px",color:"#FC0254"}}><span>An♪ara</span> </h1>
            
            <div class="card-body">
            <h5 class="text-center">Login</h5><hr></hr>
            <form onSubmit={this.submitchange} >
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="email" name="email" aria-describedby="username" placeholder="Enter username" onChange={this.eventHandler}/>
                    </div>
                    <small class="text-danger ">{this.state.errusername}</small>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" name="password" placeholder="Enter password" onChange={this.eventHandler}/>
                    </div>
                    <small class="text-danger " >{this.state.errpwd}</small>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                        <label class="form-check-label float-right" for="exampleCheck1">Forgot password</label>
                    </div>
    
                    <button type="submit" class="btn btn-primary" style={{backgroundColor:"#FC0254",border:"none"}} >Login</button>
                    
                </form>
                <div className="col-sm-12">
                     <p class="text-center">Don't have an account? <Link to="/signup" style={{color:"red"}}>Register  Here </Link>.</p>
                </div>
                    <p class="text-center " ><small class="text-muted text-center">or login with</small></p>
                    <p class="text-center " style={{fontSize:"30px",color: "rgb(121, 118, 118)"}}><i class="fab fa-google"></i>&nbsp;<i class="fab fa-facebook"></i></p>
    
            </div>
        </div>

    
        )
    }
}

export default LoginN
