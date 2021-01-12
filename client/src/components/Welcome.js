import React, { Component } from 'react'

export class Welcome extends Component {
    render() {
        return (
        <div style={{paddingTop: "50px"}}>
            <div class="container-fluid bg-dark  text-white" style={{width:"100%",height:"auto"}}>
                <div class="row">
                    <div class="col-sm-5" style={{marginTop: "1%",marginLeft: "10%"}}>
                        <h1 style={{fontSize: "110px",color:"#FC0254"}}><span>An♪ara</span> </h1>
                        <h1>For Everyone</h1>
        
                        <button type="button" class="btn explore" style={{borderRadius: "40px",backgroundColor: "#FC0254",color: "white"}}>
                            <span>Explore Antara</span>
                        </button>
                       
                    </div>
                    <div class="col-sm-5">
                        <img  src="img/main.png" style={{marginTop: "5%",width:"100%",height: "auto"}}/>
                    </div>
                </div>
            </div>

            <div class="container-fluid  text-white" style={{width:"100%",height:"auto"}}>
                <div class="row">
                    <div class="col-sm-5">
                        <img src="img/boy-listening-music.png" style={{marginTop: "5%",width:"100%",height: "auto"}}/>
                    </div>
                    <div class="col-sm" style={{marginTop: "5%"}}>
                        <h1 style={{fontSize: "100px",color:"#FC0254"}}><span>Unlimited Access to 100K tracks</span></h1>
                    </div>
                </div>
            </div>
            <br/>

            <div class="container-fluid bg-dark  text-white" style={{width:"100%",height:"auto"}}>
                <div class="row">
                    <div class="col-sm-5 " style={{marginTop: "5%",marginLeft: "10%"}}>
                        <h1>Tune into</h1>
                        <h1 style={{fontSize: "110px",color:"#FC0254"}}><span> Nirvana</span> </h1>
                    </div>
                    <div class="col-sm-5 ">
                        <div class="card mt-2" style={{backgroundColor: "#272C30",width: "80%",marginBottom: "1%"}}>
                            <div class="card-body" style={{marginTop: "2%",marginLeft: "5%"}}>
                                <p><i class="fas fa-play" style={{color:"#FC0254"}}></i> Play any track</p>
                                <p><i class="fas fa-compact-disc" style={{color:"#FC0254"}}></i> Order High Quality MP3 Disk</p>
                                <p><i class="fas fa-list-ul" style={{color:"#FC0254"}}></i> Customise your playlist and order</p>
                                <p><i class="fas fa-ad" style={{color:"#FC0254"}}></i> No ad interruptions</p>
                                <p><i class="fas fa-random" style={{color:"#FC0254"}}></i> Shuffle play</p>
                                <p><i class="fas fa-music" style={{color:"#FC0254"}}></i> High quality audio</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            
        </div>
        )
    }
}

export default Welcome
