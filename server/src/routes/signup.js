const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = express.Router();


// Define a signup route
router.post('/signup', async (req, res) => {
    // Implement your signup logic here
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        // Email is already taken; send a response to the user
        return res.status(409).json({ message: 'Email is already in use.' });
    }
    
    try {
        // Hash the user's password
        const saltRounds = 10; // You can adjust the number of salt rounds for security
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Example: Save the hashed password to a database
        // Here, you would typically use a database library or ORM
        // For demonstration purposes, we'll use a simple array
        const user = {
            name,
            email,
            password: hashedPassword, // Store the hashed password
        };
        console.log(user);

        const newUser = new User(user);
        // Save the user document to the database
        await newUser.save();

        return res.status(201).json({ message: 'User registered successfully.' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred during registration' });
    }
});

module.exports = router;