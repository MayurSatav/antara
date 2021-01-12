import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class TopNavWL extends Component {
    render() {
        return (
            <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">

                <Link class="navbar-brand" to="/">
                    <h3 style={{fontFamily: "Cambria"}}><span style={{color:"#FC0254"}}>♪ </span>Antara</h3>
                </Link>

                <ul class="navbar-nav ml-auto">
                    <Link class="nav-link " to="/Profile" role="button" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-user fa-fw"></i> Profile</Link >&nbsp; &nbsp;
                    <Link class="nav-link " to="/" role="button" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-home fa-fw"></i> Home</Link> &nbsp; &nbsp;
                    <a class="nav-link " href="#" role="button" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-info fa-fw"></i> About</a> &nbsp; &nbsp;
                    <a class="nav-link " href="#" role="button" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-question-circle fa-fw"></i> Help</a> &nbsp; &nbsp;
                    <Link class="nav-link " to="/Login" role="button" aria-haspopup="true" aria-expanded="false">Login | </Link>
                    <Link class="nav-link " to="/Signup" role="button" aria-haspopup="true" aria-expanded="false"
                        style={{color: "#FC0254"}}> Signup</Link>
                </ul>
            </nav>
        )
    }
}

export default TopNavWL
