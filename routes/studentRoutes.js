// routes/dataRoutes.js
const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

// Create a new student record
router.post('/create', studentController.createStudent);

// Get and Verify data
router.get('/verify/:id', studentController.verifyStudent);

// Update a student record
router.patch('/update/:id', studentController.updateStudent);

module.exports = router;
