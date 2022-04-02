const mongoose = require("mongoose");
const Studnet = mongoose.model(process.env.STUDENT_MODEL);

module.exports.getAll = function(req, res){
    console.log("getAll student controller called");
    let count = req.query && req.query.count ? req.query.count : 5;
    let offset = req.query && req.query.offset ? req.query.offset : 0;

    Studnet.find().skip(offset).limit(count+offset).exec((err, students)=>{
        if(err){
            console.log(err.message);
            res.status(500).json({error: "Sorry! your data is not displayed. Please try again"})
        } else{
            res.status(200).json(students);
        }
    })

};

module.exports.getOne = function(req, res){
    console.log("GetOne student controller called");
    let studnetId = req.params.studnetId;
    Studnet.findById(studnetId).exec(function(err, student){
        if(err){
            console.log(err.message);
            res.status(500).json({error: "Sorry! your data is not displayed. Please try again"})
        } else{
            res.status(200).json(student);
        }
    })
}