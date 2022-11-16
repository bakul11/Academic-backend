const reviewDB = require("../Model/reviewModel");

exports.reviewPost = async (req, res, next) => {
    try {
        const { discription, userName, userPhoto, postId } = req.body;
        const review = await reviewDB.create({
            discription,
            userName,
            userPhoto,
            postId
        })
        //success 
        res.status(201).json({
            success: true,
            message: "Review success done!",
            review
        })
    } catch (error) {
        res.status(401).json({
            message: "Review fail!",
            error: error.message
        })
    }
}

//Get Review Base Review
exports.getAllReview = async (req, res, next) => {
    try {
        const id = req.params.reviewId;
        const findID = await reviewDB.findById(id);
        if (!id) {
            return res.status(401).json({
                message: "Review Id not match!",
            })
        }

        const reviewID = { postId: id };
        const reviewData = await reviewDB.find(reviewID);

        //success
        res.status(200).json({
            success: true,
            reviewData
        })
    } catch (error) {

    }
}


//Delate all Review
exports.deleteAllReview = async (req, res, next) => {
    try {
        const delReviewAll = await reviewDB.deleteMany();
        //success
        res.status(200).json({
            success: true,
            delReviewAll
        })
    } catch (error) {

    }
}