const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const dotenv = require('dotenv');
dotenv.config();

const contactRoutes = require('../routes/contact');
const activityRoutes = require('../routes/activities');
const destinationRoutes = require('../routes/destinations');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API routes
app.use('/api/destinations', destinationRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/contacts', contactRoutes);

app.use(express.static(path.join(__dirname, '..', 'src')));

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'src', 'pages', 'Home.html'));
});

app.get('/Home.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'pages', 'Home.html'));
});

app.get('/Destinations.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'pages', 'Destinations.html'));
});

app.get('/Activities.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'pages', 'Activities.html'));
});

app.get('/ContactUs.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'pages', 'contact.html'));
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;