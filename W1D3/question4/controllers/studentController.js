const studentsData = require("../data/school.json");

module.exports.getAllStudents = function(req, res){
    res.status(200).json(studentsData);
};

module.exports.getOneStudent = function(req,res){
    let studentId = parseInt(req.params.studentId)
    res.status(200).json(studentsData[studentId-1]);
}