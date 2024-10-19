// routes/activities.js
const express = require('express');
const router = express.Router();
const Activity = require('../models/Activity');

// Get all activities
router.get('/', async (req, res) => {
    try {
        const activities = await Activity.find();
        res.json(activities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new activity
router.post('/', async (req, res) => {
    const activity = new Activity(req.body);
    try {
        const savedActivity = await activity.save();
        res.status(201).json(savedActivity);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
