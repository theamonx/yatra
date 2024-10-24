const Destination = require('../../models/Destination');

exports.addDestination = async (req, res) => {
    try {
        const newDestination = new Destination(req.body);
        await newDestination.save();

        res.status(201).json({ message: 'Destination added successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error adding destination', error: err.message });
    }
};

exports.editDestination = async (req, res) => {
    try {
        const destination = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json({ message: 'Destination updated successfuly', destination });
    } catch (err) {
        res.status(500).json({ message: 'Error updating destination', error: err.message });
    }
};

exports.deleteDestination = async (req, res) => {
    try{
        await Destination.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: 'Destination deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting destination', error: err.message });
    }
};

exports.getDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.status(200).json(destinations);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching destinations', error: err.message })
    }
};