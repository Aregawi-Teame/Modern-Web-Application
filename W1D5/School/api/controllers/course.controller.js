const mongoose = require("mongoose");
const Studnet = mongoose.model(process.env.STUDENT_MODEL);

module.exports.getAll = function(req, res){
    console.log("GetAll course controller called")
    const studnetId = req.params.studnetId;
    Studnet.findById(studnetId).select("courses").exec(function(err, students){
        if(err){
            console.log(err.message);
            res.status(500).json({error: "Sorry! Somthing Wrong. Please try again."})
        } else{
            res.status(200).json(students.courses);
        }
    });
};

module.exports.getOne = function(req,res){
    console.log("GetOne course controller called");
    const studentId = req.params.studentId;
    const courseId = req.params.courseId;

    Studnet.findById(studentId).select("courses").exec((err, students)=>{
        if(err){
            console.log(err.message)
            res.status(500).json({Error: "Sorry! we can't find your data"});
        }else{
            res.status(200).json(students.courses.id(courseId));
        }
    })
};