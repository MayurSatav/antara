import React, { Component } from 'react'

export class Orders extends Component {
    render() {
        return (
            <div class="container" style={{marginTop:"5%",paddingBottom: "150px"}}>

                    <div class="container px-1 px-md-4 py-5 mx-auto">
                            <div class="card">
                                <div class="row d-flex justify-content-between px-3 top">
                                    <div class="d-flex">
                                        <h5>ORDER <span class="text-primary font-weight-bold">#Y34XDHR</span></h5>
                                    </div>
                                    <div class="d-flex flex-column text-sm-right">
                                        <p class="mb-0">Expected Arrival <span>20/1/20</span></p>
                                        <p>USPS <span class="font-weight-bold">234094567242423422898</span></p>
                                    </div>
                                </div>
                                <div class="row d-flex justify-content-center">
                                    <div class="col-12">
                                        <ul id="progressbar" class="text-center">
                                            <li class="active step0"></li>
                                            <li class="active step0"></li>
                                            <li class="active step0"></li>
                                            <li class="step0"></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="row justify-content-between top">
                                    <div class="row d-flex icon-content"> <img class="icon" src="https://i.imgur.com/9nnc9Et.png"/>
                                        <div class="d-flex flex-column">
                                            <p class="font-weight-bold">Order<br/>Processed</p>
                                        </div>
                                    </div>
                                    <div class="row d-flex icon-content"> <img class="icon" src="https://i.imgur.com/u1AzR7w.png"/>
                                        <div class="d-flex flex-column">
                                            <p class="font-weight-bold">Order<br/>Shipped</p>
                                        </div>
                                    </div>
                                    <div class="row d-flex icon-content"> <img class="icon" src="https://i.imgur.com/TkPm63y.png"/>
                                        <div class="d-flex flex-column">
                                            <p class="font-weight-bold">Order<br/>En Route</p>
                                        </div>
                                    </div>
                                    <div class="row d-flex icon-content"> <img class="icon" src="https://i.imgur.com/HdsziHP.png"/>
                                        <div class="d-flex flex-column">
                                            <p class="font-weight-bold">Order<br/>Arrived</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
 
            <div class="table-responsive">
               <table class="table">
               <thead>
                   <tr>
                   <th scope="col" class="border-0 bg-light">
                       <div class="p-2 px-3 text-uppercase">Songs</div>
                   </th>
                   <th scope="col" class="border-0 bg-light">
                       <div class="p-2 px-3 text-uppercase">Demo</div>
                   </th>
                   <th scope="col" class="border-0 bg-light">
                       <div class="py-2 text-uppercase">Total</div>
                   </th>
                   <th scope="col" class="border-0 bg-light">
                       <div class="py-2 text-uppercase">Items</div>
                   </th>
                   <th scope="col" class="border-0 bg-light">
                       <div class="py-2 text-uppercase">Action</div>
                   </th>
                   </tr>
               </thead>
                           
                           <tbody>
                           <tr>
                               <th scope="row" class="border-0">
                               <div class="p-2">
                                   <img src="./img/main/1.jpg" alt="" width="70" class="img-fluid rounded shadow-sm"/>
                                   <div class="ml-3 d-inline-block align-middle">
                                   <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">Song Name</a></h5><span class="text-muted font-weight-normal font-italic d-block">Category</span>
                                   </div>
                               </div>
                               </th>
                               <td>
                                   <audio id="player" src="horse.mp3" controls controlsList="nodownload"></audio>
                               </td>
                               <td class="border-0 align-middle"><strong>₹79.00</strong></td>
                               <td class="border-0 align-middle"><strong>2</strong></td>
                               <td class="align-middle">
                                <button type="button" class="btn btn-warning btn-sm">Track</button>&nbsp;
                                <button type="button" class="btn btn-danger btn-sm">Cancel</button>
                           </td>
                           </tr>
                           <tr>
                           <th scope="row">
                           <div class="p-2">
                               <img src="./img/lenka.jpg" alt="" width="70" class="img-fluid rounded shadow-sm"/>
                               <div class="ml-3 d-inline-block align-middle">
                               <h5 class="mb-0"><a href="#" class="text-dark d-inline-block">Song Name2</a></h5><span class="text-muted font-weight-normal font-italic">Category</span>
                               </div>
                           </div>
                           </th>
                           <td>
                               <audio id="player" src="horse.mp3" controls controlsList="nodownload"></audio>
                           </td>
                           <td class="align-middle"><strong>₹79.00</strong></td>
                           <td class="align-middle"><strong>5</strong></td>
                           <td class="align-middle">
                                <button type="button" class="btn btn-warning btn-sm">Track</button>&nbsp;
                                <button type="button" class="btn btn-danger btn-sm">Cancel</button>
                           </td>
                       </tr>
                       
                           
                       </tbody>
                           
                           </table>
                       </div>
                   {/* <!-- End --> */}
       </div>
        )
    }
}

export default Orders
