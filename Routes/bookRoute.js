const { bookRegister } = require('../Controller/bookController');

const bookRoute = require('express').Router();

//post book 
bookRoute.post('/bookPost',bookRegister)

module.exports = bookRoute;