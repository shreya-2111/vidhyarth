const db = require('../config/db');

exports.getAssignments = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM assignments");
  res.json(rows);
};

exports.submitAssignment = async (req, res) => {
  const { student_id, assignment_id, file_url } = req.body;
  await db.query("INSERT INTO submissions (student_id, assignment_id, file_url) VALUES (?, ?, ?)", [student_id, assignment_id, file_url]);
  res.json({ message: "Assignment submitted" });
};

exports.getAttendance = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM attendance WHERE student_id = 1");
  res.json(rows);
};

exports.getNotifications = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM notifications WHERE user_id = 1");
  res.json(rows);
};

exports.getResources = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM resources");
  res.json(rows);
};
