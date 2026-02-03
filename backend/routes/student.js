const express = require('express');
const router = express.Router();
const { getAssignments, submitAssignment, getAttendance, getNotifications, getResources } = require('../controllers/studentController');

router.get('/assignments', getAssignments);
router.post('/assignment/submit', submitAssignment);
router.get('/attendance', getAttendance);
router.get('/notifications', getNotifications);
router.get('/resources', getResources);

module.exports = router;
