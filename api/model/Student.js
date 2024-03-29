//create schema Student

import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    studentID:{
        type: String,
        required: true
    },
    dob:{
        type: Date,
        required: true
    },
    class:{
        type: String,
        required: true
    }
})

export default mongoose.model('Student', studentSchema);
