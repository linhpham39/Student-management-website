import { useState, useEffect } from "react";
import { deleteStudent, getStudents } from "../services/api";
import DeleteStudent from "./DeleteStudent";
import CreateStudent from "./CreateStudent";
import UpdateStudent from "./UpdateStudent";
import "./StudentList.css";
const StudentList = () => {
    const [students, setStudents] = useState([]);


    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getStudents();
            const formattedData = data.map((student) => {
                const dob = new Date(student.dob).toLocaleDateString();
                return { ...student, dob };
            });
            setStudents(formattedData);
        };
        fetchAPI();
    }, []);
    const handleNewStudent = (newStudent) => {
        setStudents([...students, newStudent]);
    };
    const handleDeleteStudent = (studentID) => {
        setStudents(students.filter((student) => student._id !== studentID));
    }
    const handleUpdateStudent = (updatedStudent) => {
        const updatedStudents = students.map((student) => {
            if (student._id === updatedStudent._id) {
                return updatedStudent;
            }
            return student;
        });
        setStudents(updatedStudents);
    };

    console.log(students);
    return (
        <div className="container">
            <h1 className="mt-4 mb-4">Create student</h1>
            <CreateStudent handleNewStudent={handleNewStudent}></CreateStudent>
            <h1 className="mt-4 mb-4">Student List</h1>
            <table className="table table-striped table-borderd">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Date of birth</th>
                        <th>Class</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student._id}>
                            <td>{student.studentID}</td>
                            <td>{student.name}</td>
                            <td>{student.dob}</td>
                            <td>{student.class}</td>
                            <td>
                                <UpdateStudent
                                    student={student}
                                    handleUpdateStudent={handleUpdateStudent}
                                />
                                <DeleteStudent
                                    studentID={student._id}
                                    handleDeleteStudent={handleDeleteStudent}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentList