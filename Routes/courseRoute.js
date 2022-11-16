const { postCourse, getAllCourse, getSingleCourse } = require('../Controller/courseController');

const courseRoute = require('express').Router();

//Post Course
courseRoute.post('/publishCourse', postCourse)


//get All Course
courseRoute.get('/getCourse', getAllCourse)

//get single Course
courseRoute.get('/getSingle/:courseId', getSingleCourse)



module.exports = courseRoute;