const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.get('/employees', (req, res) => {
//     res.send('Employees');
// });

const connectDB = require('./config/db');

// Load Config
dotenv.config({path: './config/config.env'})

connectDB();

//Routes

app.use('/', require('./routes/index'));

app.listen(3000);







