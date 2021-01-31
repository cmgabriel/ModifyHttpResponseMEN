const express = require('express');
const dotenv = require('dotenv');
const {
    getExtEmployees
} = require('./src/controllers/employee');

const router = require('./src/routes/routes');

//Load the configuration file.
dotenv.config({path: './config/config.dev.env'});

// Connect to the database
const dbConnect = require('./config/db');
dbConnect();

//Initialize the new application
const app = express();

app.use(express.json());

getExtEmployees()

//Manage Routes
app.use('/api/v1',router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(
    `Server running in ${process.env.NODE_ENV} on PORT ${PORT}`
    )
); 