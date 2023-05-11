import Student from "../model/Student.js";

//create a new student
async function createStudent(req, res) {
    const newStudent = new Student(req.body);
    try {
        const saveStudent = await newStudent.save();
        res.status(200).json(saveStudent);
    } catch (error) {
        res.status(500).json(error);
    }
}

//get all students
async function getAllStudents(req, res) {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json(error);
    }
}

//update student by id
async function updateStudentById(req, res) {
    try {
        const updateStudent = await Student.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateStudent);
    } catch (error) {
        res.status(500).json(error);
    }
};

//delete student by id
async function deleteStudentById(req, res) {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.status(200).json("Student is deleted successfully!");
    } catch (error) {
        res.status(500).json(error);
    }
}

//export all function
export {
    createStudent,
    getAllStudents,
    updateStudentById,
    deleteStudentById
};