const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


//MiddleWare 
const cors = require('cors');
app.use(cors())
app.use(express.json())

//Dot Env 
require('dotenv').config()

//import Database 
const conectDB = require('./Configration/ConnectDB');

//All Routes Import Here
const courseRoute = require('./Routes/courseRoute');
const reviewRoute = require('./Routes/reviewRoute');
const bookRoute = require('./Routes/bookRoute');
const blogRoute = require('./Routes/blogRoutes');
const authRoute = require('./Routes/authRoute');


//Auth Routes 
app.use('/auth', authRoute);


//Course Routes 
app.use('/course', courseRoute);

//Review Routes 
app.use('/review', reviewRoute);

//Book Routes 
app.use('/book', bookRoute);

//Blog Routes 
app.use('/blog', blogRoute);




app.get('/', (req, res) => {
    res.send('Server start success')
})


app.listen(port, () => {
    console.log(`Server started successfully done ${port}`);
    conectDB();
})