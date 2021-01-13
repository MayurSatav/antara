const express = require('express')
const { check } = require('express-validator')
const usersControllers = require('../controllers/users-controllers')
const routes = express.Router()

routes.get('/:userid', usersControllers.getUserDetails)
//http://localhost:5000/api/users
routes.get('/', usersControllers.getUsers)

//http://localhost:5000/api/users/login
// {
//  
//     "email":"p@gmail.com",
//     "password":"123456"
// }
routes.post('/login', usersControllers.login)

//http://localhost:5000/api/users/signup
// {
//     "name":"Pratiksha",
//     "email":"p@gmail.com",
//     "password":"123456"
// }
routes.post('/signup',[
    check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min:6})
], usersControllers.signup)

module.exports = routes