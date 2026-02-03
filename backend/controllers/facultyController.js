const db = require('../config/db');

exports.createTimetable = async (req, res) => {
  const { faculty_id, course, time } = req.body;
  await db.query("INSERT INTO courses (name, faculty_id) VALUES (?, ?)", [course, faculty_id]);
  res.json({ message: "Timetable created" });
};

exports.getTimetable = async (req, res) => {
  const { id } = req.params;
  const [rows] = await db.query("SELECT * FROM courses WHERE faculty_id = ?", [id]);
  res.json(rows);
};

exports.createAssignment = async (req, res) => {
  const { course_id, title, deadline } = req.body;
  await db.query("INSERT INTO assignments (course_id, title, deadline) VALUES (?, ?, ?)", [course_id, title, deadline]);
  res.json({ message: "Assignment created" });
};

exports.getAssignments = async (req, res) => {
  const { courseId } = req.params;
  const [rows] = await db.query("SELECT * FROM assignments WHERE course_id = ?", [courseId]);
  res.json(rows);
};

exports.markAttendance = async (req, res) => {
  const { student_id, course_id, date, status } = req.body;
  await db.query("INSERT INTO attendance (student_id, course_id, date, status) VALUES (?, ?, ?, ?)", [student_id, course_id, date, status]);
  res.json({ message: "Attendance marked" });
};

exports.getAttendance = async (req, res) => {
  const { courseId } = req.params;
  const [rows] = await db.query("SELECT * FROM attendance WHERE course_id = ?", [courseId]);
  res.json(rows);
};

exports.sendNotification = async (req, res) => {
  const { user_id, message } = req.body;
  await db.query("INSERT INTO notifications (user_id, message, type) VALUES (?, ?, 'Faculty')", [user_id, message]);
  res.json({ message: "Notification sent" });
};
