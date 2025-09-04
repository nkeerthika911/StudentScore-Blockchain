// controllers/studentController.js
const studentService = require('../services/studentService');
// const contract = require('../contracts/contract.js');
// const { generateSHA256 } = require('../utils/hash');

const createStudent = async(req, res) => {
    try {
        const content = req.body;
        console.log(content);
        const data = await studentService.createStudent(content);

        // Blockchain integration (commented out for now)
        // const recordId = data._id.toString();
        // const hash = generateSHA256(recordId);
        // const tx = await contract.storeHash(recordId, hash);
        // await tx.wait();

        res.json({ success: true, message: 'Student record created successfully!', data });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
}

const verifyStudent = async(req, res) => {
    try {
        const { id } = req.params;
        const data = await studentService.findStudentById(id);

        if (!data) {
            return res.status(404).json({ success: false, message: 'Record not found' });
        }

        // Blockchain verification logic (commented out for now)
        // const localHash = generateSHA256(data);
        // const blockChainHash = await contract.getHash(id);

        res.json({ success: true, message: 'Record found', data });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
}

module.exports = {
    createStudent,
    verifyStudent,
};
