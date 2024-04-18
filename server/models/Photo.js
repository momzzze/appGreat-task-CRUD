const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    created_at: { type: Date, default: Date.now }
});