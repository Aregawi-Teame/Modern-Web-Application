const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");
const courseController = require("../controllers/course.controller");
router.route("/students")
    .get(studentController.getAll)

router.route("/students/:studnetId")
    .get(studentController.getOne);

router.route("/students/:studnetId/courses")
    .get(courseController.getAll);
router.route("/students/:studnetId/courses/courseId")
    .get(courseController.getOne);

module.exports = router;