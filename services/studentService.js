// services/studentService.js
const Student = require('../models/studentModel');

async function createStudent(content) {
    const data = new Student(content);
    await data.save();
    return data;
}

async function findStudentById(id) {
    return await Student.findById(id);
}

module.exports = {
    createStudent,
    findStudentById,
};
