import React, { Component } from 'react'
import TopNav from './TopNav';
import SideNav from './SideNav';
import MainBody from './MainBody';
import CategoryDetails from './CategoryDetails';
export class Profile extends Component {
    render() {
        return (
            
            <MainBody></MainBody>
            // <div>
            //     <TopNav></TopNav>
            //     <div id="layoutSidenav">
            //         <SideNav></SideNav>
            //         <MainBody></MainBody>
            //     </div>
            // </div>
        )
    }
}

export default Profile
