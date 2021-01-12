//Error and user schema models
const HttpError = require('../models/http-error')

//connection to database using MongoClient
const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://antara123:antara123@antara.nnbzs.mongodb.net/Antara?retryWrites=true&w=majority" 
const client = new MongoClient(uri);

const GET_SONGS = async (req, res, next) => {
  
    Artist = ["Lenka","Arijit","Harrdy Sandhu","Shankar Mahadevan", "Rihana", "Patrick Swayze"]
    Genres = ["Rock", "Pop", "Folk", "Blues", "Jazz"]
    Language = ["Marathi", "Hindi", "English", "Tamil", "Punjabi"]

    const category = req.params.categoryValue

    const artist = Artist.find(a => a === category)
    const genre = Genres.find(g => g === category)
    const language = Language.find(l => l=== category)

    let songList = new Array() ; 
    if(!artist || !genre || !language){
        const error = new HttpError("Invalid Request! ", 404)
        return next(error)
    }else {
        try{
            await client.connect();
            songList =await client.db("Antara").collection("songs").find({Artist: artist}).toArray();
        }catch(err){
           console.log(err)
        }
    }
   
    res.json(songList)

}

exports.GET_SONGS = GET_SONGS