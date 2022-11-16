const { postBlog, getAllBlog, getSingleBlog } = require('../Controller/blogController');

const blogRoute = require('express').Router();

//post blog 
blogRoute.post('/postBlog', postBlog);

//post blog 
blogRoute.get('/getAllBlog', getAllBlog);

//post blog 
blogRoute.get('/getSingleBlog/:blogID', getSingleBlog);

module.exports = blogRoute;