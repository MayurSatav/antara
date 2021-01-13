const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const HttpError = require('./models/http-error');
const songroutes = require('./routes/songs-routes')
const userroutes = require('./routes/users-routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/api/songs', songroutes)
app.use('/api/users', userroutes)

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
      }
      res.status(error.code || 500)
      res.json({message: error.message || 'An unknown error occurred!'});
})

console.log("app.js")
mongoose.connect('mongodb://antara123:antara123@antara-shard-00-00.nnbzs.mongodb.net:27017,antara-shard-00-01.nnbzs.mongodb.net:27017,antara-shard-00-02.nnbzs.mongodb.net:27017/Antara?ssl=true&replicaSet=atlas-i5nxpp-shard-0&authSource=admin&retryWrites=true&w=majority')
.then(() => {app.listen(5000)})
.catch(err => {console.log(err)})

// mongoose.connect('mongodb+srv://anjali:anjali@antara.irp3a.mongodb.net/antara?retryWrites=true&w=majority')
// .then(() => {app.listen(5000)})
// .catch(err => {console.log(err)})
