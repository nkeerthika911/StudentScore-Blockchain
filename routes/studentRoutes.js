// routes/dataRoutes.js
const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

// Create a new student record
router.post('/create', studentController.createStudent);

// Verify data
router.get('/verify/:id', studentController.verifyStudent);

router.patch('/update/:id', studentController.updateStudent);

module.exports = router;
