const express = require('express');
const router = express.Router();
const Destination = require('../models/Destination');

// Get all destinations
router.get('/', async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.json(destinations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const destination = new Destination(req.body);
    try {
        const savedDestination = await destination.save();
        res.status(201).json(savedDestination);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;