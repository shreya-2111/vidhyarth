const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    if (role === "faculty") {
      await db.query("INSERT INTO faculty (name, email, password, department) VALUES (?, ?, ?, ?)", 
        [name, email, hashedPassword, "General"]);
    } else {
      await db.query("INSERT INTO students (name, email, password, course) VALUES (?, ?, ?, ?)", 
        [name, email, hashedPassword, "General"]);
    }
    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [faculty] = await db.query("SELECT * FROM faculty WHERE email = ?", [email]);
    const [student] = await db.query("SELECT * FROM students WHERE email = ?", [email]);
    const user = faculty[0] || student[0];
    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, role: faculty[0] ? "faculty" : "student" }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.profile = async (req, res) => {
  res.json({ message: "Profile details endpoint" });
};
