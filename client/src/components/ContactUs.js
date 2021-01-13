import React, { Component } from 'react'
import TopNavWL from './TopNavWL';
import Footer from './Footer';

export class ContactUs extends Component {

    constructor(props) {
        super(props)
        this.state = { name1: '', email1: '', phone1: '', designation1: '', errormessage1: '', errormessage2: '' };
    }

    submitHandler = (event) => {
        event.preventDefault();
        if (this.validate()) {
            console.log(this.state)
            this.setState({ name1: '' })
            this.setState({ email1: '' })
            this.setState({ phone1: '' })
            // this.setState({ designation1: '' })
            alert('Registered Successfully')
        }

    }

    validate() {
        let flag = true;
        let err1 = "";
        let err2 = "";
        let err3 = "";
        let err4 = "";
        if (this.state.name1.length < 1) {
            err1 = <p style={{ color: 'red' }}>Name can't be empty</p>
            flag = false;
        }
        if (this.state.email1.length < 1) {
            err2 = <p style={{ color: 'red' }}>Email can't be empty</p>
            flag = false;
        }
        if (this.state.phone1.length < 1) {
            err3 = <p style={{ color: 'red' }}>Phone can't be empty</p>
            flag = false;
        }
        // if (this.state.designation1.length < 1) {
        //     err4 = <p style={{ color: 'red' }}>Designation can't be empty</p>
        //     flag = false;
        // }
        this.setState({ errormessage1: err1 });
        this.setState({ errormessage2: err2 });
        this.setState({ errormessage3: err3 });
        // this.setState({ errormessage4: err4 });
        return flag;
    }

    onChangeHandler = (event) => {
        let nam1 = event.target.name
        let val1 = event.target.value
        let err1 = ''
        let err2 = ''
        let err3 = ''
        let err4 = ''

        if (nam1 === 'name1') {
            if (val1 == "") {
                err1 = <p style={{ color: 'red' }}>Name Should not be Empty</p>
            }

            if (Number(val1)) {
                err1 = <p style={{ color: 'red' }}>Name should not be Number</p>
            }
        }

        if (nam1 === 'email1') {
            if (val1 == "") {
                err2 = <p style={{ color: 'red' }}>Email Should not be Empty</p>
            }
            var pattern = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
            if (!pattern.test(val1)) {
                // flag = false;
                err2 = <p style={{ color: 'red' }}>Please enter valid email address</p>
            }

        }

        if (nam1 === 'phone1') {
            if (val1 == "") {
                err3 = <p style={{ color: 'red' }}>Phone Number should not be Empty</p>
            }

            if (!Number(val1)) {
                err3 = <p style={{ color: 'red' }}>Please Enter Numbers only</p>
            }

            if (val1.length > 10) {
                err3 = <p style={{ color: 'red' }}>Please Enter 10 Digit Number</p>
            }


        }

        if (nam1 === 'designation1') {
            // if (val1 == "") {
            //     err4 = <p style={{ color: 'red' }}>Designation Should not be Empty</p>
            // }

            if (Number(val1)) {
                err4 = <p style={{ color: 'red' }}>Designation should not be Number</p>
            }
        }

        this.setState({ errormessage1: err1 })
        this.setState({ errormessage2: err2 })
        this.setState({ errormessage3: err3 })
        this.setState({ errormessage4: err4 })
        this.setState({ [nam1]: val1 })
    }

    render() {
        return (
            <div>
      
                <div class="container">
                    <div class="row" style={{ marginTop: "8%", marginBottom: "3%", marginLeft: "60px" }}>
                        <div class="card  " style={{ width: "40%" }}>
                            <div class="card-body">
                                <h2>Contact Us</h2>
                                {/* {this.state.errormessage} */}
                                <form onSubmit={this.submitHandler}>
                                    <div class="form-group">
                                        <label for="name">Name</label><span class="required" style={{ color: 'red' }}>*</span>
                                        <input type="text" class="form-control" id="name" placeholder="Enter name" name="name1" onChange={this.onChangeHandler} />
                                        {this.state.errormessage1}
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email:</label><span class="required" style={{ color: 'red' }}>*</span>
                                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email1" onChange={this.onChangeHandler} />
                                        {this.state.errormessage2}
                                    </div>
                                    <div class="form-group">
                                        <label for="phone">Phone</label><span class="required" style={{ color: 'red' }}>*</span>
                                        <input type="text" class="form-control" id="phone" placeholder="Enter phone" name="phone1" onChange={this.onChangeHandler} />
                                        {this.state.errormessage3}
                                    </div>
                                    <div class="form-group">
                                        <label for="designation">Designation</label>
                                        <input type="text" class="form-control" id="designation" placeholder="Enter designation" name="designation1" onChange={this.onChangeHandler} />
                                        {this.state.errormessage4}
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    {/* {this.state.errormessage} */}
                                    <button type="submit" class="btn btn-primary border-0" style={{ backgroundColor: "#FC0254" }}>Submit</button>
                                </form>
                            </div>
                        </div>
                        <div style={{ borderLeft: "2px solid #FC0254", height: "500px", marginLeft: "2%" }}></div>
                        <div class="card border-0" >
                            <img src="./img/contact.png" style={{width:"500px",height:"auto"}}></img>
                            <div class="container">
                                <div class="">
                                    <div id="googlemap" style={{width:"100%",height:"350px"}}></div>
                                </div>
                            </div>
                            </div>
                    </div>

                </div>
                <hr></hr>
                {/* <Footer></Footer> */}
            </div>
        )
    }
}

export default ContactUs



