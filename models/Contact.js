// models/Contact.js
const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Email is Requried'] },
    phone: { type: String, required: [true, 'Phone Number is Required'], match: [/^\d{8,15}$/] },
    email: { type: String, match: [/^\S+@\S+\.\S+$/] },
    address: { type: String },
    packageDetails: {
        title: { type: String },
        price: { type: Number },
        location: { type: String },
        // description: { type: String, required: true },
        // activities: [{type: String}],
        days: { type: Number }
    }
});

module.exports = mongoose.model('Contact', ContactSchema);
