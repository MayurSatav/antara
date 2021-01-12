//Error and user schema models
const HttpError = require('../models/http-error')
const User = require('../models/user')

//connection to database using MongoClient
const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://antara123:antara123@antara.nnbzs.mongodb.net/Antara?retryWrites=true&w=majority" 
const client = new MongoClient(uri);

// http://localhost:5000/api/songs/cart/u1
// http://localhost:5000/api/songs/cart/u1/s3
// http://localhost:5000/api/songs/cart/u1/s3 
// body for last 2 routes: {
//     "songid": "s3"
// }

//Function to get all songs present in cart
const GET_CART = async (req, res, next) => {
    //get the userId
    const userId = req.params.userid
    console.log(userId)
    //find user using userId
    let userDetails;
    try{
       userDetails = await User.findById(userId)
    } catch(err){
        const error = new HttpError('Something is wrong', 500)
        return next(error)
    }

    //Check whether cart is empty. If empty return result
    const songsArray = userDetails.cart 

    if(songsArray.length===0){
        const error = new HttpError('Cart is Empty', 200)
        return next(error)
    }
   //["s28","s26"]
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
         throw new HttpError('Cart is Empty')
    }

    console.log(songList[0])
    console.log("got req")
    //Return array of songs
    //res.json({ok:"ok"})
    res.json(songList)
    //res.send(songList)
}

//Add song to Cart
const ADD_TO_CART = async (req, res, next) => {
    //get the songid and userid
    //console.log("Received")
    const {userid, songid} = req.body
    //const userId = req.params.userid
    const userId = userid
    //Find the user and add song to the cart
    let userDetails;
    let user
    try{
        await client.connect();
       userDetails = await User.findByIdAndUpdate({_id:userId},{$push: { cart: songid }})
       //song = await client.db("Antara").collection("songs").findOne({SongId: songid});
    } catch(err){
        const error = new HttpError('Something is wrong', 500)
        return next(error)
    }finally {
        await client.close();
    }
    
    res.json({ok:"ok"})
}

const DELETE_FROM_CART = async (req, res, next) => {
    //get the songid and userid
    const {songid,userid} = req.body
    //find the user and delete the song from cart
    let userDetails;
    let user
    try{
       userDetails = await User.findByIdAndUpdate({_id:userid},{$pull: { cart: songid }})
    } catch(err){
        const error = new HttpError('Something is wrong', 500)
        return next(error)
    }

    res.json({msg : "Deleted"})
}

exports.GET_CART = GET_CART
exports.ADD_TO_CART = ADD_TO_CART
exports.DELETE_FROM_CART = DELETE_FROM_CART