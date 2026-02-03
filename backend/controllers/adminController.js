const db = require('../config/db');

exports.addFaculty = async (req, res) => {
  const { name, email, password } = req.body;
  await db.query("INSERT INTO faculty (name, email, password) VALUES (?, ?, ?)", [name, email, password]);
  res.json({ message: "Faculty added" });
};

exports.addStudent = async (req, res) => {
  const { name, email, password } = req.body;
  await db.query("INSERT INTO students (name, email, password) VALUES (?, ?, ?)", [name, email, password]);
  res.json({ message: "Student added" });
};

exports.getUsers = async (req, res) => {
  const [faculty] = await db.query("SELECT * FROM faculty");
  const [students] = await db.query("SELECT * FROM students");
  res.json({ faculty, students });
};

exports.getAnalytics = async (req, res) => {
  const [attendance] = await db.query("SELECT COUNT(*) AS total FROM attendance");
  const [assignments] = await db.query("SELECT COUNT(*) AS total FROM assignments");
  res.json({ attendanceRate: attendance[0].total, submissionRate: assignments[0].total });
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await db.query("DELETE FROM faculty WHERE id = ?", [id]);
  await db.query("DELETE FROM students WHERE id = ?", [id]);
  res.json({ message: "User deleted" });
};
