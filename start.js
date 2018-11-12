const mongoose = require('mongoose');

require('dotenv').config({path: 'variables.env'}); // Import secret keys, connection strings/values from variables.env


// Connect to the MongoDB database + handle any failed connection
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true});
mongoose.Promise = global.Promise; // Using ES6 promises
mongoose.connection.on('error', (err) => {
    console.log(`MongoDB connection error: ${err.message}`); // console.log any failed connection
});


// Import our Models - Database Schema
require('./server/models/CRUD');


// Get the requirement from app.js
const app = require('./app');


// Start our application
app.set('port', process.env.PORT || 1234);
const server = app.listen(app.get('port'), () =>{
    console.log(`Express Server running @ localhost:${server.address().port}`); 
});