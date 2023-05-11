//create route for student
import express from 'express';
import Student from '../model/Student.js';
import {getAllStudents, createStudent, updateStudentById, deleteStudentById } from '../controllers/studentController.js';
const router = express.Router();

router.post('/', createStudent);

//get
router.get('/', getAllStudents);

//put
router.put('/:id', updateStudentById);

//delete
router.delete('/:id', deleteStudentById);


export default router;