// controllers/studentController.js
const studentService = require('../services/studentService');
const { storeHash, getLatestHash } = require('../contracts/blockchain');
const { generateSHA256 } = require('../utils/hash');

const createStudent = async (req, res) => {
    try {
        const content = req.body;

        // Save student to DB
        const data = await studentService.createStudent(content);

        // Blockchain integration: hash essential data
        const recordToHash = {
            _id: data._id.toString(),
            name: data.name,
            email: data.email,
            grade: data.grade
        };

        const hash = generateSHA256(recordToHash);

        const tx = await storeHash(data._id.toString(), hash);

        console.log('Blockchain transaction:', data._id.toString(), tx.hash);

        res.json({
            success: true,
            message: 'Student record created successfully!',
            data
        });
    } catch (err) {
        console.error('Error creating student:', err);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

const verifyStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await studentService.findStudentById(id);

        if (!data) {
            return res.status(404).json({ success: false, message: 'Record not found' });
        }

        const reqData = { _id: data._id.toString(), name: data.name, email: data.email, grade: data.grade };

        // Blockchain verification logic
        const localHash = generateSHA256(reqData);
        const blockChainHash = await getLatestHash(id.toString());
        console.log('Local hash:', localHash);
        console.log('Blockchain hash:', blockChainHash);
        if (localHash !== blockChainHash) {
            return res.status(403).json({ success: false, message: 'Record has been tampered with!' });
        }
        else {
            res.json({ success: true, message: 'Record found', data });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
}

module.exports = {
    createStudent,
    verifyStudent
};
