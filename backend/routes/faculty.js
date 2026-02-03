const express = require('express');
const router = express.Router();
const { createTimetable, getTimetable, createAssignment, getAssignments, markAttendance, getAttendance, sendNotification } = require('../controllers/facultyController');

router.post('/timetable', createTimetable);
router.get('/timetable/:id', getTimetable);
router.post('/assignment', createAssignment);
router.get('/assignment/:courseId', getAssignments);
router.post('/attendance', markAttendance);
router.get('/attendance/:courseId', getAttendance);
router.post('/notification', sendNotification);

module.exports = router;
