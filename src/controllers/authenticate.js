const Admin = require('../../models/admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const secretKey = process.env.JWT_SECRET;

exports.registerAdmin = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if Admin already exists
        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin already exists" });
        }

        // hash the password
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(password, salt);
        
        // create a new admin
        const newAdmin = new Admin({
            username,
            password,
        });
        await newAdmin.save();

        //  optionally, create a JWT token
        const token = jwt.sign({ id: newAdmin._id }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        res.status(201).json({ message: 'Admin registered successfully', token });

    } catch (error) {
        console.error('Error during registration: ', error);
        res.status(500). json({ message: 'Server error '});
    }
};

exports.loginAdmin = async (req, res)=>{
    const { username, password } = req.body;

    try {
        // Check if Admin Exists
        const admin = await Admin.findOne( { username });
        if (!admin) return res.status(404).json({message: 'Admin not found' });

        // Check Password
        const isMatch = await admin.matchPassword(password);
        if(!isMatch) return res.status(401).json({ message: "Invalid credentials" });

        // Create Token
        const token = jwt.sign({ id: admin._id }, secretKey, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true}).json({
            message: 'Login Successful',
            redirectUrl: 'api/auth/admin'
        })
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.protectRoute = (req, res, next) => {
    // if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    //     token = req.headers.authorization.split('')[1];
    // }

    const token = req.cookies.token || req.header('Authorization').replace('Bearer', ' ')

    if(!token) {
        return res.status(401).json({message: 'Not authorized, no token' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.admin = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Not authorized, token failed'});
    }
};