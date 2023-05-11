import { useState } from "react";
import { updateStudent } from "../services/api";
import { Button, Modal, Form } from "react-bootstrap";
import "./UpdateStudent.css";
const UpdateStudent = ({ student, handleUpdateStudent }) => {
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState(student);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    var { name, value } = event.target;
    /* if(name ==='dob'){
        value = new Date(value).toLocaleDateString();
    } */
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedStudent = await updateStudent(formValues);
      handleUpdateStudent(updatedStudent);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button className="update" onClick={handleShow}>
        Update
      </button>

      <Modal show={show} onHide={handleClose} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Update Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formStudentID">
              <Form.Label>Student ID</Form.Label>
              <Form.Control
                type="text"
                name="studentID"
                value={formValues.studentID}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={formValues.dob}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formClass">
              <Form.Label>Class</Form.Label>
              <Form.Control
                type="text"
                name="class"
                value={formValues.class}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button type="submit">
              Update Student
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateStudent;
