import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TopNavWL from './TopNavWL';
import Footer from './Footer';

export class Singup extends Component {
  constructor(props) {
    super(props);
    this.state = { name2: '', email2: '', pass2: '', cpass2: '', errormessage1: '', errormessage2: '', errormessage3: '', errormessage4: '', input: {}, errors: {} };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit = async (event) => {
    event.preventDefault()

    if (this.validate()) {
      console.log(this.state)
      let input = {};
      input["pass2"] = "";
      input["cpass2"] = "";
      this.setState({ input: input });
      this.setState({ name2: '' })
      this.setState({ email2: '' })
      this.setState({ pass2: '' })

      //alert('Registered Successfully')
    }

    try{
      const response = await fetch("http://localhost:5000/api/users/signup", 
      {method: 'POST',
   headers: {
       'Content-Type' : 'application/json'
   },
  body : JSON.stringify({
          name : event.target.name.value,
          email: event.target.email.value,
          password : event.target.password.value
      })
  })
  const responseData = await response.json()
  //alert(responseData)
  alert("Registered successfully")
  console.log(responseData)
  } catch (err){
      alert(err);
  }

  }


  validate() {
    let input = this.state.input;
    let errors = {};
    let flag = true;
    let err1 = "";
    let err2 = "";
    let err3 = ""
    if (this.state.name2.length < 1) {
      err1 = <p style={{ color: 'red' }}>Name can't be empty</p>
      flag = false;
    }
    if (this.state.email2.length < 1) {
      err2 = <p style={{ color: 'red' }}>Email can't be empty</p>
      flag = false;
    }


    if (!input["pass2"]) {
      flag = false;
      errors["pass2"] = "Please enter your password.";
    }

    if (!input["cpass2"]) {
      flag = false;
      errors["cpass2"] = "Please enter your confirm password.";
    }

    if (typeof input["pass2"] !== "undefined" && typeof input["cpass2"] !== "undefined") {

      if (input["pass2"] != input["cpass2"]) {
        flag = false;
        errors["cpass2"] = "Passwords don't match.";
      }
    }


    this.setState({ errormessage1: err1 });
    this.setState({ errormessage2: err2 });
    this.setState({ errormessage3: err3 })

    this.setState({ errors: errors })
    return flag;
  }

  handleChange = (event) => {

    let nam1 = event.target.name

    let val1 = event.target.value
    let err1 = ''
    let err2 = ''
    let err3 = ''
    let input = this.state.input;
    let errors = this.state.errors;
    input[event.target.name] = event.target.value;

    if (nam1 === 'name2') {
      if (val1 == "") {
        err1 = <p style={{ color: 'red' }}>Name Should not be Empty</p>
      }

      if (Number(val1)) {
        err1 = <p style={{ color: 'red' }}>Name should not be Number</p>
      }
    }

    if (nam1 === 'email2') {
      if (val1 == "") {
        err2 = <p style={{ color: 'red' }}>Email Should not be Empty</p>
      }
      var pattern = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
      if (!pattern.test(val1)) {

        err2 = <p style={{ color: 'red' }}>Please enter valid email address</p>
      }

    }

    if (nam1 === 'pass2') {
      if (val1.length <= 6) {
        err3 = <p style={{ color: 'red' }}>Length should be greater than 6</p>
      }
    }

    this.setState({ errormessage1: err1 })
    this.setState({ errormessage2: err2 })
    this.setState({ errormessage3: err3 })
    this.setState({ [nam1]: val1 })
    this.setState({ input })

  }

  render() {
    return (
      <div>
       
        <div class="card" style={{ margin: "0 auto", float: "none", marginTop: "5%", width: "30%" }}>
          <h1 class="text-center" style={{ fontSize: "80px", color: "#FC0254" }}><span>An♪ara</span> </h1>
          <div class="card-body">
            <h5 class="text-center">SignUp</h5><hr></hr>
            <form onSubmit={this.handleSubmit}>

              <div class="form-group">
                <label for="name">Name:</label><span class="required" style={{ color: 'red' }}>*</span>
                <input
                  type="text"
                  name="name2"
                  value={this.state.name2}
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Enter name"
                  id="name" />
                {this.state.errormessage1}

              </div>

              <div class="form-group">
                <label for="email">Email Address:</label><span class="required" style={{ color: 'red' }}>*</span>
                <input
                  type="text"
                  name="email2"
                  value={this.state.email2}
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Enter email"
                  id="email" />
                {this.state.errormessage2}

              </div>

              <div class="form-group">
                <label for="password">Password:</label><span class="required" style={{ color: 'red' }}>*</span>
                <input
                  type="password"
                  name="pass2"
                  value={this.state.input.pass2}
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Enter password"
                  id="password" />
                  {this.state.errormessage3}


                <div className="text-danger">{this.state.errors.pass2}</div>
              </div>

              <div class="form-group">
                <label for="password">Confirm Password:</label><span class="required" style={{ color: 'red' }}>*</span>
                <input
                  type="password"
                  name="cpass2"
                  value={this.state.input.cpass2}
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Enter confirm password"
                  id="confirm_password" />

                <div className="text-danger">{this.state.errors.cpass2}</div>
              </div>

              <input type="submit" value="Submit" class="btn btn-primary btnClass" style={{ backgroundColor: "#FC0254", border: "none" }} />

            </form>

            <div className="col-sm-12">
              <p class="text-center">Already have an account? <Link to="./login" style={{ color: "red" }}>Login</Link>.</p>
            </div>

          </div>
        </div>
        <hr></hr>
        <Footer></Footer>
      </div>
    )
  }
}
export default Singup
