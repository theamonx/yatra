const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({
    title: String,
    price: Number,
    location: String,
    description: String,
    activities: [{type: String}],
    days: Number,
    image: String
});

const Destination = mongoose.model('Destination', DestinationSchema);
module.exports = Destination;