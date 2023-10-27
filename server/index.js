const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const {customerRoute} = require('./routes/customerRoute');

const app = express();
app.use(express.json());
app.use(cors());


connectDB();         //create dataBase


const port = process.env.PORT || 3000;
const server = process.env.SERVER_URL || `http://localhost:${port}`
app.listen(port, () => {
    console.log(`----- server started on  : ${server}`);
})


// -----------routes-------------
app.use('/api/customer', customerRoute);



app.all('*', (req, res) => {
    res.json(`API does not exist`);
})
