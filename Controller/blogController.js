const blogDB = require("../Model/blogModel");

//post blog
exports.postBlog = async (req, res, next) => {
    try {
        const { title, discrition, userName, userProfile, postTime,titlePhoto } = req.body;

        const blog = await blogDB.create({
            title,
            discrition,
            userName,
            userProfile,
            postTime,
            titlePhoto
        })
        //success blog
        res.status(201).json({
            message: 'Blog Post success!',
            success: true,
            blog
        })

    } catch (error) {
        res.status(401).json({
            message: 'Blog Post fail Please try aggain!',
            error: error.message
        })
    }
}

//get all blog
exports.getAllBlog = async (req, res, next) => {
    try {
        const getALlBlog = await blogDB.find();
        //success
        res.status(200).json({
            success: true,
            getALlBlog
        })
    } catch (error) {
        res.status(404).json({
            message: 'Blog not found!',
            error: error.message
        })
    }
}



//get single blog
exports.getSingleBlog = async (req, res, next) => {
    try {
        const id = req.params.blogID;
        const singlBlogid = await blogDB.findById(id);
        //success
        res.status(200).json({
            success: true,
            singlBlogid
        })
    } catch (error) {
        res.status(404).json({
            message: 'Blog not found!',
            error: error.message
        })
    }
}