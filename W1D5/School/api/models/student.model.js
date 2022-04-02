const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    code:{
        type: String,
        required: true
    },
    credit: {
        type: Number,
        required: true
    }
})
const StudentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    gpa:{
        type: Number,
        required: true
    },
    courses: [CourseSchema]
});

mongoose.model(process.env.STUDENT_MODEL, StudentSchema, process.env.STUDENT_COLLECTION);