require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
const router = require('routes');
var { Vehicle } = require('./_helpers/db');
var vehicles = require('./vehicles');

Vehicle.insertMany(vehicles)
      .then(() => console.log("Inserted Successfully"))
      .catch((err) => console.log(err))
    
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/', router);

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4001;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
