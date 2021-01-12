//Error and user schema models
const HttpError = require('../models/http-error')
const User = require('../models/user')

//connection to database using MongoClient
const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://antara123:antara123@antara.nnbzs.mongodb.net/Antara?retryWrites=true&w=majority" 
const client = new MongoClient(uri);

// http://localhost:5000/api/songs/wishlist/u1
// http://localhost:5000/api/songs/wishlist/u1/s3
// http://localhost:5000/api/songs/wishlist/u1/s3 
// body for last 2 routes: {
//     "songid": "s3"
// }

//Function to get all songs present in wishlist
const GET_WISHLIST = async (req, res, next) => {
    //get the userId
    const userId = req.params.userid
    
    //find user using userId
    let userDetails;
    try{
       userDetails = await User.findById(userId)
    } catch(err){
        const error = new HttpError('Something is wrong', 500)
        return next(error)
    }

    //Check whether wishlist is empty. If empty return result
    const songsArray = userDetails.wishlist

    if(songsArray.length===0){
        const error = new HttpError('Wishlist is Empty', 200)
        return next(error)
    }
   
    //Find all songs added to wishlist
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
         throw new HttpError('Wishlist is Empty')
    }

    //Return array of songs
    res.json(songList)
}

//Add song to wishlist
const ADD_TO_WISHLIST = async (req, res, next) => {
    //get the songid and userid
    const {songid,userid} = req.body
//const userId = req.params.userid

    //Find the user and add song to the wishlist
    try{
       await User.findByIdAndUpdate({_id:userid},{$push: { wishlist: songid }})
    } catch(err){
        const error = new HttpError('Something is wrong', 500)
        return next(error)
    }
    
    res.json({msg:"Added"})
}

const DELETE_FROM_WISHLIST = async (req, res, next) => {
    //get the songid and userid
    const {songid,userid} = req.body
   
    //find the user and delete the song from wishlist
    try{
      await User.findByIdAndUpdate({_id:userid},{$pull: { wishlist: songid }})
    } catch(err){
        const error = new HttpError('Something is wrong', 500)
        return next(error)
    }

    res.json({msg : "Deleted"})
}

exports.GET_WISHLIST =GET_WISHLIST
exports.ADD_TO_WISHLIST = ADD_TO_WISHLIST
exports.DELETE_FROM_WISHLIST = DELETE_FROM_WISHLIST