//Post Course

const courseDB = require("../Model/courseModel");

exports.postCourse = async (req, res, next) => {
    try {
        const { title, discription, headPhoto, student, lesson, price, rating, oldPrice, userName, userPhoto } = req.body;

        const courseData = await courseDB.create({
            title,
            discription,
            headPhoto,
            student,
            lesson,
            price,
            rating,
            oldPrice,
            userName,
            userPhoto
        })

        //success 
        res.status(201).json({
            success: true,
            message: 'Course publish successfully!',
            courseData
        })
    } catch (error) {
        res.status(404).json({
            message: 'Post fail please try aggain!',
            error: error.message
        })
    }
}



//Get All Course 
exports.getAllCourse = async (req, res, next) => {
    try {
        const getAllCourse = await courseDB.find();
        //success 
        res.status(200).json({
            success: true,
            getAllCourse
        })

    } catch (error) {
        res.status(404).json({
            message: 'Course not found!',
            error: error.message
        })
    }
}



//Get single Course 
exports.getSingleCourse = async (req, res, next) => {
    try {
        const id = req.params.courseId;
        const getID = await courseDB.findById(id);

        if (!getID) {
            return res.status(404).json({
                message: 'Id does not match!',
                error: error.message
            })
        }

        //success 
        res.status(200).json({
            success: true,
            getID
        })

    } catch (error) {
        res.status(404).json({
            message: 'Course not found!',
            error: error.message
        })
    }
}



