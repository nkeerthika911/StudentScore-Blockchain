// services/studentService.js
const Student = require('../models/studentModel');

const createStudent = async(content) => {
    const data = new Student(content);
    await data.save();
    return data;
}

const findStudentById = async(id) =>{
    return await Student.findById(id);
}

module.exports = {
    createStudent,
    findStudentById,
};
