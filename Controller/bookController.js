const bookDB = require("../Model/bookModel");

exports.bookRegister = async (req, res, next) => {
    try {
        const { fullName, phone, email } = req.body;
        const book = await bookDB.create({
            fullName,
            phone,
            email
        })
        //success booking
        res.status(201).json({
            message: 'Booking successfully Done!',
            success: true,
            book
        })
    } catch (error) {
        res.status(401).json({
            message: 'Booking fail please try aggain!',
            error: error.message
        })
    }
}