//Error and user schema models
const HttpError = require('../models/http-error')
const User = require('../models/user')

//connection to database using MongoClient
const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://antara123:antara123@antara.nnbzs.mongodb.net/Antara?retryWrites=true&w=majority" 
const client = new MongoClient(uri);

//Function to get all songs present in cart
const GET_PLAYLIST = async (req, res, next) => {
    //get the userId
    const userId = req.params.userid
    //console.log("cart")
    //find user using userId
    let userDetails;
    try{
       userDetails = await User.findById(userId)
    } catch(err){
        const error = new HttpError('Something is wrong', 500)
        return next(error)
    }

    //Check whether cart is empty. If empty return result
    const songsArray = userDetails.playlist 

    if(songsArray.length===0){
        const error = new HttpError('Playlist is Empty', 200)
        return next(error)
    }
   
    //Find all songs added to cart
    let songList = new Array() ; 
    let songId;
    let song;
    try{
        await client.connect();
        for(var i = 0; i < songsArray.length; i++){
            songId = songsArray[i]
            song = await client.db("Antara").collection("songs").findOne({SongId: songId});
            songList.push(song)
        }
    }catch(err){
        console.log(err)
    }
    
    if(songList.length === 0){
        const error = new HttpError('Playlist is Empty', 200)
        return next(error)
    }

    //Return array of songs
    console.log(songList)
    res.send(songList)
}

exports.GET_PLAYLIST = GET_PLAYLIST