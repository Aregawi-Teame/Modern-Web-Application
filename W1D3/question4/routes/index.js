const express = require("express");
const studentController =require('../controllers/studentController');
const router = express.Router();

router.route("/students")
    .get(studentController.getAllStudents);
router.route("/students/:studentId")
    .get(studentController.getOneStudent);

module.exports = router;