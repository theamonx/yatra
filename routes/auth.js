const express = require('express');
const { loginAdmin, protectRoute, registerAdmin } = require('../src/controllers/authenticate');
const router = express.Router();
const path = require("path");

router.post('/login', loginAdmin);

router.get('/admin', protectRoute, (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'src', 'pages', 'Admin.html'));
});

router.post('/register', registerAdmin);

module.exports = router;