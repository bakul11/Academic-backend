const { getAllReview, reviewPost, deleteAllReview } = require('../Controller/reviewController');

const reviewRoute = require('express').Router();

//Review Post
reviewRoute.post('/reviewPost', reviewPost);


//Review get post by id
reviewRoute.get('/getAllReview/:reviewId', getAllReview);


//All Review Delete
reviewRoute.delete('/deleteReviewAll', deleteAllReview);

module.exports = reviewRoute;