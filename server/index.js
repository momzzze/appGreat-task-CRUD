const express = require('express');
const router = require('./routes');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const port = 3001;   // normally should be in .env
const dbUrl = process.env.MONGODB_URL;


const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
mongoose.connect(dbUrl).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});