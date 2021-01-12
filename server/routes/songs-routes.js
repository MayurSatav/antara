const express = require('express')

const songsCartControllers = require('../controllers/songs-cart-controller')
const songsWishlistControllers = require('../controllers/songs-wishlist-controller')
const songsCategoryControllers = require('../controllers/songs-category-controller')

const routes = express.Router()

routes.get('/cart/:userid', songsCartControllers.GET_CART)

routes.post('/cart/:userid/:songid', songsCartControllers.ADD_TO_CART)

routes.delete('/cart/:userid/:songid', songsCartControllers.DELETE_FROM_CART)

routes.get('/wishlist/:userid', songsWishlistControllers.GET_WISHLIST)

routes.post('/wishlist/:userid/:songid', songsWishlistControllers.ADD_TO_WISHLIST)

routes.delete('/wishlist/:userid/:songid', songsWishlistControllers.DELETE_FROM_WISHLIST)

routes.get('/category/:categoryValue', songsCategoryControllers.GET_SONGS)

module.exports = routes