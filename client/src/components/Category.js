import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function Category() {

    const [songs, setSongs] = useState([])
    const [CatName,setCat] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/api/songs')
        .then(res => {
            console.log(res)
            setSongs(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
    function categoryName(params) {
          
        setCat(params);
        // console.log(CatName)
      }

    const getSongsContent = songs => {
        let content = [];

        // if(CatName == "movies"){

        //     const temp = []

        //     for (let i = 0; i < songs.length; i++) {
        //         const song = songs[i];
        //         if(!(temp.includes(song.Movie))){
        //         temp.push(song.Movie)
        //             content.push(
        //               <div key={song.id} class="mix col-lg-2 col-md-4 col-sm-6">
        //                   <div class="playlist-item">
        //                       <img src={song.ArtistPath} alt=""/>
        //                       <h5>{song.Movie}</h5>
        //                   </div>
        //               </div>
        //             );

        //         }
                  
        //       }
        // }
        if(CatName == "genres"){
            const temp = []
           
            for (let i = 0; i < songs.length; i++) {
                const song = songs[i];
                if(!(temp.includes(song.Genres))){
                    temp.push(song.Genres)
                
                  content.push(
                      <div key={song.id} class="mix col-lg-2 col-md-4 col-sm-6">
                          <div class="playlist-item">
                              <img src={song.GenresPath} alt=""/>
                              <h5>{song.Genres}</h5>
                          </div>
                      </div>
                    );
              }
            }
        }else if(CatName == "artist"){

            const temp = []

            for (let i = 0; i < songs.length; i++) {
                const song = songs[i];
                if(!(temp.includes(song.Artist))){
                temp.push(song.Artist)
                    content.push(
                      <div key={song.id} class="mix col-lg-2 col-md-4 col-sm-6">
                          <div class="playlist-item">
                              <img src={song.ArtistPath} alt="" />
                              <h5>{song.Artist}</h5>
                          </div>
                      </div>
                    );

                }
                  
              }
        }
        else if(CatName == "regional"){
            const temp = []
            
            for (let i = 0; i < songs.length; i++) {
                const song = songs[i];
                if(!(temp.includes(song.Language))){
                    temp.push(song.Language)
                
                  content.push(
                      <div key={song.id} class="mix col-lg-2 col-md-4 col-sm-6">
                          <div class="playlist-item">
                              <img src={song.LanguagePath} alt=""/>
                              <h5>{song.Language}</h5>
                          </div>
                      </div>
                    );
              }
            }

        }
        else if(CatName == "all"){
            const temp = []
            
            for (let i = 0; i < songs.length; i++) {
                const song = songs[i];
                  content.push(
                      <div key={song.id} class="mix col-lg-2 col-md-4 col-sm-6">
                          <div class="playlist-item">
                              <img src={song.SongPath} alt=""/>
                              <h5>{song.SongName}</h5>
                          </div>
                      </div>
                    );
              }
        }

        // for (let i = 0; i < songs.length; i++) {
        //   const song = songs[i];
        // //   const prevsong = songs[0+i]
        // //   if(song.Artist[0] != prevsong.Artist[0]){
        //     content.push(
        //         <div key={song.id} class="mix col-lg-2 col-md-4 col-sm-6">
        //             <div class="playlist-item">
        //                 <img src={song.ArtistPath} alt=""/>
        //                 <h5>{song.Artist}</h5>
        //             </div>
        //         </div>
        //       );
        //     // }
        // }
        return content;
      };

      
    return (
        <div>
            <section class="playlist-section spad">
                <div class="container-fluid">
                    
                    <div class="container text-center"  >
                        <ul class="playlist-filter controls">
                            {/* <a href="#" onClick = {() => { setCat("movies");} } ><li class="control" data-filter=".artists">Movies</li></a> */}
                            <a href="#" onClick = {() => { categoryName("genres");} }><li class="control" data-filter=".genres">Genres</li></a>
                            <a href="#" onClick = {() => { categoryName("artist");} }><li class="control" data-filter=".artists">Artists</li></a>
                            <a href="#" onClick = {() => { categoryName("regional");} }><li class="control" data-filter=".movies">Regional</li></a>
                            <a href="#" onClick = {() => { categoryName("all");} }><li class="control" data-filter=".labels">All Songs</li></a>
                        </ul>
                    </div>                                              
                    <div class="clearfix"></div>
                        <div class="row playlist-area">
                            {getSongsContent(songs)}
                        </div>
                    </div>
            </section>

            </div>
    )
}
