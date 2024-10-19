const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    name: String,
    image: String,
});

module.exports = mongoose.model('Activity', ActivitySchema);