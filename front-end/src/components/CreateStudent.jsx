import { useState } from "react";
import { createStudent } from "../services/api";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import "./CreateStudent.css";

const CreateStudent = ({handleNewStudent}) => {
    const [formValues, setFormValues] = useState({
        studentID: "",
        name: "",
        dob: "",
        class: ""
    });
    //onSubmit handler
    async function handleSubmit(newStudent){
        console.log(newStudent);
        try {
            const createdStudent = await createStudent(newStudent);
            handleNewStudent(createdStudent);
        } catch (error) {
            console.log(error);
        }
    }

    //validationSchema
    const validationSchema = Yup.object().shape({
        studentID: Yup.string().required("Student ID is required"),
        name: Yup.string().required("Name is required"),
        dob: Yup.string().required("Date of birth is required"),
        class: Yup.string().required("Class is required")
    });

    //return student form
    return (
        <div className="form-wrapper">
            <Formik
                initialValues={formValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <FormGroup>
                        <label>StudentID</label>
                        <Field
                            type="text"
                            name="studentID"
                            className="form-control"
                        />
                        <ErrorMessage name="studentID" />
                    </FormGroup>
                    <FormGroup>
                    <label>Name</label>
                        <Field
                            type="text"
                            name="name"
                            className="form-control"
                        />
                        <ErrorMessage name="name" />
                    </FormGroup>
                    <FormGroup>
                    <label>Date of birth</label>
                        <Field
                            type="date"
                            name="dob"
                            className="form-control"
                        />
                        <ErrorMessage name="dob" />
                    </FormGroup>
                    <FormGroup>
                    <label>Class</label>
                        <Field
                            type="text"
                            name="class"
                            className="form-control"
                        />
                        <ErrorMessage name="class" />
                    </FormGroup>
                    <button type="submit" className="submitButton"> Submit </button>
                </Form>
            </Formik>
        </div>
    )
};

export default CreateStudent;
