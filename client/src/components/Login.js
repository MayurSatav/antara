import React, { Component } from 'react'
// import './login.css'

export class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            errusername:'',
            errpwd:''
        };
    }
    
    eventHandler=(event)=>{
        let nam=event.target.name;
        let val=event.target.value;
        let err1='';
        let err2='';
        if(nam==="username"){
            if(val.length<1){
                err1=<p>Username can't be empty</p>
            }
        }
        if(nam==="password"){
            if(val.length<1 ){
                err2=<p>Password can't be empty</p>
            }
            else if(val.length<=10){
                err2=<p>Length of Password should be greater than 10</p>
            }
        }
        this.setState({errusername:err1});
        this.setState({errpwd:err2});
        this.setState({[nam]:val});
    }
    render() {
    return (
			<div>
				<div className="container-fluid text-center bodyclass">
                	<div className="row text-center" >
                   		<div className="col-sm-2"></div>
                   		<div className="col-sm-8 main-content " >
							   <div className="row">
								   <div className="col-sm-6 ">
									   <img src='images/login.jpg' alt="login" className="loginClass" />
								   </div>
								   <div className="col-sm-6 register">
								 	  	<div className="col-sm-12">
                             				<h4 className="title">LOGIN </h4>
										</div>
                       					<div className="col-sm-12 text-center">
                           					<form className="form-group">
                               					<input type="text" className="text_input" name="username" placeholder="Username" onChange={this.eventHandler}/>
                           					</form>
                       					</div>
                       					<div className="col-sm-12 text-center" style={{color:"red"}}>
                        				  {this.state.errusername}
                      				    </div>
                       					<div className="col-sm-12 text-center">
                      			    		 <form className="form-group  text-center">
                               					<input type="password" className="text_input" name="password" placeholder="Password" onChange={this.eventHandler} />
                           					</form>
                       					</div>
                       					<div className="col-sm-12 text-center" style={{color:"red"}}>
                        				  {this.state.errpwd}
                       					</div>
                       					<div className="row">
                       						<div className="col-sm-6 text-center">
                           						<form className="form-group  text-center">
                                					<input type="checkbox" name="rememberme" /> Remember Me  
                            					</form>
                       						</div>
                       						<div className="col-sm-6 text-center">
                           						<form className="form-group  text-center">
                                					<p><a href="/forgotpassword" style={{color:'black'}}>Forgot Password?</a></p> 
                            					</form>
                       						</div>
                       					</div>
                       					<div className="row">
                        					  <a href="/" style={{color:"white"}} className="btn btn-primary btnClass">Login</a>
                       					</div>
                       					<div className="col-sm-12 text-center">
                        				    <p>Don't have an account? <a href="/signup" style={{color:"red"}}>Register Here</a>.</p>
                     					</div>
										 <div className="col-sm-12">
											 <small style={{color:"grey"}}>or login with</small>
										 </div>
										<div className="row">
                       						<div className="col-sm-6 text-center ">
											  <div className=" btn btn-light "><a href="https://www.google.com" style={{paddingRight:"10px"}} >Google</a></div> 
                       						</div>
                       						<div className="col-sm-6 text-center ">
											   <div className=" btn btn-light "><a href="https://www.facebook.com" style={{paddingRight:"10px"}} >Facebook</a></div>
                       						</div>
                       					</div>
									</div>
							    </div>
                    	</div>
                  		<div className="col-sm-2"></div>
                	</div>
          		</div> 
			</div>
		)
	}
}

export default Login