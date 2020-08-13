//Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;  //step1 heroku deployment

// Import routes
const routes = require('./routes/api');

// MongoDB atlas URI & tahir123 <- MongoDB atlas password
//const MONGODB_URI = 'mongodb+srv://hammadtahir:tahir123@hammadcluster-rkcs7.mongodb.net/<dbname>?retryWrites=true&w=majority'

//step 2 heroku deployment --> comment mongodb uri above  and add  process.env.MONGODB_URI in mongoose.connect
//Connect to mongo db using given URI or locally
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mern_youtubee',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Check connection with mongodb
mongoose.connection.on('connected',  () => {
    console.log('Mongoose is connected!!!');
});

//use middleware to parse json and urlencoded
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// //Saving data to our mongo database
// const data = {
//     title: 'First MERN tutorial',
//     body: 'I am learning MERN stack development from a youtube channel'
// };

// //new instance of the model
// const newBlogPost = new BlogPost(data);

// //.save();
// newBlogPost.save((error) => {
//     if(error){
//         console.log('Ooops, something happened');
//     } else{
//         console.log('Data has been saved!!');
//     }
// });

//HTTP request logger
app.use(morgan('tiny'));

//configure route
app.use('/api',routes);

//step 3 heroku deployment - create custom variable in herouku
// go into client folder and type npm run build 
if(process.env.NODE_ENV ==='production'){
    app.use(express.static('client/build'));
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`));

//step 4 heroku deployment --> goto package.json and write build, install-client and heroku-postbuildcd scripts