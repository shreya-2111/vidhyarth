const express = require('express');
const router = express.Router();
const { addFaculty, addStudent, getUsers, getAnalytics, deleteUser } = require('../controllers/adminController');

router.post('/faculty', addFaculty);
router.post('/student', addStudent);
router.get('/users', getUsers);
router.get('/analytics', getAnalytics);
router.delete('/user/:id', deleteUser);

module.exports = router;
