const express = require('express'); // We will use Express to handle server
const path = require('path');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const helmet = require('helmet');
const router = require('./router/index');


// Create Express app endpoint
const app = express();


// App Depedencies
app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressValidator());
app.use('/', router);



module.exports = app;

